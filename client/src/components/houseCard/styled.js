
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';

import Dialog from '@mui/material/Dialog';

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(0),
    height: '100vh'
  },

}));


export const ButtonSearch = styled(Button)(({ theme }) => ({
  // position: 'relative',  
  width: '10',
  height: 40,
  backgroundColor: '#000',
  '&:hover': {
    color: 'white',
  },
  right: -190,
  color: '#5AFF3D',
  marginTop: 10,

}));
export const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    background: 'rgba(0,0,0,0.6)',
    margin: '10px',
    marginTop: 3,
    // transition: "transform 0.15s ease-in-out",
    border: 0,

  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  },
  media: {
    margin: 0,
    height: 300,
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
    maxWidth: '50%',
    textAlign: 'center',
    padding: 5,
    margin: 0,
    // position: 'absolute',
  },
  price: {
    fontFamily: 'Nunito',
    fontSize: '1.8rem',
    color: '#ddd',
    // position: 'relative',

  },
  layer: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '3rem',
    color: '#fff',
    background: 'rgba(0,0,0,0.5)',
    // borderRadius: 20,
    borderBlockColor: 'white',
    minWidth: '100%',
    minHeight: '100%',
    textAlign: 'center',
    alignItems: 'center',
   
    top: "50%",
    left: "50%",
    // transform: "translate(-50%, -50%)",
    paddingTop: '30%',
    margin: 0,
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
    marginRight: 0,
  },
  beds: {
    // position: 'absolute',
    // top: '20px',
    marginLeft: 130,
    marginTop: -10,
    color: '#ddd',
    fontSize: '1.5rem',
  },
  button: {
    marginLeft: 180,
    marginTop: 10,
    backgroundColor: 'black',
    minHeight: 200,
    width: 20,
    // position: 'absolute',
    // bottom: 0,
    // right:0,
  },
  link: {
    textDecoration: 'none',
  },
  spans: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#000',
    // background: 'rgba(0,0,0,0.5)',
    // borderRadius: 20,
    // borderBlockColor: 'white',
    // maxWidth: 150,
    // textAlign: 'center',
    padding: 5,
    margin: 0,
  },
  btn: {
    marginRight: 0,
    marginTop: 10,
  }
  ,
  header: {
    margin: 0,
    padding: 0,
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',

  }

});
export const ButtonContact = styled(Button)(({ theme }) => ({
  position: 'sticky',
  width: 100,
  height: 40,
  backgroundColor: 'Green',
  '&:hover': {
    color: '#5AFF3D',
    background: "black"
  },
  // marginLeft:450,
  color: '#fff',
  // marginTop:0,

}));