import React from 'react';
import { Dialog, Button, Box } from '@material-ui/core';

const BlackFridaySale = () => {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    window.localStorage.setItem('visited', 'true');
    setOpen(false);
  };

  return (
    <>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        className="sale_modal"
      >
        <div className='mdl_bd'>
          <Box
            component='img'
            src='/static/images/modal_bg.jpg'
          />
          <div className='inn_mdl_bd'>
            <h1>Cyber Week</h1>
            <p>
              Buy NFTrees and Receive Merchandise of the NFTree you Purchased
            </p>
            <h6>
              Until December, 2nd - 3pm UTC{' '}
              <a href='https://nft.treedefi.com'>nft.treedefi.com</a>
            </h6>
            <Button
              className='tkyrrs_btn'
              href='https://nft.treedefi.com'
              target='_blank'
              // onClick={props.onHide}
            >
              Choose yours!
            </Button>
            <h5>25-27 November 2021</h5>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default BlackFridaySale;
