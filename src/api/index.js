import axios from 'axios';

import { api } from '../config';

// const delay = interval => new Promise(resolve => setTimeout(resolve, interval));

// export const getLaunchById = async (id) => {
//   await delay(500); // Delay request due to API rate limits

//   try {
//     // const response = await axios.get(`https://swapi.dev/api/people/1/`);
//     const response = await axios.get(`${api.baseURL}/${id}`);
//     return response.data;
//   } catch (err) {
//     console.error(err)
//   }
// }

export const getLaunchById = async (id) => {
  // await delay(500); // Delay request due to API rate limits

  try {
    // const response = await axios.get(`https://swapi.dev/api/people/1/`);
    const response = await axios.get(`${api.baseURL}/launch/${id}`);
    return response.data;
  } catch (err) {
    console.error(err)
  }
}