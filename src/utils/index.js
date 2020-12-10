import { DateTime } from "luxon";

export const getTime = (launchDateTime) => {
  const start = DateTime.local();
  const end = launchDateTime;

  const { milliseconds } = DateTime.fromISO(end).diff(start).toObject();

  const time = {
    countingDown: Math.sign(milliseconds) === 1 ? true : false,
    value: DateTime.fromMillis(Math.abs(milliseconds)).toFormat('hh:mm:ss')
  };

  return time;
}