import React from 'react';
import {
  Grid,
  Box,
  Container,
  Typography,
  Stack,
  Button,
} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function RarityRankingDemo() {
  return (
    <>
      <Box className='farmer_box'>
        <Box component='img' src='/static/images/far_appl_img.png' />

        <Box className='farmer_666'>
          <Typography component='h5'>Farmer #666</Typography>
          <Box
            component='img'
            src='/static/images/apply.png'
            className='img_apply'
          />
        </Box>
        <Box className='prgrss_main_box'>
          <Box className='head_pgrss'>
            <Typography>HEAD</Typography>
            <Box className='def_prgrss'>
              <LinearProgress variant='determinate' value={100} />
              <LinearProgress variant='determinate' value={100} />
              <LinearProgress variant='determinate' value={0} />
            </Box>
          </Box>
          <Box className='head_pgrss'>
            <Typography>ARMS</Typography>
            <Box className='def_prgrss'>
              <LinearProgress variant='determinate' value={100} />
              <LinearProgress variant='determinate' value={0} />
            </Box>
          </Box>
          <Box className='head_pgrss'>
            <Typography>TOOLS</Typography>
            <Box className='def_prgrss'>
              <LinearProgress variant='determinate' value={100} />
              <LinearProgress variant='determinate' value={0} />
            </Box>
          </Box>
          <Box className='head_pgrss'>
            <Typography>WILL POWER</Typography>
            <Box className='def_prgrss'>
              <LinearProgress variant='determinate' value={100} />
              <LinearProgress variant='determinate' value={100} />
              <LinearProgress variant='determinate' value={0} />
              <LinearProgress variant='determinate' value={0} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
