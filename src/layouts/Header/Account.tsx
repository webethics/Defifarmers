import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import personFill from '@iconify/icons-eva/file-text-fill';
import peopleOutline from '@iconify/icons-eva/people-outline';
import settings2Fill from '@iconify/icons-ant-design/shop-outline';
import checkmarkSquareFill from '@iconify/icons-eva/checkmark-square-fill';
import swapFill from '@iconify/icons-eva/swap-fill';
import moneyBag from '@iconify/icons-healthicons/money-bag';
import lottery from '@iconify/icons-ant-design/dollar-circle-outlined';
import nftree from '@iconify/icons-eva/cube-fill';
import econft from '@iconify/icons-eva/gift-outline';

import treeWatcher from '@iconify/icons-eva/eye-outline';

import fileTextOutline from '@iconify/icons-eva/file-text-outline';

import fileDock from '@iconify/icons-ant-design/file-done-outlined';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha } from '@material-ui/core/styles';
import {
  Button,
  Box,
  Divider,
  MenuItem,
  Typography,
  Chip,
} from '@material-ui/core';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import { MIconButton } from '../../components/@material-extend';
import MenuPopover from '../../components/MenuPopover';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'My Defi Farmers',
    icon: personFill,
    linkTo: PATH_DASHBOARD.user.my_collection,
  },
  {
    label: 'Referral',
    icon: peopleOutline,
    linkTo: PATH_DASHBOARD.user.referralPage,
  },
];

const SUB_MENU_OPTIONS = [
  {
    label: 'Earn SEED',
    icon: moneyBag,
    linkTo: 'https://app.treedefi.com',
  },
  {
    label: 'Buy SEED',
    icon: checkmarkSquareFill,
    linkTo: 'https://dex.treedefi.com',
  },
];

interface Props {
  account?: any;
  logout: () => void;
}
// ----------------------------------------------------------------------
const AccountPopover: React.FC<Props> = ({ account, logout }) => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const logoutApp = () => {
    window.localStorage.setItem('accountStatus', '0');
    window.localStorage.setItem('registered', '0');
    logout();
  };

  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;

  return (
    <>
      <MIconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 35,
          height: 35,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
        className={'defbtn_rspv'}
      >
        {/* <MyAvatar className="avtr_rspnsv" /> */}
        <img src='/static/mock-images/avatars/user.svg' alt='' width='30px' />
      </MIconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant='subtitle1' noWrap>
            {/* {user?.displayName} */}
            Account Address
          </Typography>
          <Typography variant='body2' sx={{ color: 'primary.main' }} noWrap>
            {/* {user?.email} */}
            {accountEllipsis}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 1,
                width: 24,
                height: 24,
                color: 'primary.main',
              }}
            />

            {option.label}

            {option.label == 'EcoNFT' ? (
              <Chip
                label='New'
                color='primary'
                variant='outlined'
                sx={{ marginLeft: 1, height: '22px' }}
              />
            ) : (
              ''
            )}

            {option.label == 'NFTree Lottery' ? (
              <Chip
                label='New'
                color='primary'
                variant='outlined'
                sx={{ marginLeft: 1, height: '22px' }}
              />
            ) : (
              ''
            )}
            {option.label == 'NFTree Pool' ? (
              <Chip
                label='New'
                color='primary'
                variant='outlined'
                sx={{ marginLeft: 1, height: '22px' }}
              />
            ) : (
              ''
            )}
            {option.label == 'Meta Watcher' ? (
              <Chip
                label='New'
                color='primary'
                variant='outlined'
                sx={{ marginLeft: 1, height: '22px' }}
              />
            ) : (
              ''
            )}
          </MenuItem>
        ))}

        <Divider sx={{ my: 1 }} />

        {SUB_MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            href={option.linkTo}
            target='_blank'
            component='a'
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 1,
                width: 24,
                height: 24,
                color: 'primary.main',
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Divider sx={{ my: 1 }} />

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button
            fullWidth
            color='inherit'
            variant='outlined'
            onClick={logoutApp}
          >
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
};

export default AccountPopover;
