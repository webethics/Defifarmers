// import { useWallet } from '@binance-chain/bsc-use-wallet';
import { useWeb3React } from '@web3-react/core';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { sum } from 'lodash';
import Referees from './Referees';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import Popover from '@material-ui/core/Popover';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Countdown from 'react-countdown';
import { useTreedefiFarmers } from 'hooks/useContract';
import { createBrowserHistory } from 'history';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles((theme: any) =>
  createStyles({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(1),
    },
  })
);
export default function ReferralPage() {
  const classes = useStyles();
  const history = createBrowserHistory();
  const ENDPOINT = process.env.REACT_APP_API;
  const { account } = useWeb3React();
  const [user, setUser] = useState<any>();
  const [reffdetails, setDeails] = useState<any>();
  const [copied, setCopied] = useState(false);
  const [current, setCurrent] = useState(0);
  const [nextCommision, setNextCommision] = useState(0);
  const [nextDate, setNextDate] = useState(0);
  const farmerContract = useTreedefiFarmers();
  const [indexLength, setIndex] = useState(0);
  const [top, setTop] = useState(0);
  const [recertData, setRevertData] = useState({
    avgCommision: 0,
    totalCommision: 0,
  });

  const addClick = async () => {
    // await axios.post(ENDPOINT + 'click', {
    //   account: account,
    // });

    setCopied(true);
    navigator.clipboard.writeText(process.env.REACT_APP_URL + '?reff=' + account);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  useEffect(() => {
    const getdata = async () => {
      const indexToken = await farmerContract.balanceOf(account)

      const details = await axios.post(ENDPOINT + 'getUser', {
        account: account,
      });
      setUser(details.data.data);
      const reff_details = await axios.post(ENDPOINT + 'getReff', {
        account: account,
      });
      setDeails(reff_details.data.data.userDetail);
      setCurrent(reff_details.data.data.currentCommision);
      setNextCommision(reff_details.data.data.nextCommision.discount);
      setNextDate(reff_details.data.data.nextCommision.timestamp);
      setTop(reff_details.data.data.topreffer);
      let mintCount = 0;
      for (let i = 0; i < indexToken; i++) {
        const tokenId = await farmerContract.tokenOfOwnerByIndex(account, i);

        const ownerAddress = await farmerContract.minter(tokenId);

        if (ownerAddress === account) {
          mintCount++;
        }
        if (i == indexToken - 1) {
          setIndex(mintCount);
        }
      }
    };

    if (account) {
      getdata();
    }
  }, [account]);

  ///popover
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Box className='brngng_bnr_prnt brngng_bnr_prnt_v2 main_sc'>
        <Container maxWidth='lg'>
          <Grid container spacing={3}>
            <Grid item xs={12} mb={4}>
              <Box component='div' sx={{ display: 'flex' }} alignItems='center' className='d_b_575'>
                <Button className='back_ic back_ic_v2' onClick={() => history.back()}>
                  <ChevronLeftIcon sx={{ fontSize: 20, lineHeight: '14px' }} />
                  <Typography fontWeight={300} fontSize={16} sx={{ mt: 0 }}>
                    Back
                  </Typography>
                </Button>
                <Typography variant='h4' component='h2' fontSize={{ lg: 32, xs: 24 }} fontWeight={600} sx={{ mr: 2 }}>
                  Referral Dashboard
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box className='col_sevan brdrd_rfrl_bx'>
                <Typography component='h2' className='three_def_h2'>
                  Your Referral URL
                </Typography>
                <Box className='two_buttot inbrdrdbx inbrdrdbx_cllm'>
                  <Typography>
                    {process.env.REACT_APP_URL + '?reff=' + account}
                    {/* {account} */}
                  </Typography>
                  <Box className='btn_tow'>
                    <Button onClick={addClick}>
                      <Box component='img' src='/static/images/copy_btn_img.svg' alt='' />
                      {!copied ? <span>COPY</span> : <span>(Copied)</span>}
                    </Button>
                    {/* <Button>SHARE</Button> */}
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box className='col_sevan brdrd_rfrl_bx'>
                <Typography component='h2' className='three_def_h2'>
                  Claim Amount
                </Typography>
                <Box className='inbrdrdbx two_buttot mx500'>
                  <Box className='lft_rfrfbx'>
                    <Button className='mb-2' disabled>
                      CLAIM {recertData.totalCommision.toFixed(4)} AVAX
                    </Button>
                    <Button disabled>CLAIM FARMER</Button>
                  </Box>
                  <Box className='rgt_rfrfbx'>
                    <Typography>
                      You are in the top {top}% referrers
                      <Box
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup='true'
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}>
                        <InfoIcon />
                      </Box>
                      <Popover
                        id='mouse-over-popover'
                        style={{
                          pointerEvents: 'none',
                        }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus>
                        <Box style={{ padding: '10px' }}>
                          <Typography>
                            After credit accumulation window,
                            <br />
                            top 10 referres will earn 1 Honorary Farmer each
                          </Typography>
                        </Box>
                      </Popover>
                    </Typography>
                    <Typography>
                      {indexLength > 3 ? (
                        <span style={{ color: '#3AB78F' }}>Commissions unlocked</span>
                      ) : (
                        `You are minter and owner of: ` + indexLength + `/3 Farmers`
                      )}
                    </Typography>
                    <Typography>Total claimed: 0</Typography>
                  </Box>
                </Box>
              </Box>

              {/* <Box className='two_buttot two_buttot_rspn'>
                <input type='text' placeholder='Enter claimable amount' />
                <Box className='btn_tow'>
                  <Button>CLAIM YOUR REWARDS</Button>
                </Box>
              </Box> */}
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems={'center'} className='othersc_main'>
            <Grid item xs={12} md={4}>
              <Typography className='other_txt'>
                CURRENT FEE: <span>{current}%</span>
              </Typography>
              {/* <Box className='refr_min_box'>
                <Typography>
                  <Box component='img' src='/img/mouse_icon.svg' alt='' />{' '}
                  Referral Clicks
                </Typography>
                <Typography component='h4'>
                  {user && user.clickCount}
                </Typography>
              </Box> */}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className='other_txt'>
                NEXT FEE: <span>{nextCommision}%</span>
              </Typography>
              {/* <Box className='refr_min_box'>
                <Typography>
                  <Box component='img' src='/img/rate_icon.svg' alt='' />{' '}
                  Referral Rate
                </Typography>
                <Typography component='h4'>
                  {user &&
                    reffdetails &&
                    (user.clickCount / sum(reffdetails.existingMint)).toFixed(
                      2
                    ) + '%'}
                </Typography>
              </Box> */}
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography className='other_txt'>
                NEXT FEE DECREASE: <span>{nextDate && <Countdown date={nextDate} />}</span>
              </Typography>
              {/* <Box className='refr_min_box'>
                <Typography>
                  <Box component='img' src='/img/claim_icon.svg' alt='' /> Total
                  Claimed
                </Typography>
                <Typography component='h4'>1298763</Typography>
              </Box> */}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className='other_txt'>
                REFERRAL CLICKS: <span>{user && user.clickCount}</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className='other_txt'>
                REFFERRAL RATE: <span>{user && reffdetails && ((reffdetails.existingMint.length / user.clickCount) * 100).toFixed(2) + '%'}</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className='other_txt'>
                AVERAGE FEE: <span>{recertData.avgCommision.toFixed(2)}%</span>
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 5, pb: 5 }}>
            <Grid item xs={12}>
              <Box className='table_tittle'>
                <Typography component='h4'>
                  Referral fees accumulation ends in <Countdown date={1643198410000} />
                </Typography>
                <Typography>
                  {indexLength >= 3
                    ? 'You are eligible to claim referral fees'
                    : indexLength == 2
                    ? 'Mint Another ' + (3 - indexLength) + ' Farmer to be eligible to claim referral fees'
                    : 'Mint Another ' + (3 - indexLength) + ' Farmers to be eligible to claim referral fees'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className='brdrd_rfrl_bx'>
                <Typography component='h2' className='three_def_h2' sx={{ mb: 2 }}>
                  Your Referrals
                </Typography>
                <Box className='inbrdrdbx'>
                  {reffdetails && <Referees data={reffdetails && reffdetails} revertData={(data) => setRevertData(data)} />}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
