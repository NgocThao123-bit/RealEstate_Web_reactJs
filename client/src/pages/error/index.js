import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import errorPicture from '../../images/error5.png';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        background: 'black',
        // backgroundImage: `url(${process.env.PUBLIC_URL + './assets/error3.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));
const Error = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <CssBaseline />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
            >
                <img src={errorPicture} alt='errorPicture'></img>
                <h1 style={{ 'color': "white" }}>Pages not found</h1>

            </div>



        </div>
    );
}

export default Error