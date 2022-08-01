import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { searchStyled } from './styled';
import SearchIcon from '@mui/icons-material/Search';
import { Link as Scroll } from 'react-scroll';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Search, SearchIconWrapper, StyledInputBase, Input, Selected, ButtonSearch } from '../../pages/Buy/styled';

import { useNavigate, useParams } from 'react-router-dom';
import HouseList from '../house';
import HouseApi from '../../api/houseApi';
import PropertyTypeApi from '../../api/propertyTypeApi';

export const SearchAppBar = ({typeHouse}) => {

  const [houses, setHouse] = useState([]);
  const [input, setInput] = useState(' ');
  const navigate = useNavigate();
  const [currentList, setCurrentList] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [type, setType] = useState(typeHouse);
  const [price, setPrice] = useState(0);
  const [proType, setProType] = useState([]);
  const [property, setProperty] = useState(0)


  const getAllData = async () => {
    try {
      await HouseApi.getHouseByType(typeHouse).then(res => {
        setHouse(res.data);        
      })
    } catch (e) {
      console.log(e);
    }
  };
  const getPropertyType = async () => {
    try {
      await PropertyTypeApi.getAll().then(res => {
        setProType(res.data)
      })
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAllData();
    getPropertyType();
  }, []);

  

  const filterHandle = () => {
    HouseApi.getHousByFilter(input, type, price, property)
      .then(response => {
        setHouse(response.data) 
        console.log(response.data)       
      })
      .catch(e => {
        console.log(e);
      });
  };

  const searchHandler = (e) => {
    e.preventDefault();
    navigate('search/' + input)
    alert("gotta submit");
  }


  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const classes = searchStyled();
  return (
    <div id='buy' className={classes.root}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 0, sm: 0.5, md: 1 }}

      >
        <form onSubmit={searchHandler}>
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Location…"
              inputProps={{ 'aria-label': 'search' }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
             
              type="text"
            />
          </Search>
        </form>

        <FormControl sx={{ m: 1, minWidth: 150 }} >
          <Input id="type">Type</Input>
          <Selected
            labelId="type"
            id="typeSelect"
            value={type}
            onChange={handleChangeType}
           
            autoWidth
            label="Type"
          >
            <MenuItem value={'all'}>
              <em>All</em>
            </MenuItem>
            <MenuItem value={'buy'}>
              Buy
            </MenuItem>
            <MenuItem value={'rent'}>
              Rent
            </MenuItem>

          </Selected>
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 150 }} >
          <Input id="demo-simple-select-autowidth-label">Price</Input>
          <Selected
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={price}
            onChange={e => setPrice(e.target.value)}
           
            autoWidth
          >          
            <MenuItem value={'1'}>Low-High</MenuItem>
            <MenuItem value={'0'}>High-Low</MenuItem>

          </Selected>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 150 }} >
          <Input id="demo-simple-select-autowidth-label">Property</Input>
          <Selected
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={property}
            onChange={e => setProperty(e.target.value)}
          
            autoWidth
          >
            <MenuItem value='0'>
              <em>All</em>
            </MenuItem>
            {proType.map((ptype) => (
              <MenuItem key={ptype.propertyTypeID} value={ptype.propertyTypeID}>{ptype.name}</MenuItem>
            ))}
          </Selected>
        </FormControl>

        <FormControl sx={{ m: 0, minWidth: 150 }} >
          <Scroll to="houseList" smooth={true}>
            <ButtonSearch onClick={filterHandle}>Find</ButtonSearch>
          </Scroll>
        </FormControl>
      </Stack>

      <HouseList listHouse={houses} />
    </div>
  )
}


