const networkSettings = {
  56: {
    chainId: '0x38',
    chainName: 'BSC  Mainnet',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com/'],
  },
  97: {
    chainId: '0x61',
    chainName: 'BSC Test Mainnet',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://data-seed-prebsc-2-s1.binance.org:8545/'],
    blockExplorerUrls: ['https://bscscan.com/'],
  },
  43113: {
    chainId: '0xA869',
    chainName: 'Avalanche FUJI Testnet RPC',
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18,
    },
    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://testnet.explorer.avax.network/'],
  },
  43114: {
    chainId: '0xA86A',
    chainName: 'Avalanche Mainnet',
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18,
    },
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://snowtrace.io'],
  },
};

declare const window: any;

// export const networkSetup = (chainId) => {
//   return new Promise((resolve, reject) => {
//     const provider = window.ethereum;

//     if (provider) {
//       if (networkSettings.hasOwnProperty(chainId)) {
//         provider
//           .request({
//             method: 'wallet_addEthereumChain',
//             params: [networkSettings[chainId]],
//           })
//           .then(resolve)
//           .catch(reject);
//       } else {
//         reject(new Error(`No network settings configured for chainId: '${chainId}'`));
//       }
//     } else {
//       alert('Please Install Wallet');
//       reject(new Error(`window.ethereum is '${typeof provider}'`));
//     }
//   });
// };

export const networkSetup = async (chainId) => {
  const provider = window.ethereum;
  if (provider) {
    // const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [networkSettings[chainId]],
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error);
      return false;
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined");
    return false;
  }
};
