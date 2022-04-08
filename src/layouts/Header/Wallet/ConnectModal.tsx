import config from './config';
import WalletCard from './WalletCard';
import { Modal } from 'hooks/Modal';
import { Login } from './types';
import { createStyles, Theme, withStyles, WithStyles, experimentalStyled as styled } from '@material-ui/core/styles';
import Backdrop from '@mui/material/Backdrop';
import { Dialog } from '@mui/material';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Typography, ButtonBase, Box } from '@mui/material';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { walletLocalStorageKey } from '../../../utils/web3React';

interface Props {
  login: Login;
  onDismiss?: () => void;
}

type Handler = () => void;

interface InjectedProps {
  onDismiss?: Handler;
  className?: any;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute !important',
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography sx={{ borderBottom: '1px solid rgb(231, 227, 235)' }} className={classes.root} {...other}>
      <Typography variant='h5'>{children}</Typography>
      {onClose ? (
        <IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const CustomDialog = styled(Dialog)(({ theme }) => ({
  zIndex: 1000,
  '& .MuiDialog-paper': {
    margin: 0,
  },
}));

const getPreferredConfig = (walletConfig: any) => {
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey);
  const sortedConfig = walletConfig.sort((a, b) => a.priority - b.priority);

  if (!preferredWalletName) {
    return sortedConfig;
  }

  const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName);

  if (!preferredWallet) {
    return sortedConfig;
  }

  return [preferredWallet, ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName)];
};

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => {
  const displayCount = 3;
  const [showMore, setShowMore] = useState(false);
  const sortedConfig = getPreferredConfig(config);
  const displayListConfig = showMore ? sortedConfig : sortedConfig.slice(0, displayCount);

  return (
    <CustomDialog
      sx={{
        zIndex: 100000,
      }}
      open
      aria-labelledby='customized-dialog-title'>
      <DialogTitle id='customized-dialog-title' onClose={onDismiss}>
        {'Connect Wallet'}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '20px' }}>
          {displayListConfig.map((entry, index) => (
            <WalletCard key={entry.title} login={login} walletConfig={entry} onDismiss={onDismiss} />
          ))}
          {!showMore && (
            <ButtonBase
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                height: 'auto',
                justifyContent: 'center',
                marginLeft: 'auto',
                flexGrow: '1',
                marginRight: 'auto',
                width: '10vw',
                minWidth: '140px',
                padding: '10px',
              }}
              onClick={() => {
                setShowMore(true);
              }}>
              <Box component='img' alt={''} src={'/static/icons/wallet_icons/moreWalletIcon.svg'} height='40px' />
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: '10px',
                }}>
                {'more'}
              </Typography>
            </ButtonBase>
          )}
        </Box>
      </DialogContent>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} p='24px'>
        <Typography sx={{ marginBottom: '10px', fontWeight: '600', textAlign: 'center' }}>{'Haven’t got a crypto wallet yet?'}</Typography>
        <ButtonBase
          sx={{
            width: 'auto',
            background: 'rgb(58, 183, 143)',
            borderRadius: '25px',
            height: '51px',
          }}>
          <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#fff' }}>{'Learn How to Connect'}</Typography>
        </ButtonBase>
      </Box>
    </CustomDialog>
    // <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    //   {config.map((entry, index) => (
    //     <WalletCard
    //       key={entry.title}
    //       login={login}
    //       walletConfig={entry}
    //       onDismiss={onDismiss}
    //     />
    //   ))}
    //   {/* <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={2} mb={2}>
    //     <a href="#" className="lrn_btn">
    //       <HelpOutlineIcon sx={{fontSize: 26, mr: '5px'}} />
    //       Learn how to connect
    //     </a>
    //   </Box> */}
    // </Modal>
  );
};

export default ConnectModal;
