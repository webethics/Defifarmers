import React, { useState } from 'react';
import {
  Grid,
  Box,
  Container,
  Typography,
  Stack,
  Button,
} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import { sum } from 'lodash';

export default function RarityRankingBox({ farmerData, rarity }) {
  var absMin = Math.min(...rarity);
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <Box className='farmer_box'>
        {/* <div className={isActive ? 'details' : null} onClick={toggleClass}>
          <div className='card'>
            <div className='photo'></div>
            <div className='chart'>
              <div
                className='bar bar1'
                style={{
                  height:
                    (farmerData.attributes[2]?.occurence ||
                      0 + farmerData.attributes[6]?.occurence ||
                      0) * 3,
                  marginTop:
                    -(
                      farmerData.attributes[2]?.occurence ||
                      0 + farmerData.attributes[6]?.occurence ||
                      0
                    ) * 3,
                }}
              >
                <span>
                  {farmerData.attributes[2]?.occurence ||
                    0 + farmerData.attributes[6]?.occurence ||
                    0}
                </span>
              </div>
              <div
                className='bar bar2'
                style={{
                  height: farmerData.attributes[3].occurence * 3,
                  marginTop: -farmerData.attributes[3].occurence * 3,
                }}
              >
                <span>{farmerData.attributes[3].occurence}</span>
              </div>
              <div
                className='bar bar3'
                style={{
                  height: farmerData.attributes[4].occurence * 3,
                  marginTop: -farmerData.attributes[4].occurence * 3,
                }}
              >
                <span>{farmerData.attributes[4].occurence}</span>
              </div>
              <div
                className='bar bar4'
                style={{
                  height: farmerData.attributes[5].occurence * 3,
                  marginTop: -farmerData.attributes[5].occurence * 3,
                }}
              >
                <span>{farmerData.attributes[5].occurence}</span>
              </div>
              <div
                className='bar bar5'
                style={{
                  height: farmerData.attributes[7].occurence * 3,
                  marginTop: -farmerData.attributes[7].occurence * 3,
                }}
              >
                <span>{farmerData.attributes[7].occurence}</span>
              </div>
              <div
                className='bar bar6'
                style={{
                  height: farmerData.attributes[8].occurence * 3,
                  marginTop: -farmerData.attributes[8].occurence * 3,
                }}
              >
                <span>{farmerData.attributes[8].occurence}</span>
              </div>
             
            </div>
            <h3>{farmerData.name}</h3>
          </div>
        </div> */}
        <Box className="hvrd_box">
          <Box className="abslt_rrt_imgbx">
            <Box className="rrt_in_btn">
              Drop Chance : {(absMin).toFixed(2)}%
            </Box>
          </Box>
          <Box component='img' src={farmerData && farmerData.image} />
          
        </Box>
        
        <Box className='farmer_666'>
          <Typography component='h5'>{farmerData.name}</Typography>
          
          {/* <Box
            component='img'
            src='/static/images/apply.png'
            className='img_apply'
          /> */}
        </Box>
        <Box className='prgrss_main_box'>
          <Box className='head_pgrss'>
            <Typography>Eyes</Typography>
            <Box className='def_prgrss'>
              <LinearProgress
                variant='determinate'
                value={
                  farmerData.attributes[2].points +
                    farmerData.attributes[6].points >=
                  1
                    ? 100
                    : 0
                }
              />
              <LinearProgress
                variant='determinate'
                value={
                  farmerData.attributes[2].points +
                    farmerData.attributes[6].points >=
                  2
                    ? 100
                    : 0
                }
              />
              <LinearProgress
                variant='determinate'
                value={
                  farmerData.attributes[2].points +
                    farmerData.attributes[6].points >=
                  3
                    ? 100
                    : 0
                }
              />
              <LinearProgress
                variant='determinate'
                value={
                  farmerData.attributes[2].points +
                    farmerData.attributes[6].points >=
                  4
                    ? 100
                    : 0
                }
              />
              <LinearProgress
                variant='determinate'
                value={
                  farmerData.attributes[2].points +
                    farmerData.attributes[6].points >=
                  5
                    ? 100
                    : 0
                }
              />
            </Box>
          </Box>
          <Box className='head_pgrss'>
            <Typography>HairHat</Typography>
            <Box className='def_prgrss'>
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[3].points >= 1 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[3].points >= 2 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[3].points >= 3 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[3].points >= 4 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[3].points >= 5 ? 100 : 0}
              />
            </Box>
          </Box>
          <Box className='head_pgrss'>
            <Typography>Mouth</Typography>
            <Box className='def_prgrss'>
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[4].points >= 1 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[4].points >= 2 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[4].points >= 3 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[4].points >= 4 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[4].points >= 5 ? 100 : 0}
              />
            </Box>
          </Box>
          <Box className='head_pgrss'>
            <Typography>Beard</Typography>
            <Box className='def_prgrss'>
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[5].points >= 1 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[5].points >= 2 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[5].points >= 3 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[5].points >= 4 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[5].points >= 5 ? 100 : 0}
              />
            </Box>
          </Box>
          <Box className='head_pgrss'>
            <Typography>Clothes</Typography>
            <Box className='def_prgrss'>
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[7].points >= 1 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[7].points >= 2 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[7].points >= 3 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[7].points >= 4 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[7].points >= 5 ? 100 : 0}
              />
            </Box>
          </Box>
          <Box className='head_pgrss'>
            <Typography>Tools</Typography>
            <Box className='def_prgrss'>
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[8].points >= 1 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[8].points >= 2 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[8].points >= 3 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[8].points >= 4 ? 100 : 0}
              />
              <LinearProgress
                variant='determinate'
                value={farmerData.attributes[8].points >= 5 ? 100 : 0}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
