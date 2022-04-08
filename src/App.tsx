import { useEffect } from 'react';
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import NotistackProvider from './components/NotistackProvider';
import ThemePrimaryColor from './components/ThemePrimaryColor';
import Header from 'layouts/Header/header';
// import { useWallet } from '@binance-chain/bsc-use-wallet';
import { useWeb3React } from '@web3-react/core';
import Footer from 'layouts/Footer/Footer';
import axios from 'axios';
import GoogleAnalytics from 'components/GoogleAnalytics';
import useEagerConnect from 'hooks/useEagerConnect';
import { useInactiveListener } from 'hooks/useInactiveListener';
// ----------------------------------------------------------------------

export default function App() {
  useEagerConnect();
  useInactiveListener();
  const { account } = useWeb3React();
  const ENDPOINT = process.env.REACT_APP_API;

  useEffect(() => {
    if (account) {
      const login = async () => {
        if (account) {
          axios.post(ENDPOINT + 'createUser', {
            account: account,
          });
          window.localStorage.setItem('registered', '1');
        }
      };
      login();
    }
  }, [account]);

  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <NotistackProvider>
          {/* <Settings /> */}
          <ScrollToTop />
          {/* <GoogleAnalytics /> */}
          <Header onOpenSidebar={() => {}} />
          <div style={{ minHeight: 450 }}>
            <Router />
          </div>
          <Footer />
        </NotistackProvider>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
