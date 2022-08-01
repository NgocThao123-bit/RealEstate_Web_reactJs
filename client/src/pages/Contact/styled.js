import { makeStyles } from '@material-ui/core/styles';
import { alpha } from '@mui/material/styles'
export const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        // backgroundImage: `url(https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginBottom:'20px',
        marginTop:'20px',
        marginLeft:'30px',
        marginRight:'30px',
    },
    card:{
        // position: 'relative',
        borderRadius: theme.shape.borderRadius,
        color: 'black',
        backgroundColor: alpha(theme.palette.common.white, 0.8),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.9),
        },
        margin: 0,
        width: '90%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
    },
    card_content:{
        color: 'black'
    },
    button:{
        // position: 'absolute',       
        backgroundColor: '#000', 
        color: '#5AFF3D',  
          
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.black, 0.5),
          color:'white', 
        },     
        
       
    }
  }));



  