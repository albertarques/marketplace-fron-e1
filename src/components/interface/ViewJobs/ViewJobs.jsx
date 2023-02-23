import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios';
import { json } from 'react-router-dom';
function ViewJobs() {
  
  const url = 'https://visualside-back-production.up.railway.app/api/jobs';

  
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch(
      "https://visualside-back-production.up.railway.app/api/jobs"
    );
    const data = await response.json();
    const [item] = data.results;
    setData(item);
    }
  return (
    <div className="app">
      <h1>question generate </h1>
      <button onClick={fetchData}>new question</button>

      {data &&
        data.map((job) => {
          return (
            <div className="queations">
              <p>{job.title}</p>
              <p>{job.description}</p>
              
              
            </div>
          );
        })}
    </div>
  )
}

export default ViewJobs;