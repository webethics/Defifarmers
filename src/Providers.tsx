import React from 'react';
import getRpcUrl from 'utils/getRpcUrl';
import * as bsc from '@binance-chain/bsc-use-wallet';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// material
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// redux
import { store, persistor } from './redux/store';
// contexts
import { SettingsProvider } from './contexts/SettingsContext';
// components
import LoadingScreen from './components/LoadingScreen';
import { ModalProvider } from 'hooks/Modal';
import NotistackProvider from './components/NotistackProvider';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from 'utils/web3React';


const Providers: React.FC = ({ children }) => {


  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <HelmetProvider>
        <ReduxProvider store={store}>
          <PersistGate loading={<LoadingScreen />} persistor={persistor}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <SettingsProvider> 
                  <ModalProvider>
                    <NotistackProvider>{children}</NotistackProvider>
                  </ModalProvider>
              </SettingsProvider>
            </LocalizationProvider>
          </PersistGate>
        </ReduxProvider>
      </HelmetProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
