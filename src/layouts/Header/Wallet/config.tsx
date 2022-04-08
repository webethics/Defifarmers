import { Config } from './types';
import BscIcon from '../../../walletIcons/BinanceIcon';
const getIcon = (name: string) => `/static/icons/wallet_icons/${name}.svg`;

const ICONS = {
  metamask: getIcon('metamask'),
  TrustWallet: getIcon('TrustWallet'),
  MathWallet: getIcon('MathWallet'),
  TokenPocket: getIcon('TokenPocket'),
  WalletConnect: getIcon('WalletConnect'),
  bsc: getIcon('bsc_new'),
};

const connectors: Config[] = [
  {
    title: 'Metamask',
    connectorId: 'injected',
    icon: ICONS.metamask,
    priority: 1,
  },
  {
    title: 'TrustWallet',
    connectorId: 'injected',
    icon: ICONS.TrustWallet,
    priority: 2,
  },
  {
    title: 'WalletConnect',
    connectorId: 'walletconnect',
    icon: ICONS.WalletConnect,
    priority: 3,
  },
  {
    title: 'MathWallet',
    connectorId: 'injected',
    icon: ICONS.MathWallet,
    priority: 999,
  },
  {
    title: 'TokenPocket',
    connectorId: 'injected',
    icon: ICONS.TokenPocket,
    priority: 999,
  },

  {
    title: 'Binance Chain',
    connectorId: 'bsc',
    icon: ICONS.bsc,
    priority: 999,
  },
];
export const walletLocalStorageKey = 'wallet';
export const localStorageKey = 'accountStatus';
export default connectors;
