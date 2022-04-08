import * as React from "react";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import menu2Fill from "@iconify/icons-eva/arrowhead-right-outline";
import menu2FillLeft from "@iconify/icons-eva/arrowhead-left-outline";

// material
import { alpha, experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Button, Stack, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
// components
// import { useWallet } from '@binance-chain/bsc-use-wallet';
import AccountPopover from "./Account";
import Connect from "./Connect";
import Logo from "components/Logo";
import LogoSmall from "components/LogoSmall";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "redux/store";

import { ProductState } from "../../@types/products";
// import useWeb3 from 'hooks/useWeb3';
import useWalletModal from "./Wallet/useWalletModal";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import { useCashback, useMysteryBoxAvax } from "hooks/useContract";
import { useSnackbar } from "notistack";
import InfoIcon from "@material-ui/icons/Info";
import axios from "axios";
import Popover from "@mui/material/Popover";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import MediaQuery from "react-responsive";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useWeb3React } from "@web3-react/core";
import CloseIcon from "@mui/icons-material/Close";
import useAuth from "hooks/useAuth";
import Web3 from "web3";

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 70;
const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 0,
  shiftY: 10,
};

const RootStyle = styled(AppBar)(({ theme }) => ({
  zIndex: 9999,
  boxShadow: "none",
  backdropFilter: "inherit",
  WebkitBackdropFilter: "inherit",
  borderBottom: "1px solid",
  borderColor: theme.palette.grey[200],
  backgroundColor: alpha(theme.palette.background.default, 1),
  // [theme.breakpoints.up("lg")]: {
  //   width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  // },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));
const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(0),
    border: "1px solid #dadde9",
    p: {
      fontSize: "12px",
    },
  },
}));

// Dailog -------

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// ----------------------------------------------------------------------

type HeaderProps = {
  onOpenSidebar: VoidFunction;
};

