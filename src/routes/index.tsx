import MyCollection from 'pages/collections/MyCollection';
import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';

// import RoleBasedGuard from '../guards/RoleBasedGuard';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed',
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Dashboard Routes
    {
      path: '/',
      element: <BringingFarmars />,
    },
    {
      path: '/defi-farmers',
      element: <MyCollection />,
    },
    {
      path: '/referral',
      element: <ReferralPage />,
    },
    // Main Routes
    {
      path: '*',
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to='/404' replace /> },
      ],
    },
    { path: '*', element: <Navigate to='/404' replace /> },
  ]);
}

// IMPORT COMPONENTS
// Main
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
const BringingFarmars = Loadable(
  lazy(() => import('../pages/bringing-farmers/BringingFarmars'))
);
const ReferralPage = Loadable(
  lazy(() => import('../pages/referral/ReferralPage'))
);
// Components
