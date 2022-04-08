import getRpcUrl from 'utils/getRpcUrl';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import erc20 from '../abi/erc20.json';

const RPC_URL = getRpcUrl();
// const socketURL = process.env.REACT_APP_SOCKET;
// const httpProvider = new Web3.providers.WebsocketProvider(socketURL, {
//   timeout: 30000000,
//   reconnect: {
//     auto: true,
//     delay: 50000,
//     maxAttempts: 15,
//     onTimeout: false,
//   },
// });
const httpProvider = new Web3.providers.HttpProvider(RPC_URL);

export const getContract = (address: string) => {
  const web3 = new Web3(httpProvider);
  const contract = new web3.eth.Contract(
    (erc20 as unknown) as AbiItem,
    address
  );
  return contract;
};

export const getTokenBalance = async (
  tokenAddress: string,
  userAddress: string
): Promise<string> => {
  const contract = getContract(tokenAddress);
  try {
    const balance: string = await contract.methods
      .balanceOf(userAddress)
      .call();
    return balance;
  } catch (e) {
    return '0';
  }
};
