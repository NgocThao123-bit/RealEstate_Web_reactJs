import React, { useEffect, useState } from 'react'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BedIcon from '@mui/icons-material/Bed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Card from '@material-ui/core/Card';
import { ButtonSearch, useStyles } from './styled';
import { BootstrapDialogTitle } from './dialog';
import HouseDetail from './houseDetail';
import { BootstrapDialog } from './styled';
import DialogContent from '@mui/material/DialogContent';
import PropertyTypeApi from '../../api/propertyTypeApi';

const HouseCard = ({ houses, checked }) => {

  const [open, setOpen] = useState(false);
  const [type, setType] = useState([])

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getType = async () => {
    await PropertyTypeApi.gethouseTypeById(houses.houseID)
      .then(res => {
        const myData = res.data[0];
        setType(myData)
        console.log(myData)
      })
      .catch(err => {
        console.log(err)
      });
  }
  useEffect(() => {
    getType()
  }, []

  )
  const classes = useStyles();
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  })
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>

      <Card className={classes.root}
        classes={{ root: state.raised ? classes.cardHovered : "" }}
        onMouseOver={() => setState({ raised: true, shadow: 3 })}
        onMouseOut={() => setState({ raised: false, shadow: 1 })}
        raised={state.raised} zdepth={state.shadow}

      >

        {/* <CardMedia
          className={classes.media}          
          image={houses.listingPhoto}
          title="Contemplative Reptile"          
        > 
          

        </CardMedia> */}
        <CardMedia
          className={classes.media}
          image={houses.listingPhoto}
          title="Contemplative Reptile"
        >
          {houses.status ? (
            <Typography className={classes.layer}>
              Not available
            </Typography>
          ) : (
            <Typography className={classes.title}>
              <HomeOutlinedIcon spacing={1} fontSize='midium' className={classes.icon} />{houses.type}-{type.name}
            </Typography>

          )}


        </CardMedia>

        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.price}
          >
            <AttachMoneyIcon fontSize='large' className={classes.icon} />{houses.price}

          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.beds}>
            <Stack direction="row" spacing={1}>
              <BedIcon fontSize='midium' className={classes.icon} /> {houses.beds}
              <BathtubOutlinedIcon fontSize='midium' className={classes.icon} /> {houses.baths}
              <SquareFootOutlinedIcon fontSize='midium' className={classes.icon} /> {houses.sqft}
            </Stack>

          </Typography>

          <Typography
            variant="body2"
            component="p"
            className={classes.desc}
          >
            {houses.location}
          </Typography>

          <Typography
            gutterBottom
          >

            <ButtonSearch onClick={handleClickOpen} >View more</ButtonSearch>

          </Typography>
          <BootstrapDialog
            maxWidth='lg'
            // fullScreen={fullScreen}
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          //   PaperProps={{
          //     style: {
          //         backgroundColor: "whitesmoke",
          //         color:'black'
          //     },
          //  }}
          >
            <BootstrapDialogTitle variant='h5' className={classes.header} id="customized-dialog-title" onClose={handleClose}>
              HOUSE DETAIL
            </BootstrapDialogTitle>
            <DialogContent
              dividers
            >
              <HouseDetail house={houses} />
            </DialogContent>
          </BootstrapDialog>

        </CardContent>



      </Card>

    </Collapse >
  )
}

export default HouseCard;