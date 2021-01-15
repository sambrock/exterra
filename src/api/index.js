import axios from 'axios';
import { DateTime } from 'luxon';

import { api } from '../config';

export const getUpcomingLaunches = async () => {
  let upcoming = JSON.parse(localStorage.getItem('upcoming'));

  if (!upcoming || DateTime.local().ts > upcoming.fetched) {
    try {
      const response = await axios.get(`${api.baseURL}/launch/upcoming/?limit=10`);

      response.data.fetched = DateTime.local().plus({ hours: 1 }).ts;
      localStorage.setItem('upcoming', JSON.stringify(response.data));

      upcoming = response.data;
    } catch (err) {
      console.error(err);
    }
  }

  return upcoming;
}

export const getPreviousLaunches = async (offset) => {
  const url = `/launch/previous/?limit=50&offset=${offset}`;
  let previous = JSON.parse(localStorage.getItem(url));

  if (!previous || DateTime.local().ts > previous.fetched) {
    try {
      const response = await axios.get(api.devURL + url);

      response.data.fetched = DateTime.local().plus({ hours: 1 }).ts;
      localStorage.setItem(url, JSON.stringify(response.data));

      previous = response.data;
    } catch (err) {
      console.error(err);
    }
  }

  return previous;
}

export const getLaunchById = async (id) => {
  const url = `/launch/${id}`;
  let rocket = JSON.parse(localStorage.getItem(url));

  if (!rocket || DateTime.local().ts > rocket.fetched) {
    try {
      const response = await axios.get(api.baseURL + url);

      response.data.fetched = DateTime.local().plus({ hours: 1 }).ts;
      localStorage.setItem(url, JSON.stringify(response.data));

      rocket = response.data;
    } catch (err) {
      console.error(err);
    }
  }

  return rocket;
}

export const getRockets = async (offset) => {
  try {
    const response = await axios.get(`${api.devURL}/config/launcher/?limit=50&offset=${offset}`);
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

export const getAgencies = async (id) => {
  try {
    const response = await axios.get(`${api.devURL}/agencies/?limit=100&featured=true`);
    return response.data;
  } catch (err) {
    console.error(err)
  }
}