import { Box } from '@material-ui/core';
import { ButtonBase } from '@mui/material';
import { Typography } from '@material-ui/core';
import { networkSetup } from 'utils/networkSetup';
import { localStorageKey } from './config';
import { ConnectorNames, walletLocalStorageKey } from '../../../utils/web3React';

const WalletCard = ({ login, walletConfig, onDismiss }: any) => {
  const { title, icon } = walletConfig;
  const currentChainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);

  return (
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
        if (Boolean(true)) {
          networkSetup(currentChainId)
            .then(async () => {
              const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

              if (walletConfig.title === 'Trust Wallet' && isIOS) {
                login(ConnectorNames.WalletConnect);
                onDismiss();
              } else {
                login(walletConfig.connectorId);
                onDismiss();
              }
              localStorage.setItem(walletLocalStorageKey, walletConfig.title);
            })
            .catch((e) => {
              onDismiss();
              console.error(e);
            });
        }
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}>
      <Box component='img' alt={''} src={icon} height='40px' />
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: '600',
          textAlign: 'center',
          marginTop: '10px',
        }}>
        {title}
      </Typography>
    </ButtonBase>
  );
};

export default WalletCard;

// import React from 'react';
// import styled from 'styled-components';
// import Button from '../../components/Button/Button';
// import Text from '../../components/Text/Text';
// import MoreHorizontal from '../../components/Svg/Icons/MoreHorizontal';
// // import { ButtonProps } from '../../components/Button';
// import { connectorLocalStorageKey, walletLocalStorageKey } from './config';
// import { Login, Config } from './types';
// import { ConnectorNames } from '../../../utils/web3React';

// interface Props {
//   walletConfig: Config;
//   login: Login;
//   onDismiss: () => void;
// }

// const WalletButton = styled(Button).attrs({ width: '100%', variant: 'text', py: '16px' })`
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   height: auto;
//   justify-content: center;
//   margin-left: auto;
//   margin-right: auto;
// `;

// export const MoreWalletCard = ({ t, ...props }) => {
//   return (
//     <WalletButton variant='tertiary' {...props}>
//       <MoreHorizontal width='40px' mb='8px' color='textSubtle' />
//       <Text fontSize='14px'>{t('More')}</Text>
//     </WalletButton>
//   );
// };

// const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss }) => {
//   const { title, icon: Icon } = walletConfig;

//   return (
//     <WalletButton
//       variant='tertiary'
//       onClick={() => {
//         const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

//         // Since iOS does not support Trust Wallet we fall back to WalletConnect
//         if (walletConfig.title === 'Trust Wallet' && isIOS) {
//           login(ConnectorNames.WalletConnect);
//         } else {
//           login(walletConfig.connectorId);
//         }

//         localStorage.setItem(walletLocalStorageKey, walletConfig.title);
//         localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
//         onDismiss();
//       }}
//       id={`wallet-connect-${title.toLocaleLowerCase()}`}>
//       <Icon width='40px' mb='8px' />
//       <Text fontSize='14px'>{title}</Text>
//     </WalletButton>
//   );
// };

// export default WalletCard;
