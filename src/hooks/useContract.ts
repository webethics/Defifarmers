import { useEffect, useState, useMemo } from 'react';
import { getCashbackAddress, getMysteryBoxAvaxAddress, getTreedefiFarmersAddress } from './../utils/addressHelpers';
import { AbiItem } from 'web3-utils';
// import useWeb3 from 'hooks/useWeb3';
import MysteryBox from 'abi/MysteryBox.json';
import TreedefiFarmers from 'abi/TreedefiFarmers.json';
import useActiveWeb3React from '../hooks/useActiveWeb3React';
import { getContract } from '../utils/contractHelpers';
import { Contract } from 'web3-eth-contract';
import Web3 from 'web3';
import { Web3Provider, JsonRpcSigner } from '@ethersproject/providers';
import { getTreedefiFarmersContract, getMysteryBoxAvaxContract, getCasbackContract } from '../utils/contractHelpers';


export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked();
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library;
}

// function useContract<T extends Contract = Contract>(address: string | undefined, ABI: any, withSignerIfPossible = true): T | null {
//   const { library, account } = useActiveWeb3React();

//   return useMemo(() => {
//     if (!address || !ABI || !library) return null;
//     try {
//       return getContract(address, ABI, withSignerIfPossible ? getProviderOrSigner(library, account) : null);
//     } catch (error) {
//       console.error('Failed to get contract', error);
//       return null;
//     }
//   }, [address, ABI, library, withSignerIfPossible, account]) as T;
// }

export const useTreedefiFarmers = () => {
  const { library, account } = useActiveWeb3React();

  // const abi = (TreedefiFarmers.abi as unknown) as AbiItem;
  // return useContract(getTreedefiFarmersAddress(), abi);
  return useMemo(() => getTreedefiFarmersContract(getProviderOrSigner(library, account)), [library, account]);
};

export const useMysteryBoxAvax = () => {
  const { library, account } = useActiveWeb3React();

  // const abi = (MysteryBox.abi as unknown) as AbiItem;
  // return useContract(getMysteryBoxAvaxAddress(), abi);
  return useMemo(() => getMysteryBoxAvaxContract(getProviderOrSigner(library, account)), [library]);
};

export const useCashback = () => {
  
  const { library, account } = useActiveWeb3React();
  // return useContract(abi, getCashbackAddress());
  return useMemo(() => getCasbackContract(getProviderOrSigner(library, account)), [library]);
};
// export default useContract;
