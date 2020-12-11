import { useEffect, useState } from 'react';
import styled from "styled-components";

import { getTime } from '../utils';

const StyledTime = styled.div`
    ${props => props.theme.mixins.time}

    span {
      color: var(--white-opacity);
      margin-right: 6px;
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

  return (
    <StyledTime>
      <span>{time.countingDown ? 'T-' : 'T+'} </span>
      <time>{time.value}</time>
    </StyledTime>
  )
}

export default Time;