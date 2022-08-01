import { makeStyles } from '@material-ui/core/styles';
// import img from '../../images/footer7.png'
export const useStyles = makeStyles((theme) => ({
    root: {
      maxHeight: '90vh',
      display:'center',
      marginTop:50,   
      marginBottom:100,
      // minHeight: '100vh',
      // backgroundImage: `url(${process.env.PUBLIC_URL + './assets/hero5.jpg'})`,      
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover',
    },
    colorText: {
        color: '#5AFF3D',
      },
      container: {
        textAlign: 'center',
        
      },
      title: {
        color: '#fff',
        fontSize: '4.5rem',
        marginTop:100,
        
      },
      goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
      },
  }));

