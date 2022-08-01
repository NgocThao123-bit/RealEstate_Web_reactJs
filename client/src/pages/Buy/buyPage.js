import React, { useEffect, useState } from 'react';
import { SearchAppBar } from '../../components/search';
import Header from '../../components/header/Header';
import { useStyles } from './styled';
import { CssBaseline } from '@material-ui/core';
import HouseApi from '../../api/houseApi';
import {  useParams } from 'react-router-dom';

export const BuyPage = () => {
  const classes = useStyles();
  let params = useParams();
 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header className={classes.head}></Header>
      <SearchAppBar  typeHouse={params.type}/>
    </div>
  )
}
