import { Button, Container, Grid, OutlinedInput, Typography } from "@material-ui/core";
import MenuItem from '@mui/material/MenuItem';
import { Stack } from "@mui/material";

import React, { useEffect, useState } from "react";
import HouseApi from "../../api/houseApi";
import InputAdornment from '@mui/material/InputAdornment';
import { useStyles } from "./styled";
import PropertyTypeApi from "../../api/propertyTypeApi";
import TextField from '@mui/material/TextField';
import {
    FormControl, FormLabel,
    RadioGroup as MuiRadioGroup,
    FormControlLabel, Radio,
}
    from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";


const AddHouse = () => {
    const initialHouseState = {
        houseID: 0,
        name: "",
        description: "",
        location: "",
        price: null,
        beds: null,
        baths: null,
        sqft: null,
        type: "",
        map: "",
        listingPhoto: "",
        propertyTypeID: null,
        status:0
    };
    const [House, setHouse] = useState(initialHouseState);
    const [properties, setProperty] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setHouse({ ...House, [name]: value });
        console.log(House)
    };
    const getPropertyData = async () => {
        try {
            await PropertyTypeApi.getAll().then(res => {
                setProperty(res.data)
                console.log(res.data)
            })
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getPropertyData();
    }, []);
    const saveHouse = () => {
        let startTime = new Date();
        var datas = {
            houseID: House.houseID,
            name: House.name,
            description: House.description,
            location: House.location,
            price: House.price,
            beds: House.beds,
            baths: House.baths,
            sqft: House.sqft,
            type: House.type,
            map: House.map,
            listingPhoto: House.listingPhoto,
            propertyTypeID: House.propertyTypeID,
            status:House.status,
        };
       

        HouseApi.create(datas)
            .then(response => {
                setSubmitted(true);
                console.log('m');
                console.log("Client Side Submit Axios Post Elapsed time in milliseconds")
               let elapsedTime = (new Date() - startTime);
               console.log("Client Side Axios elapsed time..", elapsedTime);

            })
            .catch(e => {
                console.log(e);
            });
    };
    const newHouse = () => {
        setHouse(initialHouseState);
        setSubmitted(false);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {submitted ? (
                <>
                 <Typography>
                    You submitted successfully!                  
                    <Button className={classes.button} onClick={newHouse}>
                        You want to add more?
                    </Button>                    
                </Typography>
              
                <Typography>
                   <Link  to='/admin/products' style={{textDecoration:'none', color:'green'}}>
                    Or you want to check?
                </Link> 
                </Typography>

               
                </>
               
            ) : 
            (
                <Container >
                    <FormControl className={classes.form} autoComplete="off" >
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField
                                    label="Name"
                                    id="outlined-search"
                                    value={House.name}
                                    type="search"
                                    onChange={handleInputChange}
                                    name="name"

                                />
                                <TextField
                                    label="Location"
                                    id="outlined-search"
                                    value={House.location}
                                    type="search"
                                    onChange={handleInputChange}
                                    name="location"
                                />
                                <TextField
                                    label="Map"
                                    id="outlined-search"
                                    value={House.map}
                                    type="search"
                                    onChange={handleInputChange}
                                    name="map"
                                />
                                <TextField
                                    label="Image"
                                    id="outlined-search"
                                    value={House.listingPhoto}
                                    type="search"
                                    onChange={handleInputChange}
                                    name="listingPhoto"
                                />
                                <TextField
                                    label="Description"
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={4}
                                    value={House.description}
                                    className={classes.textField}
                                    onChange={handleInputChange}
                                    name="description"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Stack
                                    direction={{ xs: 'column', sm: 'row' }}
                                    spacing={{ xs: 1, sm: 1.5, md: 2 }}
                                >
                                    <FormControl>
                                        <FormLabel>Type</FormLabel>
                                        <MuiRadioGroup row
                                            name="type"
                                            value={House.type}
                                            onChange={handleInputChange}
                                        >
                                            <FormControlLabel value={'Buy'} control={<Radio />} label="Buy" />
                                            <FormControlLabel value={'Rent'} control={<Radio />} label="Rent" />

                                        </MuiRadioGroup>
                                    </FormControl>
                                    <FormControl
                                        variant="outlined"
                                    // sx={{ m: 1, minWidth: 180 }}
                                    >
                                        <InputLabel id="demo-simple-select-autowidth-label">Property Type</InputLabel>
                                        <Select
                                            label="Property Type"
                                            name="propertyTypeID"
                                            // labelId="demo-simple-select-autowidth-label"
                                            // id="demo-simple-select-autowidth"
                                            value={House.propertyTypeID}
                                            onChange={handleInputChange}
                                            autoWidth
                                        >                                            
                                            {properties.map(property => (
                                                <MenuItem key={property.propertyTypeID} value={property.propertyTypeID}>
                                                    {property.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </Stack>
                                <Stack
                                    direction={{ xs: 'column', sm: 'row' }}
                                    spacing={{ xs: 0, sm: 0.5, md: 1 }}
                                >
                                    <FormControl sx={{ m: 1, minWidth: 80 }} >
                                        <TextField
                                            className={classes.select}
                                            value={House.beds}
                                            onChange={handleInputChange}
                                            name="beds"
                                            id="outlined-number"
                                            label="Beds"
                                            type="number"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <TextField
                                            className={classes.select}
                                            value={House.baths}
                                            onChange={handleInputChange}
                                            name="baths"
                                            id="outlined-number"
                                            label="Baths"
                                            type="number"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <TextField
                                            inputProps={{ step: ".01" }}
                                            className={classes.select}
                                            value={House.sqft}
                                            onChange={handleInputChange}
                                            name="sqft"
                                            id="outlined-number"
                                            label="Sqft"
                                            type="number"
                                        />
                                    </FormControl>
                                </Stack>
                                <Stack
                                    direction={{ xs: 'column', sm: 'row' }}
                                    spacing={{ xs: 0, sm: 0.5, md: 1 }}
                                >
                                    <FormControl >
                                        <InputLabel>Price</InputLabel>
                                        <OutlinedInput
                                            value={House.price}
                                            onChange={handleInputChange}
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                            label="Price"
                                            name="price"
                                        />
                                    </FormControl>
                                </Stack>
                            </Grid>
                        </Grid>
                    </FormControl>
                   
                    <Button onClick={saveHouse} className={classes.button}>
                        Submit
                    </Button>
                </Container>
            )}
        </div>
    );
};
export default AddHouse;