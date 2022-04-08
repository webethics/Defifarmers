import addresses from 'config/constants/contracts';

const chainId = process.env.REACT_APP_CHAIN_ID;

export const getMysteryBoxAvaxAddress = () => {
  return addresses.MysteryBoxAvax[chainId];
};

export const getTreedefiFarmersAddress = () => {
  return addresses.TreedefiFarmers[chainId];
};

export const getCashbackAddress = () => {
  return addresses.cashback[chainId];
};
