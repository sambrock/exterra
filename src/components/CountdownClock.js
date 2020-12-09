import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react'

export default function CountdownClock({ launchDateTime }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const start = DateTime.local();
    const end = launchDateTime;

    const diff = DateTime.fromISO(end).diff(start).toFormat('hh:mm:ss');

    const interval = setInterval(() => {
      setTime(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, launchDateTime])

  if (!time) return <div></div>;

  console.log(time);

  return (
    <time>{time}</time>
  )
}
