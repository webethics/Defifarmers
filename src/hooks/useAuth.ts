import { useCallback } from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { NoBscProviderError } from '@binance-chain/bsc-connector';
import { NoEthereumProviderError, UserRejectedRequestError as UserRejectedRequestErrorInjected } from '@web3-react/injected-connector';
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect, WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { connectorsByName, ConnectorNames, connectorLocalStorageKey } from '../utils/web3React';
import { networkSetup } from 'utils/networkSetup';

const useAuth = () => {
  const { chainId, activate, deactivate } = useWeb3React();

  const login = useCallback(
    (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID];
      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await networkSetup(chainId);
            if (hasSetup) {
              activate(connector);
            }
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey);
            if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
              throw Error('Provider Error ,No provider was found');
            } else if (error instanceof UserRejectedRequestErrorInjected || error instanceof UserRejectedRequestErrorWalletConnect) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector;
                walletConnector.walletConnectProvider = null;
              }
              throw Error('Authorization Error, Please authorize to access your account');
            } else {
              throw Error(`${(error.name, error.message)}`);
            }
          }
        });
        window.localStorage.setItem(connectorLocalStorageKey, connectorID);
      } else {
        throw Error('Unable to find connector ,The connector config is wrong');
      }
    },
    [activate]
  );

  const logout = useCallback(() => {
    deactivate();
    window.localStorage.removeItem(connectorLocalStorageKey);
  }, [deactivate, chainId]);

  return { login, logout };
};

export default useAuth;
