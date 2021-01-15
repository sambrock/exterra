import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

import { getCountdown } from '../utils';

const Time = ({ launchTime }) => {
  const [time, setTime] = useState('');

  const launch = DateTime.fromISO(launchTime);
  const { hours } = DateTime.fromISO(launchTime).diff(DateTime.local(), ['hours']).toObject();

  useEffect(() => {
    Math.abs(hours) < 24 ? setTime(getCountdown(launchTime)) : setTime(launch.toFormat('DD'));
  }, []);

  useEffect(() => {
    if (Math.abs(hours) > 24) return;

    const interval = setInterval(() => {
      setTime(getCountdown(launchTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  if (!time) return <div></div>;

  return (
    <div className="whitespace-nowrap font-semibold">
      <span className="text-opacity mr-2">{Math.sign(hours) === 1 ? 'T-' : 'T+'}</span><time>{time}</time>
    </div>
  )
}

export default Time;