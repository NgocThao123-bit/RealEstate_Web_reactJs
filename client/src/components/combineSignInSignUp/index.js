import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from '../../pages/login/index';
import SignUp from '../../pages/signUp/index';

const theme = createTheme({
  palette: {
    mode: 'dark',
   
  },
});

export default function SignInSide() {

  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>
              {children}
            </Typography>
          </Box>
        )}
      </div>


    );
  }


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
           
            backgroundImage: `url(${process.env.PUBLIC_URL + './assets/apt1.jpg'})`,

            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid
          item xs={12}
          sm={8} md={5}
          component={Paper}
          elevation={6}
          square
        >         
          <Tabs
            value={value}
            indicatorColor="primary"
            // textColor="success"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
             <Tab label="Sign In" />
            <Tab label="Sign Up" />           
          </Tabs>
          
          <TabPanel value={value} index={0}>
            <SignIn handleChange={handleChange}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SignUp />
            
          </TabPanel>

        
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}