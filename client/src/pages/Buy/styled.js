
import { makeStyles } from '@material-ui/core/styles';
import { styled, alpha } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';

export const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '50vh',
        backgroundImage: `url(https://images.pexels.com/photos/945593/pexels-photo-945593.jpeg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'overlay',
        '&::-webkit-scrollbar': {
          width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey'
        }
    },
    head:{
      background: 'rgba(0,0,0,0.5)',
    },
    link:{
      textDecoration:'none',
    }
  }));





  export const Search = styled('div')(({ theme }) => ({
  
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    color: 'white',
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    margin: 30,
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1.5em + ${theme.spacing(5)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));
  
  export  const Selected = styled(Select)(({ theme }) => ({
    // position: 'relative',
    // border: 'none',
    // color: 'white',
    // borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.black, 0.3),
    // '&:hover': {
    //   backgroundColor: alpha(theme.palette.common.black, 0.25),
    // },
    margin: 30,
    height: 40,
    marginLeft: 10,
    width: 'autoWidth',
    // width: 100,
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(1),
    //   width: '100',
    // },
  }));
  export const Input = styled(InputLabel)(({ theme }) => ({
    position: 'absolute',
    border: 'none',
    // color: 'gray',
    marginTop: 20,
    width: 'autoWidth',
  
  
  }));
  
  export const ButtonSearch = styled(Button)(({ theme }) => ({ 
  
    width: '10',
    height: 40,
    backgroundColor: '#000',
  
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 10,
    color: '#5AFF3D',
    marginTop: 30,
  
  }));