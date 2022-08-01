import React, { useEffect, useState } from 'react';
import { useStyles } from './style';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@material-ui/core';
import img1 from '../../images/hero21.png'
export const Hero = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root}>

            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedheight={50}
            >
                <Grid className={classes.container} container spacing={0}>
                    <Grid xs={12} sm={5} item>
                        <h1 className={classes.title}>
                            {/* Welcome to <br />
                            My<span className={classes.colorText}>Houses.</span> */}
                            Find your dream house
                        </h1>
                        <Scroll to="place-to-visit" smooth={true}>
                            <IconButton>
                                <ExpandMoreIcon className={classes.goDown} />
                            </IconButton>
                        </Scroll>
                    </Grid>
                    <Grid xs={12} sm={7} item >
                        <img src={img1} alt='img1'
                         style={{ height: '50%', position: 'relative',margin:0}}
                        />
                    </Grid>

                </Grid>

            </Collapse>
        </div>
    );
}
