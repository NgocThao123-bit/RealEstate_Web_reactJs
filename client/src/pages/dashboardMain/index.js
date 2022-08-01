import React from 'react'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Iframe from 'react-iframe';
//picture
import house1 from '../../images/hero-img.jpg';
import house2 from '../../images/kitchen.jpg';
import { BasicTable } from '../../components/table';

export const MainDashBoard = () => {
    const iframe = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.107269175287!2d106.72666341961798!3d10.809257876786871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175263d580e4583%3A0x6d25e042c3aed063!2zVGjhuqNvIMSQaeG7gW4sIFF14bqtbiAyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1656698149839!5m2!1svi!2s";

    return (
        <div id='main-dashboard'>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6} lg={6}>
                    <Paper
                        sx={{
                            p: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <img src={house1} alt='' style={{ height: "100%", borderRadius: "1%" }}></img>

                    </Paper>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                    <Paper
                        sx={{
                            p: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <img src={house2} alt='' style={{ height: "100%", borderRadius: "1%" }}></img>

                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ p: 0.5, display: 'flex', flexDirection: 'column' }}>

                        <Iframe url={iframe}
                            height="300"
                            borderRadius="1%"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"
                        />
                    </Paper>
                </Grid>
            </Grid>
            <BasicTable/>
        </div>

    )
}
