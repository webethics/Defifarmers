import React, { useState } from "react";
import { Grid, Box, Container, Typography, Stack, Button } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function RankingBox() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <Box
        className="farmer_box"
        sx={{
          margin: "auto",
          maxWidth: {
            xs: "395px",
            md: "100%",
          },
        }}
      >
        <div className={isActive ? "details" : null} onClick={toggleClass}>
          <div className="card">
            <div className="photo"></div>
            <div className="chart">
              <div className="bar bar1">
                <span>20,000</span>
              </div>
              <div className="bar bar2">
                <span>10,000</span>
              </div>
              <div className="bar bar3">
                <span>15,000</span>
              </div>
              <div className="bar bar4">
                <span>24,000</span>
              </div>
              <div className="bar bar5">
                <span>7,000</span>
              </div>
              <div className="bar bar6">
                <span>7,000</span>
              </div>
              {/* <div className="bar bar7"><span>10,000</span></div> */}
            </div>
            <h3>Farmer #787</h3>
          </div>
        </div>

        <Box className="farmer_666">
          <Typography component="h5">Farmer #666</Typography>
          <Box component="img" src="/static/images/apply.png" className="img_apply" />
        </Box>
        <Box className="prgrss_main_box">
          <Box className="head_pgrss">
            <Typography>Eyes</Typography>
            <Box className="def_prgrss">
              <LinearProgress variant="determinate" value={100} />
              <LinearProgress variant="determinate" value={100} />
              <LinearProgress variant="determinate" value={0} />
            </Box>
          </Box>
          <Box className="head_pgrss">
            <Typography>HairHat</Typography>
            <Box className="def_prgrss">
              <LinearProgress variant="determinate" value={100} />
              <LinearProgress variant="determinate" value={0} />
            </Box>
          </Box>
          <Box className="head_pgrss">
            <Typography>Mouth</Typography>
            <Box className="def_prgrss">
              <LinearProgress variant="determinate" value={100} />
              <LinearProgress variant="determinate" value={0} />
            </Box>
          </Box>
          <Box className="head_pgrss">
            <Typography>Beard</Typography>
            <Box className="def_prgrss">
              <LinearProgress variant="determinate" value={100} />
              <LinearProgress variant="determinate" value={100} />
              <LinearProgress variant="determinate" value={0} />
              <LinearProgress variant="determinate" value={0} />
            </Box>
          </Box>
          <Box className="head_pgrss">
            <Typography>Clothes</Typography>
            <Box className="def_prgrss">
              <LinearProgress variant="determinate" value={100} />
              <LinearProgress variant="determinate" value={100} />
              <LinearProgress variant="determinate" value={0} />
              <LinearProgress variant="determinate" value={0} />
            </Box>
          </Box>
          <Box className="head_pgrss">
            <Typography>Objects</Typography>
            <Box className="def_prgrss">
              <LinearProgress variant="determinate" value={100} />
              <LinearProgress variant="determinate" value={100} />
              <LinearProgress variant="determinate" value={0} />
              <LinearProgress variant="determinate" value={0} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
