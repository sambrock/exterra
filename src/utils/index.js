import { DateTime } from "luxon";
import _ from 'lodash';

export const getTime = (launchDateTime) => {
  const start = DateTime.local();
  const end = launchDateTime;

  const { days, milliseconds } = DateTime.fromISO(end).diff(start, ['days', 'milliseconds']).toObject();

  const time = {
    countingDown: Math.sign(milliseconds) === 1 ? true : false,
    days: days,
    value: DateTime.fromMillis(Math.abs(milliseconds)).toFormat('hh:mm:ss'),
  };

  return time;
}

export const groupByLocation = (launchArr) => {
  const withLaunchSite = launchArr.map(launch => {
    return { ...launch, launchSite: Math.abs(parseInt(launch.pad.latitude) + parseInt(launch.pad.longitude)) }
  });

  const launchesGrouped = _.groupBy(withLaunchSite, 'launchSite');

  const single = [];
  const multiple = [];

  Object.values(launchesGrouped).map(launch => {
    if(launch.length === 1) {
      single.push(launch[0]);
    } else {
      multiple.push(launch)
    }
  })

  return [[...single], multiple];
}