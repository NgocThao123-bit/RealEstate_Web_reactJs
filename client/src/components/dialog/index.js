import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import { useStyles } from './styled';
import ContactApi from '../../api/contactApi';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    const [openAlert, setOpenAlert] = useState(false);
    const vertical = 'bottom'
    const horizontal = 'right';
    const [errorMessages, setErrorMessages] = useState([]);
  const [severity, setSeverity] = useState('');
    const handleClickOpenAlert = () => {
        setOpenAlert(true);
    };
    const handleCloseAlert = () => {
        setOpenAlert(false);
    };
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
                setOpenAlert(true);
                setErrorMessages('Submitted')
                setSeverity('success')
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
                setErrorMessages(e)
                setOpenAlert(true);
                setErrorMessages(e)
                setSeverity('error')
            });
        setContact(initialContact)
    };
    const handleClose = () => {
        onClose(selectedValue);
    };
    const classes = useStyles();

    return (
        <Dialog className={classes.root} onClose={handleClose} open={open}>
            <DialogTitle className={classes.title}>Contact Agent</DialogTitle>
            <Typography className={classes.card} variant="body2" color="textSecondary" component="p" >
                Fill up the form and our team will get back to you within 24 hours.
            </Typography>
            <form className={classes.card_content}>
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
                        <Typography>Are you interested in {selectedValue}?</Typography>
                        <TextField
                            onChange={handleInputChange}
                            label="Message"
                            multiline rows={4}
                            variant="outlined"
                            fullWidth required
                            value={contact.message}
                            name="message"
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            onClick={saveContact}
                            style={{
                                backgroundColor: '#000',
                                color: '#5AFF3D',
                                '&:hover': {
                                    color: 'white',
                                }
                            }}
                            className={classes.btn}
                            type="submit"
                            variant="contained"
                            fullWidth>
                            Submit
                        </Button>
                    </Grid>

                </Grid>
            </form>
            <Snackbar
                open={openAlert}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}
            >
                <Alert onClose={handleCloseAlert} severity={severity} sx={{ width: '100%' }}>
                    {errorMessages}
                </Alert>
            </Snackbar>
        </Dialog>

    );

}