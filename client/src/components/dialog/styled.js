import { makeStyles } from '@material-ui/core/styles';
import { alpha } from '@mui/material/styles'
export const useStyles = makeStyles((theme) => ({
    root: {
    margin: 5,
        padding:10,
        borderRadius:'10%'        
    },
    card:{          
      padding:10,
      textAlign:'center',     
    },
    title:{
      background:'#339966',
      textAlign:'center',
    },
    card_content:{     
      margin: 10,
        padding:10,
    },
    btn:{
        // position: 'absolute',       
        backgroundColor: '#000', 
        color: '#5AFF3D',            
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.black, 0.5),
          color:'white', 
        },  
       
    }
  }));



  