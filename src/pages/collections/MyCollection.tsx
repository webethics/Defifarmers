import { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import {
  Grid,
  Container,
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  makeStyles,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link as RouterLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// redux
import { useSelector } from '../../redux/store';
// components
import Page from '../../components/Page';
import uniqueId from 'utils/uniqueId';
// @types
import { ProductState } from '../../@types/products';
import { isEqual, min, max } from 'lodash';
// date fucntion
import { add } from 'date-fns';
// lottie
import Lottie from 'react-lottie';
import animationData from '../../lotties/62761-walking-pothos.json';
import { Player } from '@lottiefiles/react-lottie-player';
import CollectionCard from './collectionCard';
import { useTreedefiFarmers } from 'hooks/useContract';
// import { useWallet } from '@binance-chain/bsc-use-wallet';
import { useWeb3React } from '@web3-react/core';
import RarityRankingBox from '../../components/RarityRankingBox';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 15,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

const MyCollection = () => {
  const classes = useStyles();
  const history = createBrowserHistory();
  const linkTo = (id: string) => `/sell/${id}`;
  const linkToDetails = (id: string) => `/tree/${id}`;
  const [open, setOpen] = useState(false);
  const { account } = useWeb3React();
  const [treeData, setTreeData] = useState<any>();
  const [myCollection, setMyCollection] = useState([]);
  const farmerContract = useTreedefiFarmers();
  const [loading, setLoading] = useState(true);
  const [indexLength, setIndex] = useState(0);
  const [filterValue, setFilterValue] = useState(0);
  const [toolValue, setToolValue] = useState([]);
  const [capValue, setCapValue] = useState([]);
  const [beardValue, setBeardValue] = useState([]);
  const ENDPOINT = process.env.REACT_APP_API;
  let b = [];

  useEffect(() => {
    const getData = async () => {
      let a = [];
      const indexToken = await farmerContract.balanceOf(account);
      setIndex(indexToken);
      if (indexToken == 0) {
        setLoading(false);
      }
      setMyCollection([]);
      for (let i = 0; i < indexToken; i++) {
        const tokenId = await farmerContract.tokenOfOwnerByIndex(account, i);
        const response = await axios.get(ENDPOINT + 'getFarmerData/' + tokenId);
        a.push({ ...response.data.data, filterKey: 1 });
        setMyCollection((prevDati) => [...prevDati, response.data.data]);
        setLoading(false);
        if (a.length == indexToken) {
          // setMyCollection([...a]);
          // setLoading(false);
        }
      }
    };
    if (account) {
      setLoading(true);
      setMyCollection([]);
      getData();
    } else {
      setLoading(false);
    }
  }, [account]);

  const findCategory = (rarity, indexId) => {
    if (indexId == 3) {
      if (['Violet cap red hair', 'Farmer hat'].indexOf(rarity.value) > -1) {
        return 1;
      } else if (
        ['Red brushed hair', 'Priest yellow hair'].indexOf(rarity.value) > -1
      ) {
        return 2;
      } else if (
        ['Bluecap brown hair', 'Sailor hat'].indexOf(rarity.value) > -1
      ) {
        return 3;
      } else if (
        ['Painter cap', 'Elvis hair', 'Bon Jovi hair', 'Bowler cap'].indexOf(
          rarity.value
        ) > -1
      ) {
        return 4;
      } else if (['McFly cap', 'Afro Hair'].indexOf(rarity.value) > -1) {
        return 5;
      } else {
        return 0;
      }
    }

    if (indexId == 5) {
      if (['Strubble short'].indexOf(rarity.value) > -1) {
        return 1;
      } else if (['Stubble medium'].indexOf(rarity.value) > -1) {
        return 2;
      } else if (['Cirlce black'].indexOf(rarity.value) > -1) {
        return 3;
      } else if (['Circle brown'].indexOf(rarity.value) > -1) {
        return 4;
      } else if (['Mustaches'].indexOf(rarity.value) > -1) {
        return 5;
      } else {
        return 0;
      }
    }

    if (indexId == 8) {
      if (
        ['Water Hose', 'Green apple', 'Red apple'].indexOf(rarity.value) > -1
      ) {
        return 1;
      } else if (['Pear', 'Corn', 'Watering can'].indexOf(rarity.value) > -1) {
        return 2;
      } else if (['Fruits', 'Grapes', 'Mobile'].indexOf(rarity.value) > -1) {
        return 3;
      } else if (
        ['Mobile headsets', 'Rake', 'Pitchfork'].indexOf(rarity.value) > -1
      ) {
        return 4;
      } else if (['Laptop', 'Folder', 'Vane'].indexOf(rarity.value) > -1) {
        return 5;
      } else {
        return 0;
      }
    }
  };

  const handleFilter = (e) => {
    setFilterValue(Number(e.target.value));

    // if (e.target.value == 10) {
    //   setToolValue(['Laptop', 'Folder', 'Vane']);
    //   setCapValue(['McFly cap', 'Afro Hair']);
    //   setBeardValue(['Mustaches']);
    // } else if (e.target.value == 20) {
    //   setToolValue(['Mobile headsets', 'Rake', 'Pitchfork']);
    //   setCapValue(['Painter cap', 'Elvis hair', 'Bon Jovi hair', 'Bowler cap']);
    //   setBeardValue(['Circle brown']);
    // } else if (e.target.value == 30) {
    //   setToolValue(['Fruits', 'Grapes', 'Mobile']);
    //   setCapValue(['Bluecap brown hair', 'Sailor hat']);
    //   setBeardValue(['Cirlce black']);
    // } else if (e.target.value == 40) {
    //   setToolValue(['Pear', 'Corn', 'Watering can']);
    //   setCapValue(['Red brushed hair', 'Priest yellow hair']);
    //   setBeardValue(['Stubble medium']);
    // } else if (e.target.value == 50) {
    //   setToolValue(['Water Hose', 'Green apple', 'Red apple']);
    //   setCapValue(['Violet cap red hair', 'Farmer hat']);
    //   setBeardValue(['Strubble short']);
    // } else if (e.target.value == 60) {
    //   setToolValue(['Laptop']);
    //   setCapValue(['Visor']);
    //   setBeardValue([]);
    // } else {
    //   setToolValue([]);
    //   setCapValue([]);
    //   setBeardValue([]);
    // }

    // setMyCollection(newCollection);
  };

  return (
    <RootStyle title='Treedefi - My Collection'>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={12} mb={4}>
            <Box
              component='div'
              sx={{ display: 'flex' }}
              alignItems='center'
              className='d_b_575'
            >
              <Button
                className='back_ic back_ic_v2'
                onClick={() => history.back()}
              >
                <ChevronLeftIcon sx={{ fontSize: 20, lineHeight: '14px' }} />
                <Typography fontWeight={300} fontSize={16} sx={{ mt: 0 }}>
                  Back
                </Typography>
              </Button>
              <Typography
                variant='h4'
                component='h2'
                fontSize={{ lg: 32, xs: 24 }}
                fontWeight={600}
                sx={{ mr: 2 }}
              >
                My DeFi Farmers
              </Typography>
            </Box>
          </Grid>
          {/* Iteme */}

          {/* <Grid item xs={12} sm={6} md={4} lg={3} mb={3}>
            <RarityRankingBox />
          </Grid> */}
          <Grid item xs={12}>
            <Box className='radio_box'>
              <Box className='radio_btn'>
                <input
                  type='radio'
                  name='farmers'
                  value={0}
                  onChange={handleFilter}
                />
                <label>All</label>
              </Box>
              <Box className='radio_btn'>
                <input
                  type='radio'
                  name='farmers'
                  value={5}
                  onChange={handleFilter}
                />
                <label>LEGENDARY</label>
              </Box>
              <Box className='radio_btn'>
                <input
                  type='radio'
                  name='farmers'
                  value={4}
                  onChange={handleFilter}
                />
                <label>EPIC</label>
              </Box>
              <Box className='radio_btn'>
                <input
                  type='radio'
                  name='farmers'
                  value={3}
                  onChange={handleFilter}
                />
                <label>EXCEPTIONAL</label>
              </Box>
              <Box className='radio_btn'>
                <input
                  type='radio'
                  name='farmers'
                  value={2}
                  onChange={handleFilter}
                />
                <label>RARE</label>
              </Box>
              <Box className='radio_btn'>
                <input
                  type='radio'
                  name='farmers'
                  value={1}
                  onChange={handleFilter}
                />
                <label>COMMON</label>
              </Box>
              <Box className='radio_btn'>
                <input
                  type='radio'
                  name='farmers'
                  value={6}
                  onChange={handleFilter}
                />
                <label>Mythical Farmer</label>
              </Box>
            </Box>
            {/* <FormControl
              variant='outlined'
              className={`${classes.formControl} customSelect`}
            >
              <InputLabel htmlFor='outlined-age-native-simple'>
                Rarity Ranking
              </InputLabel>
              <Select
                native
                value={filterValue}
                onChange={handleFilter}
                label='Rarity'
                inputProps={{
                  name: 'age',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option aria-label='None' value={0}>
                  All
                </option>
                <option value={10}>Legendary</option>
                <option value={20}>Epic</option>
                <option value={30}>Exceptional</option>
                <option value={40}>Rare</option>
                <option value={50}>Common</option>
              </Select>
            </FormControl> */}
          </Grid>
          {myCollection && myCollection.length > 0 && !loading && (
            <>
              {myCollection
                .filter((farmer) => {
                  if (filterValue === 0) {
                    return true;
                  }
                  if (filterValue === 6) {
                    if (
                      farmer.trees.attributes[8].value === 'Laptop' ||
                      farmer.trees.attributes[6].value === 'Visor'
                    ) {
                      return true;
                    }
                  }
                  const arrayAvg = max([
                    findCategory(farmer.trees.attributes[3], 3),
                    findCategory(farmer.trees.attributes[5], 5),
                    findCategory(farmer.trees.attributes[8], 8),
                  ]);
                  return arrayAvg === filterValue;
                  // const index = arrayAvg.indexOf(
                  //   max([
                  //     farmer.avgRariry[3],
                  //     farmer.avgRariry[5],
                  //     farmer.avgRariry[8],
                  //   ])
                  // );
                  // return capValue.length > 0 && index === 0
                  //   ? capValue.indexOf(farmer.trees.attributes[3].value) > -1
                  //   : beardValue.length > 0 && index === 1
                  //   ? beardValue.indexOf(farmer.trees.attributes[5].value) > -1
                  //   : toolValue.length > 0 && index === 2
                  //   ? toolValue.indexOf(farmer.trees.attributes[8].value) > -1
                  //   : true;
                })
                .map((farmer, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} mb={3} key={index}>
                      <RarityRankingBox
                        farmerData={farmer.trees}
                        rarity={farmer.avgRariry}
                      />
                    </Grid>
                  );
                })}
            </>
          )}

          {loading &&
            [...Array(4)].map((e, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} mb={3} key={index}>
                <Box className='farmer_box'>
                  <Skeleton variant='rectangular' height={300} />
                  <Box className='skltnpddng'>
                    <Skeleton variant='text' height={50} />
                    <Skeleton variant='text' height={20} />
                    <Skeleton variant='text' height={20} />
                    <Skeleton variant='text' height={20} />
                    <Skeleton variant='text' height={20} />
                    <Skeleton variant='text' height={20} />
                  </Box>
                </Box>
              </Grid>
            ))}

          {/* for spacing */}
          <Grid item xs={12} mb={5}>
            {myCollection && myCollection.length === 0 && !loading && (
              <div style={{ textAlign: 'center' }}>
                <Lottie options={defaultOptions} height={300} width={300} />
                <div>No DeFi Farmers found. Mint yours! </div>
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
};

export default MyCollection;
