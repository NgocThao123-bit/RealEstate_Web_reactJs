import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';

  export const ButtonSearch = styled(Button)(({ theme }) => ({
    // position: 'relative',  
    width: '10',
    height: 40,
    backgroundColor: '#000',  
    '&:hover': {
      color: 'white',
    },
    right:-150,
    color:'#5AFF3D',
    marginTop:10,
  
  }));

  export const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      background: 'rgba(0,0,0,0.5)',
      margin: '10px',
      marginTop:3,
      // transition: "transform 0.15s ease-in-out",
      border:0,
  
    },
    cardHovered: {
      transform: "scale3d(1.05, 1.05, 1)"
    },
    media: {
      margin:0,
      height: 300,
      width:300,
      // position: 'relative'
    },
  
    content: {
      // whiteSpace:'nowrap',
    },
    title: {
      fontFamily: 'Nunito',
      fontWeight: 'bold',
      fontSize: '1rem',
      color: '#fff',
      background: 'rgba(0,0,0,0.5)',
      // borderRadius: 20,
      borderBlockColor: 'white',
      maxWidth: 150,
      textAlign: 'center',
      padding: 5,
      margin:0,
      // position: 'absolute',
    },
    price: {
      fontFamily: 'Nunito',
      fontSize: '1.8rem',
      color: '#ddd',
      // position: 'relative',
  
    },
    desc: {
      fontFamily: 'Nunito',
      fontSize: '1.1rem',
      color: '#ddd',
      // whiteSpace:'nowrap',
      // position: 'fixed',
    },
    icon: {
      color: '#5AFF3D',
      marginBottom: -6,
      marginRight: 5,
    },
    beds: {
      // position: 'absolute',
      // top: '20px',
      marginLeft: 130,
      color: '#ddd',
      fontSize: '1.2rem',
    },
    button: {
      marginLeft: 180,
      marginTop: 10,
      backgroundColor:'black',
      minHeight:200,
      width:20,
      // position: 'absolute',
      // bottom: 0,
      // right:0,
    },
    link:{
      textDecoration:'none',
    },
  });