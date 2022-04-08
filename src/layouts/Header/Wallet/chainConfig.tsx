import { Config } from './chainTypes';

const getIcon = (name: string) => `/static/icons/networks/${name}.jpg`;

const ICONS = {
  eth: getIcon('mainnet-network'),
  bsc: getIcon('bsc-network'),
  avax: getIcon('avax'),
};

const chainConnector: Config[] = [
  {
    title: 'Ethereum',
    icon: ICONS.eth,
    chainId: '1',
  },
  {
    title: 'BSC Mainnet',
    icon: ICONS.bsc,
    chainId: '56',
  },
  {
    title: 'Avalanche Mainnet',
    icon: ICONS.avax,
    chainId: '43114',
  },
];

export default chainConnector;
