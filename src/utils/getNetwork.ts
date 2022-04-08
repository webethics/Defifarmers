import chainConnector from '../layouts/Header/Wallet/chainConfig';
import { find } from 'lodash';
import { networkSetup } from './networkSetup';

// Array of available nodes to connect to

const getNetwork = () => {
  const chainID = localStorage.getItem('chainID')
    ? localStorage.getItem('chainID')
    : process.env.REACT_APP_CHAIN_ID;
  if (chainID !== '1') {
    networkSetup(chainID);
  }

  return find(chainConnector, {
    chainId: 43114,
  });
};

const getChainId = () => {
  return localStorage.getItem('chainID')
    ? localStorage.getItem('chainID')
    : process.env.REACT_APP_CHAIN_ID;
};

export { getNetwork, getChainId };
