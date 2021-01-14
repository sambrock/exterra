import axios from 'axios';
import { DateTime } from 'luxon';

import { api } from '../config';

export const getUpcomingLaunches = async () => {
  let upcoming = JSON.parse(localStorage.getItem('upcoming'))

  if (!upcoming || DateTime.local().ts > upcoming.fetched) {
    try {
      const response = await axios.get(`${api.baseURL}/launch/upcoming`);

      response.data.fetched = DateTime.local().plus({ minutes: 15 }).ts;
      localStorage.setItem('upcoming', JSON.stringify(response.data));

      upcoming = response.data;
    } catch (err) {
      console.error(err)
    }
  }

  return upcoming;
}

export const getLaunchById = async (id) => {
  let rocket = JSON.parse(sessionStorage.getItem(`${id}`))

  if (!rocket || DateTime.local().ts > rocket.fetched) {
    try {
      const response = await axios.get(`${api.baseURL}/launch/${id}`);

      // console.log('API CALLED');
      response.data.fetched = DateTime.local().plus({ minutes: 1 }).ts;
      sessionStorage.setItem(`${response.data.id}`, JSON.stringify(response.data));

      rocket = response.data;
    } catch (err) {
      console.error(err)
    }
  }

  return rocket;
}

export const getRockets = async () => {
  try {
    const response = await axios.get(`${api.devURL}/config/launcher/`);
    return response.data;
  } catch (err) {
    console.error(err)
  }
}

export const getRocketById = async (id) => {
  try {
    const response = await axios.get(`${api.devURL}/config/launcher/${id}`);
    return response.data;
  } catch (err) {
    console.error(err)
  }
}