import { makeStyles } from "@material-ui/core/styles";
import { BackpackOutlined } from "@mui/icons-material";
import { color } from "@mui/system";

export const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        padding: theme.spacing(3, 2),
        backgroundImage: 'url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    button: {
      margin: theme.spacing(1),
      backgroundColor:"green",
      color:'white',
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    },
 
    container: {
      display: "flex",
      flexWrap: "wrap",
      color:"black",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400,    
    },
    select:{
      margin: 30,
      height: 40,
      marginLeft: 10,
      marginTop:-30,
    },
    form:{
       '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }

  }));