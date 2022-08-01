import React, { useEffect, useState, createRef } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../hook/useWindowPosition';
import HouseCard from '../houseCard';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh', overflow: 'auto',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
}));

function HouseList({listHouse}) {

    const classes = useStyles();
    const checked = useWindowPosition('header');

    return (
        <div id='houseList'>
            <Box sx={{ m: 1, flexGrow: 1 }} >
                <Grid className={classes.root} container spacing={0}>
                    {
                        listHouse.map((house,index) => (
                            <Grid key={index} item xs={12} sm={6} md={3}>
                                <HouseCard houses={house} checked={checked} />
                            </Grid>

                        ))
                    }
                </Grid>
            </Box>
        </div>
    );
}

export default HouseList;



