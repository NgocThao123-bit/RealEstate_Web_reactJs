import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../../components/header/Header';
import Listing from '../../components/Listing/PlaceToVisit';
// import Link from 'react-scroll/modules/components/Link';

import { Hero } from '../Hero';
import Footer from '../../components/footer';
import { Contact } from '../Contact/contact';
import Projects from '../projects';
import About from '../About';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundColor:'black',
        // backgroundImage: `url(${process.env.PUBLIC_URL + './assets/hero20.jpg'})`,        
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        overflow:'hidden'
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>           
                <CssBaseline />
                <Header />
                <Hero />
                <About/>
                <Projects/>
                <Contact/>                 
                <Footer/>              
                           
        </div>
    );
}