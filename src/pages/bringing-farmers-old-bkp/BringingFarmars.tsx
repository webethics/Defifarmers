import React, { useState, useEffect } from 'react';
import { Grid, Box, Container, Typography, Stack, Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Element } from 'react-scroll';
// import AOS from 'aos';
import { Link } from 'react-scroll';
import { useWeb3React } from '@web3-react/core';
import { useMysteryBoxAvax } from 'hooks/useContract';
import { useSnackbar } from 'notistack';
import ReactPixel from 'react-facebook-pixel';
import LinearProgress from '@material-ui/core/LinearProgress';
import RarityRankingDemo from './RarityRankingDemo';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RankingBox from './RankingBox';
import Countdown from 'react-countdown';
import { useLocation } from 'react-router';

export default function BringingFarmars() {
  // AOS.init();
  const [count, setCount] = useState(1);
  const { account } = useWeb3React();
  const location = useLocation();

  const mystryBoxContract = useMysteryBoxAvax();
  const [Qty, setQty] = useState(0);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [sold, setSold] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [reff, setReff] = useState('');
  const ENDPOINT = process.env.REACT_APP_API;
  const navigate = useNavigate();
  const currentTimeStamp = new Date().getTime();
  function handlePlus() {
    if (count < Qty) {
      setCount(count + 1);
    }
  }

  function handleMinus() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function handleValueChange(e) {
    const x = Number(e.target.value);

    if (isNaN(x) || x < 1 || x > Qty) {
    } else {
      setCount(x);
    }
  }

  const SubmitQty = async (e) => {
    if (account) {
      setLoading(true);
      let snackKey;
      let txnHash;
      try {
        const transaction = await mystryBoxContract.mint(count, {
          from: account,
          value: String(price * count),
        });
        snackKey = enqueueSnackbar('Minting is in Progress', {
          variant: 'info',
          preventDuplicate: true,
          persist: true,
        });
        txnHash = transaction.hash;
        await transaction.wait();
        closeSnackbar(snackKey);
        setLoading(false);
        ReactPixel.trackCustom('Purchase', {
          value: 90,
          currency: 'USD',
        });
        await axios.post(ENDPOINT + 'reff', {
          account: account.toLowerCase(),
          Reffaccount: reff.toLowerCase(),
          txHash: txnHash,
        });
        await axios.post(ENDPOINT + 'addCashbackData', {
          account: account,
          txHash: txnHash,
        });

        enqueueSnackbar('Minted Successfully', {
          variant: 'info',
        });
        navigate('/defi-farmers');
        // .once('transactionHash', (transactionHash) => {
        //   snackKey = enqueueSnackbar('Minting is in Progress', {
        //     variant: 'info',
        //     preventDuplicate: true,
        //     persist: true,
        //   });
        //   txnHash = transactionHash;
        // })
        // .once('confirmation', (confirmation) => {
        //   closeSnackbar(snackKey);
        //   setLoading(false);
        //   ReactPixel.trackCustom('Purchase', {
        //     value: 90,
        //     currency: 'USD',
        //   });
        //   axios.post(ENDPOINT + 'reff', {
        //     account: account.toLowerCase(),
        //     Reffaccount: reff.toLowerCase(),
        //     txHash: txnHash,
        //   });
        //   axios.post(ENDPOINT + 'addCashbackData', {
        //     account: account,
        //     txHash: txnHash,
        //   });

        //   // axios.post(ENDPOINT + 'addCashbackData', {
        //   //   account: account,
        //   //   txHash: txnHash,
        //   // });
        //   enqueueSnackbar('Minted Successfully', {
        //     variant: 'info',
        //   });
        //   navigate('/defi-farmers');
        //   // setTimeout(() => {
        //   //   window.location.reload();
        //   // }, 2000);
        // })
        // .on('error', (error) => {
        //   closeSnackbar(snackKey);

        //   setLoading(false);
        //   enqueueSnackbar('Error while Minting', {
        //     variant: 'error',
        //   });
        // });
      } catch (err) {
        closeSnackbar(snackKey);

        setLoading(false);
        enqueueSnackbar('Error while Minting', {
          variant: 'error',
        });
      }

      // console.log(count, account, price);
      // await mystryBoxContract.methods
      //   .mint(count)
      //   .send({
      //     from: account,
      //     value: price * count,
      //   })
      //   .once('transactionHash', (transactionHash) => {
      //     snackKey = enqueueSnackbar('Minting is in Progress', {
      //       variant: 'info',
      //       preventDuplicate: true,
      //       persist: true,
      //     });
      //     txnHash = transactionHash;
      //   })
      //   .once('confirmation', (confirmation) => {
      //     closeSnackbar(snackKey);
      //     setLoading(false);
      //     axios.post(ENDPOINT + 'addCashbackData', {
      //       account: account,
      //       txHash: txnHash,
      //     });
      //     enqueueSnackbar('Minted Successfully', {
      //       variant: 'info',
      //     });
      //     navigate('/defi-farmers');
      //     // setTimeout(() => {
      //     //   window.location.reload();
      //     // }, 2000);
      //   })
      //   .on('error', (error) => {
      //     closeSnackbar(snackKey);

      //     setLoading(false);
      //     enqueueSnackbar('Error while Minting', {
      //       variant: 'error',
      //     });
      //   });
      e.preventDefault();
    } else {
      alert('Please Connect Wallet First');
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (location.search && account) {
        if (location.search.split('reff=')[1].toLowerCase() !== account.toLowerCase()) {
          await axios.post(ENDPOINT + 'click', {
            account: location.search.split('reff=')[1].toLowerCase(),
          });
        }
        setReff(location.search.split('reff=')[1]);
      }
    };
    getData();
  }, [location, account]);

  useEffect(() => {
    const getData = async () => {
      const itemSold = await mystryBoxContract.itemsSold();
      setSold(Number(itemSold));
      const lastid = await mystryBoxContract.lastId();
      setTotal(Number(lastid));
      const dailyLimit = await mystryBoxContract.dailyLimit();

      const priceValue = await mystryBoxContract.price();
      setPrice(Number(priceValue));

      if (account) {
        setQty(0);
        const currentDay = await mystryBoxContract.currentDay();
        const finalLimit = await mystryBoxContract.dailyPurchase(account, currentDay);
        setQty(currentTimeStamp < 1640782800000 ? 20 : Number(dailyLimit) - Number(finalLimit));
      } else {
        setQty(currentTimeStamp < 1640782800000 ? 20 : Number(dailyLimit));
      }
    };

    getData();
  }, [account]);

  return (
    <>
      <Box className='brngng_bnr_prnt'>
        <Box component='img' src='/static/images/banner_img.jpg' className='w-100' alt='' />
        <Box className='bnr_cntnt'>
          <Container maxWidth='lg'>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography component='h2' className='def_h'>
                  Building the Ecoverse <br />
                  with DeFi Farmers
                </Typography>
                <Box className='avx_bxc'>
                  <Link to='MintSc' smooth={true} duration={500}>
                    <Button
                      variant='contained'
                      color='secondary'
                      className='min_btn'
                      startIcon={
                        <Box
                          component='img'
                          src='/static/images/nertwork01.svg'
                          alt=''
                        />
                      }
                    >
                    Mint
                    </Button>
                  </Link>
                  <a href="/referral" style = {{ textDecoration: 'none'}} >
                   <Button
                    variant='contained'
                    color='secondary'
                    className='min_btn'
                    startIcon={
                      <Box
                        component='img'
                        src='/static/images/ref.svg'
                        alt=''
                      />
                    }
                  >
                    Refer friends
                  </Button> 
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Element name='FeaturesSc'>
        <Box className='abt_farmer'>
          <Container maxWidth='lg'>
            <Grid container spacing={3} alignItems={'center'} justifyContent={'center'}>
              <Grid item md={5}>
                <Box
                  className='tdimg_prnt'
                  // data-aos='fade-left'
                  // data-aos-duration='2000'
                >
                  <Box component='img' src='/static/images/multiplefarmers.gif' alt='' />
                </Box>
              </Grid>
              <Grid item md={7}>
                <Box
                  className='td_contant '
                  textAlign={{ xs: 'center', md: 'left' }}
                  // data-aos='fade-up'
                  // data-aos-duration='1500'
                >
                  <Typography component='h2' className='def_h'>
                    DeFi Farmers
                  </Typography>
                  <Typography className='def_p '>
                    DeFi Farmers consists of 9,500 randomly generated eco-friendly NFT Farmers living on the Avalanche network. Each DeFi Farmer is an
                    NFT that represents your avatar in the "Ecoverse", an{' '}
                    <strong> ecosystem of technologies and visions based on reforestation and environment preservation values </strong>. 
                    You can use your farmer in <strong><a href="https://news.treedefi.com/introducing-tellus-logo-contest-6ecc01164c94" target="_blank">Tellus Game</a></strong>, our play-to-earn game currently in Beta Test!
                    DeFi Farmers
                    can be found with a variety of different outfits and emotions but no two Farmers are alike. Each Farmers brings their own style
                    with unique hats, hair, clothing and farming tools from a total of 57 different attributes!
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Element>
      <Element name='MintSc'>
        <Box className='becom_far'>
          <Box component='img' src='/static/images/bottom_img_01.png' alt='' className='top_img' />
          <Container maxWidth='lg'>
            <Grid
              container
              spacing={3}
              className={
                count == 1
                  ? ''
                  : count == 2
                  ? 'bx_sldr_01 bx_sldr_02'
                  : count == 3
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03'
                  : count == 4
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04'
                  : count == 5
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05'
                  : count == 6
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06'
                  : count == 7
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06 bx_sldr_07'
                  : count == 8
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06 bx_sldr_07 bx_sldr_08'
                  : count == 9
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06 bx_sldr_07 bx_sldr_08 bx_sldr_09'
                  : count == 10
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06 bx_sldr_07 bx_sldr_08 bx_sldr_09 bx_sldr_10'
                  : count == 11
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06 bx_sldr_07 bx_sldr_08 bx_sldr_09 bx_sldr_10 bx_sldr_11'
                  : count == 12
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06 bx_sldr_07 bx_sldr_08 bx_sldr_09 bx_sldr_10 bx_sldr_11 bx_sldr_12'
                  : count == 13
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06 bx_sldr_07 bx_sldr_08 bx_sldr_09 bx_sldr_10 bx_sldr_11 bx_sldr_12 bx_sldr_13'
                  : count == 14
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06 bx_sldr_07 bx_sldr_08 bx_sldr_09 bx_sldr_10 bx_sldr_11 bx_sldr_12 bx_sldr_13 bx_sldr_14'
                  : count == 15
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06 bx_sldr_07 bx_sldr_08 bx_sldr_09 bx_sldr_10 bx_sldr_11 bx_sldr_12 bx_sldr_13 bx_sldr_14 bx_sldr_15'
                  : count == 16
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06 bx_sldr_07 bx_sldr_08 bx_sldr_09 bx_sldr_10 bx_sldr_11 bx_sldr_12 bx_sldr_13 bx_sldr_14 bx_sldr_15 bx_sldr_16'
                  : count == 17
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06 bx_sldr_07 bx_sldr_08 bx_sldr_09 bx_sldr_10 bx_sldr_11 bx_sldr_12 bx_sldr_13 bx_sldr_14 bx_sldr_15 bx_sldr_16 bx_sldr_17'
                  : count == 18
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06 bx_sldr_07 bx_sldr_08 bx_sldr_09 bx_sldr_10 bx_sldr_11 bx_sldr_12 bx_sldr_13 bx_sldr_14 bx_sldr_15 bx_sldr_16 bx_sldr_17 bx_sldr_18'
                  : count == 19
                  ? 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06 bx_sldr_07 bx_sldr_08 bx_sldr_09 bx_sldr_10 bx_sldr_11 bx_sldr_12 bx_sldr_13 bx_sldr_14 bx_sldr_15 bx_sldr_16 bx_sldr_17 bx_sldr_18 bx_sldr_19'
                  : 'bx_sldr_01 bx_sldr_02 bx_sldr_03 bx_sldr_04 bx_sldr_05 bx_sldr_06 bx_sldr_07 bx_sldr_08 bx_sldr_09 bx_sldr_10 bx_sldr_11 bx_sldr_12 bx_sldr_13 bx_sldr_14 bx_sldr_15 bx_sldr_16 bx_sldr_17 bx_sldr_18 bx_sldr_19 bx_sldr_20'
              }>
              <Grid item xs={6} md={3} className='fr_ordr tx_alin'>
                <Box className='farmer_man_img flt_lft'>
                  <Box component='img' src='/static/farmers/farmer_img01.jpg' className='frmr_df_img frst_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img03.jpg' className='frmr_df_img abslt_img trd_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img05.jpg' className='frmr_df_img abslt_img five_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img07.jpg' className='frmr_df_img abslt_img six_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img09.jpg' className='frmr_df_img abslt_img egt_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img011.jpg' className='frmr_df_img abslt_img ten_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img013.jpg' className='frmr_df_img abslt_img twlv_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img015.jpg' className='frmr_df_img abslt_img ftn_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img017.jpg' className='frmr_df_img abslt_img sxtn_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img019.jpg' className='frmr_df_img abslt_img eightn_frmr_img' alt='' />
                  <Box component='img' src='/static/images/dot_img_01.svg' alt='' className='dot_img_01' />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className='becm_fr'>
                  <Typography component='h2' className='def_h'>
                    🧑‍🌾 Be a Farmer
                  </Typography>
                  <Typography>
                    {currentTimeStamp < 1648922400000
                      ? `Flash sale starts in `
                      : 'Flash sale ends in '}
                    {currentTimeStamp < 1648922400000 ? (
                      <Countdown date={1648922400000} />
                    ) : (
                      <Countdown date={1648989003000} />
                    )}
                  </Typography>
                  <Typography>
                    {currentTimeStamp < 1640782800000
                      ? `Minting starts in `
                      : ''}
                    {currentTimeStamp < 1640782800000 ? (
                      <Countdown date={1640782800000} />
                    ) : (
                      sold +
                      ` / 9500 Farmers minted`
                    )}
                  </Typography>
                  <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography style={{ marginRight: '5px' }}>
                      {currentTimeStamp < 1642770000000
                        ? `Mint before `
                        : ''}
                    </Typography>

                    <Typography>
                      {currentTimeStamp < 1642770000000 && (
                        <>
                          <Countdown date={1642770000000} /> and get an NFTree!
                        </>
                      )}
                    </Typography>
                  </Box>
                  <Box className='counterDisplay'>
                    <Box className='qntt_box'>
                      <Button onClick={handleMinus}>-</Button>
                      <input type='text' min='1' value={count} onClick={() => setCount(1)} onChange={handleValueChange} />
                      <Button onClick={handlePlus} className='qnttbtnrgt'>
                        +
                      </Button>
                    </Box>
                    <Button className='AddBtn' onClick={SubmitQty} disabled={currentTimeStamp < 1640782800000}>
                      FARM IN!
                    </Button>
                  </Box>
                  <Typography className='qntt_btntxt'>
                    <span />
                    {/* {price / 1e18} AVAX / Farmer <b>(Max: {Qty} / day)</b> */}
                    0.6 AVAX / Farmer - <b>Max: {Qty} / day / wallet</b> <br />
                     Metamask recommended <br/>
                     👉 get your <a href="/referral" target="_blank" style={{ color: 'white' }}>referral code</a> to earn fees. <a href="https://docs.defifarmers.net/defi-farmers/referral-program" target="_blank" style={{ color: 'white' }}> T&C</a> applies

                  </Typography> 
                </Box>
              </Grid>
              <Grid item xs={6} md={3} className='tx_alin rspnvorpdng'>
                <Box
                  className='farmer_man_img flt_rgt'
                  // data-aos='fade-down'
                  // data-aos-duration='3500'
                >
                  <Box component='img' src='/static/farmers/farmer_img02.jpg' className='frmr_df_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img04.jpg' className='frmr_df_img abslt_img scnd_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img06.jpg' className='frmr_df_img abslt_img four_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img08.jpg' className='frmr_df_img abslt_img svn_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img010.jpg' className='frmr_df_img abslt_img nine_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img012.jpg' className='frmr_df_img abslt_img elvn_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img014.jpg' className='frmr_df_img abslt_img trtn_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img016.jpg' className='frmr_df_img abslt_img fftn_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img018.jpg' className='frmr_df_img abslt_img svntn_frmr_img' alt='' />
                  <Box component='img' src='/static/farmers/farmer_img020.jpg' className='frmr_df_img abslt_img nntn_frmr_img' alt='' />
                  <Box component='img' src='/static/images/dot_02.svg' alt='' className='dot_img_01' />
                </Box>
              </Grid>
            </Grid>
          </Container>
          <Box component='img' src='/static/images/bottom_img_02.png' alt='' className='bottom_img' />
        </Box>
      </Element>
      <Element name='Ecosystem'>
        <Box className='abt_farmer about_td_main'>
          <Container maxWidth='lg'>
            <Grid container spacing={3} alignItems={'center'}>
              <Grid item md={6}>
                <Box
                  className='td_contant'
                  // data-aos='fade-right'
                  // data-aos-duration='2500'
                >
                  <Typography component='h2' className='def_h'>
                    Tellus Game
                  </Typography>
                  <Typography
                    className='def_p'
                    sx={{
                      textAlign: {
                        md: 'left',
                        xs: 'center',
                      },
                    }}>
                    By holding a DeFi Farmer, you will have access to
                    <strong> Tellus Game, our new play-to-earn game </strong> where to play missions which aim is to preserve the environment. DeFi Farmers
                    is a spin-off project created by Treedefi, the eco-friendly DeFi protocol. Treedefi allows investors to have a real world impact,
                    and offers them the opportunity to offset their CO2 footprint through NFTrees, NFTs backed by real planted trees around the world.
                    If you own a Farmer, you can enjoy in advance our Treedefi Features.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  className='tdimg_prnt abt_td_pddngh'
                  sx={{
                    maxWidth: {
                      xs: '40% !important',
                      md: '100% !important',
                    },
                  }}
                  // data-aos='fade-left'
                  // data-aos-duration='2500'
                >
                  <object type='image/svg+xml' className='animtin_imgs' data='/static/images/tree_farm.svg' aria-label='tree_farm' />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Element>
      <Element name='Tokenomics'>
        <Box className='tockenomics_bg_main'>
          <Box
            component='img'
            src='/static/images/tocknomics_img.png'
            alt=''
            // data-aos='flip-left'
            // data-aos-duration='2500'
          />
          <Box
            className='three_p'
            // data-aos='zoom-in'
            // data-aos-duration='1500'
          >
            <Typography component='h2' className='def_h'>
              Tokenomics
            </Typography>
            <Typography className='def_p '>Our Farmers has a reflective minting system that earns farmers holders AVAX!</Typography>
            <Typography className='def_p '>
              This means that 15% of every minting fee is reflected back to existing Farmers holders and can be claimed at any time!
            </Typography>
            <Typography className='def_p '>
              During the minting phase, you can earn up to 33% of referral fees, when you introduce users to DeFi Farmers.
            </Typography>
            <Typography className='def_p '>
              The rewards don't stop when minting is complete! In our marketplace original minters of Farmers earn 1% royalties each time their
              Farmers is resold and 3% of each sale is redistributed between all Farmers holders.
            </Typography>
          </Box>
        </Box>
      </Element>
      {/* <Box className='abt_farmer'>
        <Container maxWidth='lg'>
          <Grid container spacing={3} alignItems={'center'}>
            <Grid item md={5}>
              <Box className='tdimg_prnt'>
                <Box component='img' src='/static/images/reritty.png' alt='' />
              </Box>
            </Grid>
            <Grid item md={7}>
              <Box className='td_contant'>
                <Typography component='h2' className='def_h'>
                  Rarity Ranking
                </Typography>
                <Typography className='def_p '>
                  At Treedefi we don't have any dress codes, every Farmer is
                  welcome! That said, some Farmers have more style than others.
                </Typography>
                <Typography className='def_p '>
                  Farmers are scored on a scale of 3 to 13 points. The ranking
                  and background color of your Farmer is determined by the total
                  score of all attribute scores. Rarer items or features like an
                  VR viewer will score higher than common items like a shovel.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box> */}
      <Box className='abt_farmer about_td_main'>
        <Container maxWidth='lg'>
          <Grid container spacing={3} alignItems={'center'}>
            <Grid item xs={12} md={4}>
              <Box
                className='tdimg_prnt img_canter'
                // data-aos='fade-left'
                // data-aos-duration='2500'
                sx={{
                  maxWidth: {
                    xs: '395px !important',
                    md: '100% !important',
                  },
                }}>
                <object type='image/svg+xml' className='animtin_imgs' data='/static/images/treedefi.svg' aria-label='gamer_tree' />
              </Box>
            </Grid>
            <Grid item md={8}>
              <Box
                className='td_contant'
                // data-aos='fade-right'
                // data-aos-duration='2500'
              >
                <Typography component='h2' className='def_h'>
                  Utilities and Benefits
                </Typography>
                <Typography className='def_p '>
                  Each DeFi Farmers will give you power to vote in the Tellus Game, a special section called "Sustainability Clubs". We'll offer sometimes special discount while minting for special occasions and events. <br />
                  If you mint before January 21st, 1PM UTC, you'll receive during Q1-Q2 2022 an airdrop of NFTrees{' '}
                  <br /> Treedefi Investors will get benefits if they have minted farmers on Avalanche using the same address that holds Treedefi
                  tokens on Binance Smart Chain. Please read{' '}
                  <a href='https://docs.defifarmers.net/defi-farmers/treedefi-benefits' target='_blank'>
                    our documentation
                  </a>{' '}
                  to check if you are eligibile for cashback or airdrops.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className='abt_farmer about_td_main about_bg_01 '>
        <Container maxWidth='lg'>
          <Grid container spacing={3} alignItems={'center'}>
            <Grid item md={6}>
              <Box
                className='td_contant abt_h2_1'
                // data-aos='zoom-in-right'
                // data-aos-duration='2500'
              >
                <Typography component='h2' className='def_h'>
                  Tellus Beta Test
                </Typography>
                <Typography
                  className='def_p '
                  sx={{
                    textAlign: {
                      md: 'left',
                      xs: 'center',
                    },
                  }}>
                  EcogameFi is the next trend of Ecofriendly defi projects in the gaming industry. Treedefi's aim is to bring reality into the virtual
                  world by giving the opportunity to own real trees while enjoying play-to-learn games. If you want to be the first to test the game and know the launch date, please < a href="https://bit.ly/tellus-beta" target="_blank" style = {{ color: 'white'}} > fill up this form </a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                className='tdimg_prnt abt_td_pddngh about_two_1'
                // data-aos='zoom-in-left'
                // data-aos-duration='2500'
                sx={{
                  maxWidth: {
                    xs: '395px !important',
                    md: '100% !important',
                  },
                }}>
                <object type='image/svg+xml' className='animtin_imgs' data='/static/images/gamer_tree.svg' aria-label='gamer_tree' />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Element name='RaritySc'>
        {/* <Box className='partY_ranking_main'>
          <Container maxWidth='lg'>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box
                  component='img'
                  src='/static/images/left_img1.jpg'
                  className='img_sdwo'
                  alt=''
                  data-aos='fade-up'
                  data-aos-duration='3000'
                />
                <Box className='contnt_cntr'>
                    <Box className='party_left_img'>
                    </Box>
                  </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                data-aos='fade-down'
                data-aos-easing='linear'
                data-aos-duration='1500'
              >
                <Typography component='h2' className='def_h'>
                  RARITY RANKING
                </Typography>
                <Typography className='def_p party_p_top'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur sed necessitatibus cum nobis. Eum, nam. Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Amet,
                  ratione?
                </Typography>
                <Typography className='def_p party_p_btm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque fuga doloremque esse commodi facere perferendis eos
                  quis. Amet consectetur minima repellendus accusamus. Est,
                  nulla possimus. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Earum, itaque.
                </Typography>
                <Box className='party_graph_img'>
                  <Box
                    component='img'
                    src='/static/images/right_img.jpg'
                    alt=''
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box> */}
        <Box className='main_ratity'>
          <Container maxWidth='lg'>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <Typography component='h2'>
                  Rarity<span> Ranking</span>
                </Typography>
                {/* <RarityRankingDemo /> */}
                <RankingBox />
                {/* <Box className='farmer_box'>
                  <Box component='img' src='/static/images/far_appl_img.png' />
                  <Box className='farmer_666'>
                    <Typography component='h5'>Farmer #787</Typography>
                    <Box
                      component='img'
                      src='/static/images/apply.png'
                      className='img_apply'
                    />
                  </Box>
                  <Box className='prgrss_main_box'>
                    <Box className='head_pgrss'>
                      <Typography>Head</Typography>
                      <Box className='def_prgrss'>
                        <LinearProgress variant='determinate' value={100} />
                        <LinearProgress variant='determinate' value={100} />
                        <LinearProgress variant='determinate' value={0} />
                      </Box>
                    </Box>
                    <Box className='head_pgrss'>
                      <Typography>Eyes</Typography>
                      <Box className='def_prgrss'>
                        <LinearProgress variant='determinate' value={100} />
                        <LinearProgress variant='determinate' value={0} />
                      </Box>
                    </Box>
                    <Box className='head_pgrss'>
                      <Typography>Tools</Typography>
                      <Box className='def_prgrss'>
                        <LinearProgress variant='determinate' value={100} />
                        <LinearProgress variant='determinate' value={0} />
                      </Box>
                    </Box>
                    <Box className='head_pgrss'>
                      <Typography>Farm Power</Typography>
                      <Box className='def_prgrss'>
                        <LinearProgress variant='determinate' value={100} />
                        <LinearProgress variant='determinate' value={100} />
                        <LinearProgress variant='determinate' value={0} />
                        <LinearProgress variant='determinate' value={0} />
                      </Box>
                    </Box>
                  </Box>
                </Box> */}
              </Grid>
              <Grid item xs={12} md={6} lg={8}>
                <Box
                  className='graph_p'
                  // data-aos='zoom-in'
                  // data-aos-duration='1500'
                >
                  <Typography>
                    All Farmers are equal, but some are more rare than others. That's why we've set up a trait rarity system to tell which of our
                    Farmers are the rarest. There are a total of 57 traits, these have been classified in a system based on levels. The traits are
                    ranked from "Common" to "Legendary". We compute the Farmer rarity (also called Drop Chance or Probability) as the value of the
                    rarest trait. For example, if your Farmer wears the "McFly cap", its drop chance will be 1.2%. That means, your DeFi Farmer's
                    rarity is 1.2%. Depending on the items they have in their hands, our Farmers will receive powers over time that will allow them to
                    farm in the Metaverse more or less quickly. NFTrees airdrop will be sent according to farmers rarity.
                  </Typography>
                  <Box component='img' src='/static/images/rarity_ranking.svg' />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Element>
      <Element name='RoadmapSc'>
        <Box className='roadmap_man'>
          <Container maxWidth='lg'>
            <Grid container spacing={1}>
              <Grid item md={12}>
                <Box className='road_h2'>
                  <Typography component='h2' className='def_h'>
                    Roadmap
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className='rtdimg_prnt'>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={3} className='rdmp_md_3'>
                      <Box className='rdmp_box'>
                        <Box
                          className='rdmp_box_img'
                          // data-aos='flip-up'
                          // data-aos-duration='1500'
                        >
                          <Box component='img' src='/static/images/user_01.jpg' alt='' />
                        </Box>
                        <Box className='rdmp_dots' />
                        <Typography
                        // data-aos='zoom-in'
                        // data-aos-duration='1500'
                        >
                          Minting Event <br /> TBA December, 2021
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={3} className='rdmp_md_3'>
                      <Box className='rdmp_box'>
                        <Box
                          className='rdmp_box_img'
                          // data-aos='flip-up'
                          // data-aos-duration='1500'
                        >
                          <Box component='img' src='/static/images/user_02.jpg' alt='' />
                        </Box>
                        <Box className='rdmp_dots' />
                        <Typography
                        // data-aos='zoom-in'
                        // data-aos-duration='1500'
                        >
                          NFT Marketplace <br /> Q1 2022
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={3} className='rdmp_md_3'>
                      <Box className='rdmp_box'>
                        <Box
                          className='rdmp_box_img'
                          // data-aos='flip-up'
                          // data-aos-duration='1500'
                        >
                          <Box component='img' src='/static/images/user_03.jpg' alt='' />
                        </Box>
                        <Box className='rdmp_dots' />
                        <Typography
                        // data-aos='zoom-in'
                        // data-aos-duration='1500'
                        >
                          Treedefi on AVAX <br /> Q1 2022
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={3} className='rdmp_md_3'>
                      <Box className='rdmp_box'>
                        <Box
                          className='rdmp_box_img'
                          // data-aos='flip-up'
                          // data-aos-duration='1500'
                        >
                          <Box component='img' src='/static/images/user_04.jpg' alt='' />
                        </Box>
                        <Box className='rdmp_dots' />
                        <Typography
                        // data-aos='zoom-in'
                        // data-aos-duration='1500'
                        >
                          EcoGame <br />
                          Q1 - Q2 2022
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={3} className='rdmp_md_3'>
                      <Box className='rdmp_box'>
                        <Box
                          className='rdmp_box_img'
                          // data-aos='flip-up'
                          // data-aos-duration='1500'
                        >
                          <Box component='img' src='/static/images/user_05.jpg' alt='' />
                        </Box>
                        <Box className='rdmp_dots' />
                        <Typography
                        // data-aos='zoom-in' data-aos-duration='1500'
                        >
                          Eco DAO <br />
                          Q1 - Q2 2022
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Element>

      <Element name='ClaimSc'>
        <Box
          className='accordidn_main'
          // data-aos='fade-up'
          // data-aos-anchor-placement='center-bottom'
          // data-aos-duration='2500'
        >
          <Container maxWidth='lg'>
            <Grid container spacing={3} justifyContent={'center'}>
              <Grid item xs={12} md={8}>
                <Typography component='h2' className='def_h accordin_h2'>
                  FREQUENTLY ASKED QUESTIONS
                </Typography>

                {/* question starts */}
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                    <Typography component='h2' className='accodid_hed'>
                      What is the utility?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      By owning a DeFi Farmer you have access our Sustainability Club and power to vote. DeFi Farmers minters can enjoy NFTrees
                      airdrop and test in advance Treedefi features. As the development will progress, we'll announce more features and benefits.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                {/* question ends */}
                {/* question starts */}
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                    <Typography component='h2' className='accodid_hed'>
                      What is an NFTree?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      An
                      <a href='https://nft.treedefi.com' target='_blank'>
                        NFTree
                      </a>
                      is an NFT backed by real planted tree where each tree represents indeed the collateral. With NFTree you can offset your CO2 and
                      earn passive income by harvesting your CO2 from the tree in the form of TCO2 token. TCO2 is indeed the precursor of Carbon
                      Credits in the blockchain. DeFi Farmers minters will receive one or more NFTrees during Q1 2021 as an aidrdop.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                {/* question ends */}

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                    <Typography component='h2' className='accodid_hed'>
                      What will the minting fee be?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The minting fee is 1 AVAX. Early minters get a portion of later minting fees as a dividend, incentivizing early purchases. Learn
                      more in the tokenomics section above.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel2a-content' id='panel2a-header'>
                    <Typography component='h2' className='accodid_hed'>
                      When does minting start?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Minting event will start on 29.12.2021 1PM UTC</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel3a-content' id='panel3a-header'>
                    <Typography component='h2' className='accodid_hed'>
                      Will there be different rarity levels for each DeFi Farmer?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, we've made 9,500 unique Farmers with mixed traits. The traits are ranked from "Common" to "Legendary". and we use three
                      features to understand their rarity: tools, caps and beards.{' '}
                      <a href='https://docs.defifarmers.net/defi-farmers/rarity-ranking' target='_blank'>
                        Please check our docs for further information
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel3a-content' id='panel3a-header'>
                    <Typography component='h2' className='accodid_hed'>
                      What are the benefits for Treedefi investors?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Treedefi holders will benefit from our expansion on AVAX trough the realese of DeFi Farmers. We are raising awareness and new
                      investors to let them know about our project. This will help to improve liquidity, capitals and marketing.{' '}
                      <a href='https://docs.defifarmers.net/defi-farmers/treedefi-benefits' target='_blank'>
                        Please check our docs for further information
                      </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel3a-content' id='panel3a-header'>
                    <Typography component='h2' className='accodid_hed'>
                      How many DeFi Farmers can I mint at a time? Is there a limit per wallet?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      There is a daily limit of 20 Farmers per wallet, but you can mint multiple farmers in the same transaction to save gas fees.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Element>
    </>
  );
}
