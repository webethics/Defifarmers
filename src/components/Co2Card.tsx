import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Grid, Card, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

// it could be great to move this in styling sheet outside this file
const StyledPlantedTreeCard = styled('div')`
  align-items: center;
  display: flex;
  flex: 1;
  text-align: center;
  width: 100%;
  height: 180px;
  margin-bottom: 15px;
  & > div {
    width: 100%;
    height: 100%;
    padding-top: 15px;
    background-image: url('/static/images/Banner1.jpg');
    background-size: cover;
    background-position: center;
    margin-bottom: 0px;
    background-color: #3bb78f;
  }
`;

const StyledPlantedTreeCard1 = styled('div')`
  align-items: center;
  display: flex;
  flex: 1;
  text-align: center;
  width: 100%;
  height: 180px;
  margin-bottom: 15px;
  & > div {
    width: 100%;
    height: 100%;
    padding-top: 35px;
    background-size: cover;
    background-position: center;
    margin-bottom: 0px;
    background-color: #3bb78f;
  }
`;

const Co2Card = ({
  co2,
  generated,
  generating,
  calculating,
  generatingcalculating,
}) => {
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <>
      <StyledPlantedTreeCard>
        <Card sx={{ m: '0 2%' }}>
          <Typography
            sx={{ fontSize: '30px', color: '#00AB55', fontWeight: 'bold' }}
          >
            🌱 Total Offsetting CO₂
          </Typography>

          <>
            {/* <Heading color="invertedContrast" size="xl">{`${tvl}`}</Heading> */}
            <Typography
              sx={{ fontSize: '30px', color: '#00AB55', fontWeight: 'bold' }}
            >
              {co2.toFixed(2)} g
            </Typography>

            <Typography component='h4' sx={{ color: 'white', fontWeight: 600 }}>
              Co2 absorbed from past and current NFTrees
            </Typography>

            {/* <Typography sx={{ color: 'white' }}>
            You are helping the enviornemnt by holding your NFTrees!
          </Typography> */}
          </>
          {/* ) : (
          <>
            <Skeleton height={66} />
          </>
        )} */}
        </Card>
      </StyledPlantedTreeCard>

      <Grid
        container
        justifyContent={{ xs: 'center', md: 'space-between' }}
        sx={{ mb: 5, flex: 'auto' }}
      >
        <Grid item md={6} sx={{ flex: 'auto', mt: '15px' }}>
          <Card
            sx={{
              m: '0 2%',

              height: '180px',
              backgroundImage: `url('/static/images/4.jpg')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              // backgroundImage: `url('/static/images/bgtreecard-sx.png')`,
            }}
          >
            <Typography
              sx={{
                fontSize: '30px',
                color: '#00AB55',
                fontWeight: 'bold',
                textAlign: 'center',
                pt: '35px',
              }}
            >
              Generating CO₂
            </Typography>

            <>
              {/* <Heading color="invertedContrast" size="xl">{`${tvl}`}</Heading> */}
              <Typography
                sx={{
                  fontSize: '30px',
                  color: '#00AB55',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                {generatingcalculating
                  ? 'Calculating...'
                  : generating.toFixed(2) + ' g'}
              </Typography>

              <Typography
                component='h4'
                sx={{ color: 'white', fontWeight: 600, textAlign: 'center' }}
              >
                CO₂ absorbed from current NFTrees
              </Typography>

              {/* <Typography sx={{ color: 'white' }}>
            You are helping the enviornemnt by holding your NFTrees!
          </Typography> */}
            </>
            {/* ) : (
          <>
            <Skeleton height={66} />
          </>
        )} */}
          </Card>
        </Grid>

        <Grid item md={6} sx={{ flex: 'auto', mt: '15px' }}>
          <Card
            sx={{
              m: '0 2%',

              height: '180px',
              backgroundImage: `url('/static/images/4.jpg')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              // backgroundImage: `url('/static/images/bgtreecard-sx.png')`,
            }}
          >
            <Typography
              sx={{
                fontSize: '30px',
                color: '#00AB55',
                fontWeight: 'bold',
                textAlign: 'center',
                pt: '35px',
              }}
            >
              Generated CO₂
            </Typography>

            <>
              {/* <Heading color="invertedContrast" size="xl">{`${tvl}`}</Heading> */}
              <Typography
                sx={{
                  fontSize: '30px',
                  color: '#00AB55',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                {calculating && generated == '0'
                  ? 'Calculating...'
                  : generated.toFixed(2) + ' g'}
              </Typography>

              <Typography
                component='h4'
                sx={{ color: 'white', fontWeight: 600, textAlign: 'center' }}
              >
                CO₂ absorbed from previous NFTrees
              </Typography>

              {/* <Typography sx={{ color: 'white' }}>
            You are helping the enviornemnt by holding your NFTrees!
          </Typography> */}
            </>
            {/* ) : (
          <>
            <Skeleton height={66} />
          </>
        )} */}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Co2Card;
