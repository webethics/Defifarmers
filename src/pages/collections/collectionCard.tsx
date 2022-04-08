import { memo } from 'react';

import { Box } from '@material-ui/core';

import { Player } from '@lottiefiles/react-lottie-player';
interface TreeCardProps {
  imageURL: any;
}

const CollectionCard = ({ imageURL }: TreeCardProps) => {
  return imageURL.split('.').pop() == 'json' ? (
    <Box sx={{ width: '100%' }}>
      <Player autoplay loop src={imageURL} style={{ height: '225px' }} />
    </Box>
  ) : (
    <Box
      component={imageURL.split('.').pop() == 'mp4' ? 'video' : 'img'}
      src={imageURL || '/static/mock-images/products/tree_img.png'}
      playsInline
      autoPlay
      loop
      sx={{ width: '100%' }}
    />
  );
};

export default memo(CollectionCard);
