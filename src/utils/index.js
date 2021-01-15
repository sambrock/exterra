import { DateTime } from 'luxon';
import { groupBy } from 'lodash';

export const getCountdown = (launchDateTime) => {
  const { milliseconds } = DateTime.fromISO(launchDateTime).diff(DateTime.local(), ['days', 'milliseconds']).toObject();
  const value = DateTime.fromMillis(Math.abs(milliseconds)).toFormat('TT')

  return value;
}

export const groupByLocation = (launchArr) => {
  const withLaunchSite = launchArr.map(launch => {
    return { ...launch, launchSite: Math.abs(parseInt(launch.pad.latitude) + parseInt(launch.pad.longitude)) }
  });

  const launchesGrouped = groupBy(withLaunchSite, 'launchSite');

  const single = [];
  const multiple = [];

  Object.values(launchesGrouped).map(launch => launch.length === 1 ? single.push(launch[0]) : multiple.push(launch));

  return [[...single], multiple];
}