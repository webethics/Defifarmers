import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { BscConnector } from '@binance-chain/bsc-connector';
import { ethers } from 'ethers';
import getNodeUrl from './getRpcUrl';

const POLLING_INTERVAL = 12000;
const rpcUrl = getNodeUrl();

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID as string, 10);

export const connectorLocalStorageKey = 'connectorIdv2';
export const walletLocalStorageKey = 'wallet';

export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
  BSC = 'bsc',
}

const injected = new InjectedConnector({ supportedChainIds: [chainId] });

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl as string },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

const bscConnector = new BscConnector({ supportedChainIds: [chainId] });

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.BSC]: bscConnector,
};

// export const getLibrary = (provider: any) => {
//   // const library = new Web3(new Web3.providers.HttpProvider(provider));
//   const library = new ethers.providers.Web3Provider(provider);
//   // library.pollingInterval = POLLING_INTERVAL;
//   return library;
// };

export const getLibrary = (provider): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};
