import React, {useContext} from 'react'

import Navbar from '../components/interface/navbar/Navbar'
import Footer from '../components/interface/footer/Footer'

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
      <Box sx={{ margin:4, display: "flex", justifyContent: "center", alignItems: "center"}}>

        <Grid container spacing={2}>
          {data.products.map((product) => (

            <Card key={product.key} sx={{ maxWidth: 345, margin:2 }}>
              <CardMedia
                sx={{ width:300, height: 140, margin:2 }}
                image={product.thumbnail}
                title={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Ver detalle</Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
        </Box>
      <Footer />
    </>
  )
}

export default Home