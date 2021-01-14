import { useEffect, useState } from 'react';

import { getTime } from '../utils';

const Time = ({ launchTime }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime(launchTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [setTime, launchTime])

  if(!time) return <></>

  return (
    <div className="whitespace-nowrap	">
      <span className="text-opacity mr-1">{time.countingDown ? 'T-' : 'T+'} </span>
      <time className="font-semibold">{time.days === 0 ? time.value : Math.abs(time.days)}</time>
      {time.days !== 0 && (
        <span className="ml-1 text-opacity text-xs">{time.days !== 1 ? 'DAYS' : 'DAY'}</span>
      )}
    </div>
  )
}

export default Time;