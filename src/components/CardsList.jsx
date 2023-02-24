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
import { Link } from 'react-router-dom';
import JobCard from './interface/cards/Cards'

import {Box} from '@mui/system';

function CardsList() {

  const { data } = useContext(DataContext);

  if(data){
    return (
          <Box sx={{ margin:4, display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Grid container spacing={4}>
              {console.log(data.jobs)}
              {data.jobs.map((job) => (
                <Card grid key={job.id} sx={{ maxWidth: 345, margin:2 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://picsum.photos/200/300"
                    title={job.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {job.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {job.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/job/${job.id}`}>
                      <Button size="small">Ver detalle</Button>
                    </Link>
                  </CardActions>
                </Card>
              ))}
            </Grid>
          </Box>
    )
  } else {
    return (    
      <Container>
        <h2>Cargando...</h2>
      </Container>
    ) 
  }
}

export default CardsList