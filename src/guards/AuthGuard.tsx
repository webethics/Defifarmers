import { useState, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  if (
    window.localStorage.getItem('accountStatus') &&
    window.localStorage.getItem('accountStatus') !== '0'
  ) {
    return <>{children}</>;
  } else {
    alert('Please Connect Wallet');
    return <Navigate to='/' />;
  }
}
