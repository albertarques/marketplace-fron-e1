import axios from 'axios';

const apiBase = 'https://visualside-back-production.up.railway.app/api/jobs';

const jobsService = {
  getAll(){
    return fetch(apiBase).then((res) => res.json()).then((data) => data)
      // try{
      // const response = await fetch(
      //   apiBase
      // );
      //   if (response.status === 200) {
      //     const data = await response.json();
      //     console.log(data)
      //     return data
      //   } else {
      //     alert("Hubo un problema de conexion.");
      //     console.log('Esto no va bien')
      //   }
      // } catch {
      //   alert("No pudimos hacer la solicitud.");
      //   console.log('Esto no va bien')
      // }
    // }
    // return axios.get(apiBase).then((res) => res.data)
  }
}

export default jobsService