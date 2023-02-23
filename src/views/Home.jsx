import React, {useState, useEffect, useContext} from 'react'

import Navbar from '../components/interface/navbar/Navbar'
import Footer from '../components/interface/footer/Footer'
import CardsList from '../components/CardsList'

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import Box from "@mui/material/Card";
import { Container } from "@mui/system";

import data from '../data/products.json'

function Home() {

  return (
    <>
      <Navbar />
        <CardsList />
      <Footer />
    </>
  )
}

export default Home