import Web3 from 'web3';
import { simpleRpcProvider } from './providers';
import { ethers } from 'ethers';
import MysteryBoxAbi from 'abi/MysteryBox.json';
import TreedefiFarmersAbi from 'abi/TreedefiFarmers.json';
import CashbackAbi from 'abi/cashback.json';

import { getMysteryBoxAvaxAddress, getTreedefiFarmersAddress, getCashbackAddress } from './../utils/addressHelpers';

export const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getTreedefiFarmersContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(TreedefiFarmersAbi, getTreedefiFarmersAddress(), signer);
};

export const getMysteryBoxAvaxContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(MysteryBoxAbi, getMysteryBoxAvaxAddress(), signer);
};

export const getCasbackContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(CashbackAbi, getMysteryBoxAvaxAddress(), signer);
};
