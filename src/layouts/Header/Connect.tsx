import React from 'react';
import { Button } from '@material-ui/core';
import useWalletModal from './Wallet/useWalletModal';
// import useWalletModal from "./useWalletModal";

interface Props {
  account?: any;
  login: any;
  logout: () => void;
  toggle: any;
}

const Connect: React.FC<Props> = ({ account, login, logout, toggle }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(
    login,
    logout,
    account
  );
  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;
  return (
    <>
      {account ? (
        <Button
          variant='contained'
          color='primary'
          className='defbtn defbtn_rspv'
          sx={{ textTransform: 'uppercase' }}
          onClick={() => {
            toggle();
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          variant='contained'
          color='primary'
          className='defbtn defbtn_rspv'
          sx={{ textTransform: 'uppercase' }}
          onClick={() => {
            toggle();
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </>
  );
};

export default Connect;
