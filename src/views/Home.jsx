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
import { Container } from "@mui/system";

import { JobsContext } from "../context/JobsContext";


function Home() {
  const { jobs } = useContext(JobsContext);

  return (
    <>
      <Navbar />
      <Container fixed>
        <Grid container spacing={2}>
          {jobs.products.map((product) => (
            <Card key={product.key} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
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
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Home