export default function Header({ onOpenSidebar }: HeaderProps) {
  // Dailog -------
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Dailog -------

  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const mystryBoxContract = useMysteryBoxAvax();
  const cashbackContract = useCashback();
  const [reward, setReward] = useState(0);
  const [cashback, setCashback] = useState(0);
  const dispatch = useDispatch();
  const { accountAddress, myCollection } = useSelector((state: { product: ProductState }) => state.product);
  const { account } = useWeb3React();
  const { login, logout } = useAuth();
  // const web3 = useWeb3();
  const ENDPOINT = process.env.REACT_APP_API;

  // console.log(' this is console from header >>>>>>', mystryBoxContract);

  useEffect(() => {
    document.body.classList.toggle("sidebar-open", isOpen);
  }, [isOpen]);
  //for menu
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const toggle = () => {
    setActive(false);
  };

  useEffect(() => {
    const getData = async () => {
      const getReflectionBalance = await mystryBoxContract.getReflectionBalances({ from: account });
      console.log(getReflectionBalance);
      setReward(Number((getReflectionBalance / 1e18).toFixed(5)));
      const response = await axios.get(ENDPOINT + "getCashback/" + account);
      setCashback(Number(response?.data?.data?.cashback));

      // const response = await axios.get(ENDPOINT + 'getCashback/' + account);
      // setCashback(Number(response.data.data.cashback));

      const cashbackDetails = await cashbackContract.cashback(account);
      const isClaimed = await cashbackContract.isClaimed(account);

      setCashback(isClaimed ? 0 : Number(Web3.utils.fromWei(cashbackDetails, "ether")));
    };
    if (account) {
      getData();
    }
  }, [account]);

  const claimReward = async () => {
    if (account) {
      let snackKey;
      try {
        const transaction = await mystryBoxContract.claimRewards();
        snackKey = enqueueSnackbar("Reward Claiming is in Progress", {
          variant: "info",
          preventDuplicate: true,
          persist: true,
        });
        await transaction.wait();
        closeSnackbar(snackKey);
        setLoading(false);
        enqueueSnackbar("Reward claimed Successfully", {
          variant: "info",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (err) {
        closeSnackbar(snackKey);
        setLoading(false);
        enqueueSnackbar("Error while claiming Reward", {
          variant: "error",
        });
      }
      // await mystryBoxContract.methods
      //   .claimRewards()
      //   .send({ from: account })
      //   .once('transactionHash', (transactionHash) => {
      //     snackKey = enqueueSnackbar('Reward Claiming is in Progress', {
      //       variant: 'info',
      //       preventDuplicate: true,
      //       persist: true,
      //     });
      //   })
      //   .once('confirmation', (confirmation) => {
      //     closeSnackbar(snackKey);
      //     setLoading(false);
      //     enqueueSnackbar('Reward claimed Successfully', {
      //       variant: 'info',
      //     });
      //     setTimeout(() => {
      //       window.location.reload();
      //     }, 2000);
      //   })
      // .on('error', (error) => {
      //   closeSnackbar(snackKey);

      //   setLoading(false);
      //   enqueueSnackbar('Error while claiming Reward', {
      //     variant: 'error',
      //   });
      // });
    } else {
      alert("Please Connect Wallet");
    }
  };

  const claimCashback = async () => {
    if (account) {
      let snackKey;
      try {
        const transaction = await cashbackContract.claim({ from: account });
        snackKey = enqueueSnackbar("Cashback Claiming is in Progress", {
          variant: "info",
          preventDuplicate: true,
          persist: true,
        });
        await transaction.wait();
        closeSnackbar(snackKey);
        setLoading(false);
        enqueueSnackbar("Cashback claimed Successfully", {
          variant: "info",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (err) {
        closeSnackbar(snackKey);
        setLoading(false);
        enqueueSnackbar("Error while claiming Cashback", {
          variant: "error",
        });
      }
      // await cashbackContract.methods
      //   .claim()
      //   .send({ from: account })
      //   .once('transactionHash', (transactionHash) => {
      //     snackKey = enqueueSnackbar('Cashback Claiming is in Progress', {
      //       variant: 'info',
      //       preventDuplicate: true,
      //       persist: true,
      //     });
      //   })
      //   .once('confirmation', (confirmation) => {
      //     closeSnackbar(snackKey);
      //     setLoading(false);
      //     enqueueSnackbar('Cashback claimed Successfully', {
      //       variant: 'info',
      //     });
      //     setTimeout(() => {
      //       window.location.reload();
      //     }, 2000);
      //   })
      //   .on('error', (error) => {
      //     closeSnackbar(snackKey);

      //     setLoading(false);
      //     enqueueSnackbar('Error while claiming Cashback', {
      //       variant: 'error',
      //     });
      //   });
    } else {
      alert("Please Connect Wallet");
    }
  };

  ////
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handlePopoverOpen = (event: any) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handlePopoverClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  return (
    <RootStyle>
      <ToolbarStyle>
        <Box sx={{ marginLeft: "0px", marginRight: "auto" }}>
          <Box className="d_logo">
            <a href="https://app.treedefi.com">
              <Logo />
            </a>
          </Box>
          <Box className="m_logo">
            <a href="https://app.treedefi.com">
              <LogoSmall />
            </a>
          </Box>
        </Box>
        {/* {pathname === '/' && (
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              mr: '15px',
              color: 'primary.mlight',
              fontSize: 14,
              border: 1,
              borderColor: 'primary.mlight',
              p: '10px',
              ml: '10px',
            }}
          >
            <Icon icon={isOpen ? menu2Fill : menu2FillLeft} />
          </IconButton>
        )} */}

        {/* <Box sx={{ flexGrow: 1 }} /> */}

        <Button
          variant="text"
          onClick={toggleClass}
          className="mnicon_btn"
          sx={{
            padding: 0,
            minWidth: "0",
            marginRight: "10px",
            border: "none",
          }}
        >
          <MenuIcon sx={{ fontSize: "40px", verticalAlign: "middle" }} />
        </Button>

        <Box className={isActive ? "show sc_header" : "sc_header"}>
          <Box className="mdlmenu">
            <Box className="mdlmenu_inn">
              <Link to="abt_sec" activeClass="active" spy={true} offset={-70} smooth={true} duration={500}>
                About
              </Link>
              <Link to="MintSc" spy={true} smooth={true} offset={-70} duration={500}>
                Mint
              </Link>
              <a href="https://marketplace.kalao.io/collection/0xc1c2e7e45212ccec186e00aaa829fc2891cac808" target="_blank">
                Market
              </a>
              <Link to="Ecosystem" spy={true} smooth={true} offset={-70} duration={500}>
                Ecosystem
              </Link>
              <Link to="Tokenomics" spy={true} smooth={true} offset={-70} duration={500}>
                Tokenomics
              </Link>
              <Link to="RaritySc" spy={true} smooth={true} offset={-70} duration={500}>
                Rarity
              </Link>
              <Link to="RoadmapSc" spy={true} smooth={true} offset={-70} duration={500}>
                Roadmap
              </Link>
              <Link to="ClaimSc" spy={true} smooth={true} offset={-70} duration={500}>
                Faq
              </Link>
            </Box>

            <Box className="clmbx">
              <Box className="clm_box">
                <Typography component="h4">Rewards: {reward.toFixed(5)}</Typography>
                <Button variant="contained" color="primary" className="defbtn defbtn_rspv" onClick={claimReward} disabled={reward <= 0}>
                  Claim
                </Button>
              </Box>
              <Box className="clm_box">
                <Typography component="h4">CASHBACK: {cashback.toFixed(5)}</Typography>
                <Button variant="contained" color="primary" className="defbtn defbtn_rspv" onClick={claimCashback} disabled={cashback <= 0}>
                  Claim &nbsp;
                </Button>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography sx={{ p: 1 }}>
                        Treedefi holders might be eligible for cashback
                        <br />
                        <a href="https://docs.defifarmers.net/defi-farmers/treedefi-benefits">Check our docs</a>
                      </Typography>
                    </React.Fragment>
                  }
                >
                  <InfoIcon className="tlltp_btn" />
                </HtmlTooltip>
              </Box>
            </Box>
          </Box>

          <MediaQuery minWidth={1280}>
            {/* <Box className='clm_box'>
              <Typography component='h4'>
                Rewards: {reward.toFixed(5)}
              </Typography>
              <Button
                variant='contained'
                color='primary'
                className='defbtn defbtn_rspv'
                onClick={claimReward}
                disabled={reward <= 0}
              >
                Claim
              </Button>
            </Box>
            <Box className='clm_box'>
              <Typography component='h4'>CASHBACK: {cashback}</Typography>
              <Button variant='contained' color='primary' className='defbtn defbtn_rspv' disabled>
              <Typography component='h4'>
                CASHBACK: {cashback.toFixed(5)}
              </Typography>
              <Button
                variant='contained'
                color='primary'
                className='defbtn defbtn_rspv'
                onClick={claimCashback}
                disabled={cashback <= 0}
              >
                Claim &nbsp;
              </Button>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography sx={{ p: 1 }}>
                      Treedefi holders might be eligible for cashback
                      <br />
                      <a href='https://defifarmers.net'>Check the above section</a>
                      <a href='https://docs.defifarmers.net/defi-farmers/treedefi-benefits'>
                        Check our docs
                      </a>
                    </Typography>
                  </React.Fragment>
                }>
                <InfoIcon className='tlltp_btn' />
              </HtmlTooltip>
            </Box> */}

            <Stack direction="row" spacing={{ xs: 0.5, sm: 1.5 }}>
              <Button
                variant="contained"
                color="primary"
                className="defbtn defbtn_rspv bat_none"
                sx={{ textTransform: "uppercase" }}
                href="/defi-farmers"
                // onClick={() => {
                //   onPresentChainModal();
                // }}
              >
                My Defi farmers
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="defbtn defbtn_rspv bat_none"
                sx={{ textTransform: "uppercase" }}
                // onClick={() => {
                //   onPresentChainModal();
                // }}
              >
                <Box component="img" alt={""} src={"/static/icons/networks/avax.jpg"} height="20px" sx={{ pr: 1 }} className="bat_none" />
                {"  "}
                {"  Avalanche"}
              </Button>
              {account && <AccountPopover account={account} logout={logout} />}
              {!account && <Connect account={account} login={login} logout={logout} toggle={toggle} />}
            </Stack>
          </MediaQuery>
        </Box>
        <MediaQuery maxWidth={1279}>
          {account && <AccountPopover account={account} logout={logout} />}
          {!account && <Connect account={account} login={login} logout={logout} toggle={toggle} />}
          {/* <Button className='claim-dialoge-btn defbtn' variant="contained" onClick={handleClickOpen}   sx={{ fontSize:'16px', minWidth:'80px' }}>Claim</Button> */}
        </MediaQuery>
      </ToolbarStyle>

      <MediaQuery maxWidth={1279}>
        <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
          <Box className="modal-close-x" sx={{ display: "flex", justifyContent: "flex-end", pt: "10px" }}>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Box>
          <DialogContent>
            <Box className="clm_box" sx={{ mb: "10px" }} justifyContent="space-between">
              <Typography component="h4">Rewards: {reward.toFixed(5)}</Typography>
              <Button variant="contained" color="primary" className="defbtn defbtn_rspv" onClick={claimReward} disabled={reward <= 0}>
                Claim
              </Button>
            </Box>
            <Box className="clm_box" sx={{ mb: "20px" }} justifyContent="space-between">
              <Typography component="h4">CASHBACK: {cashback.toFixed(5)}</Typography>
              <Button variant="contained" color="primary" className="defbtn defbtn_rspv" disabled>
                Claim &nbsp;
              </Button>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography sx={{ p: 1 }}>
                      Treedefi holders might be eligible for cashback
                      <br />
                      <a href="https://docs.defifarmers.net/defi-farmers/treedefi-benefits">Check our docs</a>
                    </Typography>
                  </React.Fragment>
                }
              >
                <InfoIcon className="tlltp_btn" />
              </HtmlTooltip>
            </Box>

            <Stack direction="column" spacing={{ xs: 0.5, sm: 1.5 }}>
              {account && <AccountPopover account={account} logout={logout} />}
              {!account && <Connect account={account} login={login} logout={logout} toggle={toggle} />}
            </Stack>
          </DialogContent>
        </Dialog>
      </MediaQuery>
    </RootStyle>
  );
}
