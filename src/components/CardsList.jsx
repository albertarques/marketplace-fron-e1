import React, {useContext} from 'react'

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Container } from "@mui/system";

import {DataContext} from '../context/DataContext'

function CardsList() {

  const { data } = useContext(DataContext);

  if(data){
    return (
        <Container fixed>
          <Grid container spacing={2}>
            {console.log(data.jobs)}
            {data.jobs.map((product) => (
              <Card grid key={product.id} sx={{ maxWidth: 345 }}>
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
    )
  } else {
    return (    
      <Container>
        <h2>No data is available</h2>
      </Container>
    ) 
  }
}

export default CardsList