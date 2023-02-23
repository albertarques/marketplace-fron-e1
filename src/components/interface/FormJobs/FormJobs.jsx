import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";


const url = "http://127.0.0.1:8000/api/jobs";

function FormJobs() {
  const [form, setForm] = useState({});

  const requestOptions = {
    method: "POST",
    // application/json

    headers: { "Content-Type": "multipart/form-data" },
    body: JSON.stringify({
      title: form.title,
      picture: form.picture,
      description: form.description,
      location: form.location,
      salary: form.salary
    })
  };

  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [picture, set] = useState('');
  // const [poster, setPoster] = useState('');
  // const [level, setLevel] = useState('');
  // const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h1" component="h2">
          Create new course
        </Typography>
        <FormControl fullWidth sx={{ m: 1 }} >
          <Typography variant="h4" component="h2">
            {" "}
            TITLE{" "}
          </Typography>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={form.title}
            onChange={(e) => {setForm({
                title:e.target.value,
                picture: form.picture,
                description: form.description,
                location: form.location,
                salary: form.salary,
                
            });
            console.log(form.title);
            }}
            type="text"
          />

          <Typography variant="h4" component="h2">
            {" "}
            Picture{" "}
          </Typography>
          <TextField
            id="outlined-basic"
            label="Picture"
            variant="outlined"
            value={form.description}
            onChange={(e) => {setForm({
                title: form.title,
                picture: e.target.value,
                description: form.description,
                location: form.location,
                salary: form.salary,
                
            });
            }}
            type="text"
          />

          <Typography variant="h4" component="h2">
            {" "}
            Description{" "}
          </Typography>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={form.description}
            onChange={(e) => {setForm({
                title: form.title,
                picture: form.picture,
                description: e.target.value,
                location: form.location,
                salary: form.salary,
                
            });
            }}
            type="text"
          />
          <Typography variant="h4" component="h2">
            {" "}
            Level{" "}
          </Typography>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={form.location}
            onChange={(e) => {setForm({
                title: form.title,
                picture: form.picture,
                description: form.description,
                location: e.target.value,
                salary: form.salary,
            });
            }}
            type="text"
            className="form-control"
          />

          <Typography variant="h4" component="h2" for="poster">
            {" "}
            Location{" "}
          </Typography>
          <TextField
            id="outlined-basic"
            variant="Location"
            accept=""
            for="poster"
            value={form.location}
            onChange={(e) => {setForm({
                title: form.title,
                picture: form.picture,
                description: form.description,
                location: form.location,
                salary: e.target.value,
            });
            }}
            type="text"
          />
          <Button variant="outlined">
            <Link to="/coursesprotected">Cancel</Link>
          </Button>
          <Button type="submit" variant="contained" >
            SAVE
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}

export default FormJobs;
