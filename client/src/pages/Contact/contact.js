import React, { useState } from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import Header from '../../components/header/Header';
import { useStyles } from './styled';
import { CssBaseline } from '@mui/material';
import { Map } from '../../components/Map';
import ContactApi from '../../api/contactApi';

export const Contact = () => {

  const initialContact = {
    contactID: 0,
    lastName: "",
    firstName: "",
    phoneNumber: "",
    email: "",
    message: "",
    status: 0
  };
  const [contact, setContact] = useState(initialContact);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
    console.log(contact)
  };

  const saveContact = () => {
    ContactApi.create(contact)
      .then(response => {

        console.log(response.data);
      })
      .catch(e => {
        console.log(e);

      });
    setContact(initialContact)
  };

  const classes = useStyles();


  return (
    <div className={classes.root} id='contact'>

      <Grid container spacing={1} style={{ marginTop: 50, color: 'black' }}>
        <Grid xs={12} sm={8} item >
          <Map />
        </Grid>
        <Grid xs={12} sm={4} item>
          <Card className={classes.card} style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent className={classes.card_content}>
              <Typography gutterBottom variant="h3" align="center">
                Contact us
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                Fill up the form and our team will get back to you within 24 hours.
              </Typography>
              <form>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      onChange={handleInputChange}
                      placeholder="Enter first name"
                      label="First Name"
                      variant="outlined"
                      fullWidth required
                      value={contact.firstName}
                      name="firstName"
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      onChange={handleInputChange}
                      placeholder="Enter last name"
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      required
                      value={contact.lastName}
                      name="lastName"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handleInputChange}
                      type="email"
                      placeholder="Enter email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      value={contact.email}
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter phone number"
                      label="Phone"
                      variant="outlined"
                      fullWidth required
                      value={contact.phoneNumber}
                      name="phoneNumber"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handleInputChange}
                      label="Message"
                      multiline rows={4}
                      variant="outlined"
                      fullWidth required
                      value={contact.message}
                      name="message"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button  onClick={saveContact} className={classes.button} type="submit" variant="contained" fullWidth>Submit</Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>


      </Grid>

    </div>

  )
}
