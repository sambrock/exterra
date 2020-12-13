import { useEffect, useState } from 'react';
import styled from "styled-components";

import { getTime } from '../utils';

const StyledTime = styled.div`
    ${props => props.theme.mixins.time}

    span {
      color: var(--white-opacity);
      margin-right: 6px;
    }

    .days {
      margin-left: .5em;
      font-size: .8em;
    }

    .skelenton {
      background: var(--white-opacity);
      height: 10px;
      width: 40px;
      float: right;
    }
`;

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
    <StyledTime>
      <span>{time.countingDown ? 'T-' : 'T+'} </span>
      <time>{time.days === 0 ? time.value : Math.abs(time.days)}</time>
      {time.days !== 0 && (
        <span className="days">{time.days !== 1 ? 'DAYS' : 'DAY'}</span>
      )}
    </StyledTime>
  )
}

export default Time;