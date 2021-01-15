import { DateTime } from "luxon";
import _ from 'lodash';

export const getCountdown = (launchDateTime) => {
  const { milliseconds } = DateTime.fromISO(launchDateTime).diff(DateTime.local(), ['days', 'milliseconds']).toObject();
  const value = DateTime.fromMillis(Math.abs(milliseconds)).toFormat('TT')

  return value;
}

export const groupByLocation = (launchArr) => {
  const withLaunchSite = launchArr.map(launch => {
    return { ...launch, launchSite: Math.abs(parseInt(launch.pad.latitude) + parseInt(launch.pad.longitude)) }
  });

  const launchesGrouped = _.groupBy(withLaunchSite, 'launchSite');

  const single = [];
  const multiple = [];

  Object.values(launchesGrouped).map(launch => {
    if (launch.length === 1) {
      single.push(launch[0]);
    } else {
      multiple.push(launch)
    }
  })

  return [[...single], multiple];
}