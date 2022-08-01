import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../ImageCard/ImageCard';
import places from '../Data/places';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:0,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function Listing() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
     
        <ImageCard place={places[0]} checked={checked} />
        <ImageCard place={places[1]} checked={checked} />
        <ImageCard place={places[2]} checked={checked} />
        <ImageCard place={places[3]} checked={checked} />
      

    </div>
  );
}
