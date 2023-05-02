'use client';

import { useState } from 'react';
import { useInterval } from 'usehooks-ts';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

type LaunchTimerProps = {
  statusId: number | undefined | null;
  windowStart: string | undefined | null;
  windowEnd: string | undefined | null;
};

export const LaunchTimer = ({ statusId = 0, windowStart, windowEnd }: LaunchTimerProps) => {
  const [date, setDate] = useState(new Date(windowStart || windowEnd || ''));

  useInterval(() => {
    setDate(new Date(windowStart || windowEnd || ''));
  }, 1000);

  const countdown = () => {
    const now = new Date().getTime();
    const distance = date.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor(((distance % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((((distance % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) % (1000 * 60)) / 1000);

    let t = 'T+';

    if (days > 0) t = `T- ${days}d ${hours}h ${minutes}m ${seconds}s`;
    if (days === 0 && hours > 0) t = `T- ${hours}h ${minutes}m ${seconds}s`;
    if (days === 0 && hours === 0 && minutes > 0) t = `T- ${minutes}m ${seconds}s`;
    if (days === 0 && hours === 0 && minutes === 0 && seconds > 0) t = `T- ${minutes}m ${seconds}s`;

    return { days, hours, minutes, seconds, t };
  };

  if (statusId === 2 || statusId === 8) {
    return (
      <span className="text-xs font-medium text-white/50">
        Est. {date.getDate()} {MONTHS[date.getMonth()] || ''} {date.getFullYear()}
      </span>
    );
  }

  return (
    <span className="text-xs font-medium text-white/50" suppressHydrationWarning={true}>
      {countdown().t}
    </span>
  );
};
