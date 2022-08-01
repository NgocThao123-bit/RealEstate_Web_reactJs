import { makeStyles } from '@material-ui/core/styles';
export const searchStyled = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1), minWidth: 100, marginBottom: '30px',
      overflow:'hidden'
    },
    link:{
      textDecoration:'none',
      color:'white',
    }
  }));