import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ButtonContact, useStyles } from './styled';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import errorPicture from '../../images/footer8.png';
import { Typography } from '@material-ui/core';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BedIcon from '@mui/icons-material/Bed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Stack } from '@mui/material';

import { Map } from '../Map';
import { useParams } from 'react-router-dom';
import HouseApi from '../../api/houseApi';
import SimpleDialog from '../dialog';
import PropertyTypeApi from '../../api/propertyTypeApi';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'flex',
  color: theme.palette.text.secondary,
}));

function HouseDetail({ house }) {
  const classes = useStyles();

  // const [house, setHouses] = useState([]);
  const [photo, setPhoto] = useState([])
  const [type, setType] = useState([])
  const [open, setOpen] = React.useState(false);
  // const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
  let params = useParams();
  // const getData = async () => {
  //   HouseApi.getHouseById(housesID)
  //     .then(res => {
  //       const myData = res.data[0];
  //       setHouses(myData)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     });
  // }
  const getPhoto = async () => {
    HouseApi.getListPhotoById(house.houseID)
      .then(res => {
        const myData = res.data;
        setPhoto(myData)
      })
      .catch(err => {
        console.log(err)
      });
  }

  const getType = async () => {
    PropertyTypeApi.gethouseTypeById(house.houseID)
      .then(res => {
        const myData = res.data[0];
        setType(myData)
      })
      .catch(err => {
        console.log(err)
      });
  }
  useEffect(() => {
    getPhoto()
    getType()
    // getData(params.type)
  },
    // [params.type]
  )


  return (
    <Box sx={{ width: '100%' }} >
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 6, sm: 6, md: 12 }}>
        <Grid item xs={6} sm={6} md={6} >
          <ImageList
            sx={{
              minWidth: 200,
              height: '100%',
              transform: 'translateZ(0)',
            }}
            rowHeight={200}
            gap={1}
          >
            {photo.map((item) => {
              const cols = item.feature ? 2 : 1;
              const rows = item.feature ? 2 : 1;
              return (
                <ImageListItem key={item.url} cols={cols} rows={rows}>
                  <img
                    {...srcset(item.url, 250, 200, rows, cols)}
                    alt={item.Room}
                    loading="lazy"
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Grid>
        <Grid sx={{ height: '100%' }} item xs={6} sm={6} md={6}>
          <Item >


            <Grid key={house.houseID} container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={9}>
                <Item>
                  <Typography
                    variant="h5"
                    component="h1"
                    style={{ color: 'black', fontWeight: 'bold', }}
                  >
                    <HomeOutlinedIcon spacing={0} fontSize='large' style={{ color: 'green', fontWeight: 'bold', marginBottom: -6, marginRight: 5, }} />
                    {house.type}
                  </Typography>
                </Item>
              </Grid>
              {house.status ? (
                <br />
              ) : (

                <Grid item xs={3}>
                  <Item>
                    <ButtonContact onClick={handleClickOpen}>Contact</ButtonContact>
                  </Item>
                </Grid>
              )}


              <Grid item xs={12} style={{ marginTop: '15pt' }}>
                <Item>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h1"
                    style={{ color: 'gray' }}
                  >
                    <span className={classes.spans}>Price:</span>
                    {house.price}$
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} style={{ marginTop: '-8pt' }}>
                <Item>
                  <Typography
                    // gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ color: 'gray' }}
                  >
                    <Stack direction="row" spacing={1}>

                      <span className={classes.spans}>Bedrooms:</span>
                      {house.beds}
                      <span className={classes.spans}>Bathrroms:</span>
                      {house.baths}
                      <span className={classes.spans}>Area:</span>
                      {house.sqft} m2
                    </Stack>
                  </Typography>

                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Typography
                    variant="h6"
                    component="p"
                  // className={classes.desc}
                  >
                    <span className={classes.spans}>Type:</span>
                    {type.name}
                  </Typography>
                </Item>
                <Item>
                  <Typography
                    variant="h6"
                    component="p"
                  // className={classes.desc}
                  >
                    <span className={classes.spans}>Location:</span>
                    {house.location}
                  </Typography>
                </Item>
                <Item ><Map style={{ height: '100%' }} /></Item>
                <Item>
                  <span className={classes.spans}>Overview:</span>
                  {house.description}
                </Item>

                {/* <Item><img style={{ width:'100%', height: '100%' }} src={errorPicture} alt='errorPicture'></img></Item> */}
              </Grid>
              <SimpleDialog
                open={open}
                onClose={handleClose}
                selectedValue={house.location}
              />
            </Grid>

          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HouseDetail