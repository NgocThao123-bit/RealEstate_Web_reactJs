import React, { useState } from 'react';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Collapse } from '@material-ui/core';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BedIcon from '@mui/icons-material/Bed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { useStyles } from './styled';
import { ButtonSearch } from './styled';
import Typography from '@mui/material/Typography';

export default function ImageCard({ place, checked }) {
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
        raised={state.raised} zdepth={state.shadow}>

        <CardMedia
          className={classes.media}
          image={place.listingPhoto}
          title="Contemplative Reptile"
        >
          <Typography className={classes.title}>
            <HomeOutlinedIcon spacing={1} fontSize='midium' className={classes.icon} />{place.type}
          </Typography>

        </CardMedia>
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.price}
          >
            <AttachMoneyIcon fontSize='large' className={classes.icon} />{place.price}

          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.beds}>
            <Stack direction="row" spacing={1}>
              <BedIcon fontSize='midium' className={classes.icon} /> {place.beds}
              <BathtubOutlinedIcon fontSize='midium' className={classes.icon} /> {place.baths}
              <SquareFootOutlinedIcon fontSize='midium' className={classes.icon} /> {place.sqft}
            </Stack>
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.desc}
          >
            {place.location}
          </Typography>
          <Typography
            gutterBottom
          >
            <Link to={`/${place.path}`} className={classes.link}>
              <ButtonSearch >View more</ButtonSearch>
            </Link>
          </Typography>
         
        </CardContent>
      </Card>
    </Collapse>
  );
}
