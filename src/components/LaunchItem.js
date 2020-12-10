import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTime } from '../utils';

const StyledLaunchItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px;
  color: var(--white-opacity);

  .launch-tag {
    ${props => props.theme.mixins.tag}
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    grid-column: span 2;
    color: ${props => props.theme.statusColors[props.statusId]};
    margin: 0 0 6px;
    padding: 0 12px;

    span {
      margin-right: 12px;
      text-shadow: 0 0 3px ${props => props.theme.statusColors[props.statusId]};
    }
  }

  .hr {
    grid-column: span 2;
    height: 2px;
    margin: 3px 0 12px;
    width: 100%;
    background: ${props => props.theme.statusColors[props.statusId]};
    box-shadow: 0 0 3px ${props => props.theme.statusColors[props.statusId]};
    text-shadow: 0 0 3px ${props => props.theme.statusColors[props.statusId]};
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
    margin: 0 0 6px;
  }

  .launch-name {
    ${props => props.theme.mixins.heading}
    font-size: clamp(1rem, 2.5vw, 1.2rem);
  }

  .launch-status {
    ${props => props.theme.mixins.status}
    box-shadow: 0 0 3px ${props => props.theme.statusColors[props.statusId]};
    text-shadow: 0 0 3px ${props => props.theme.statusColors[props.statusId]};
    color: ${props => props.theme.statusColors[props.statusId]};
    border: 1px solid ${props => props.theme.statusColors[props.statusId]};
  }

  .launch-time {
    ${props => props.theme.mixins.time}
    text-align: right;
    width: 100px;

    span {
      color: var(--white-opacity);
      margin-right: 6px;
    }
  }
  
  .launch-details {
    color: var(--white-opacity);
    padding: 0 12px;
    margin: 0 0 12px;
    font-size: var(--fz-xs);
    
    span {
      margin-right: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .launch-description {
    grid-column: 1;
    width: 400px;
    padding: 0 12px;
    margin: 0 0 12px;
  }

`;

export default function LaunchItem({ launch }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime(launch.net));
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <StyledLaunchItemContainer statusId={launch.status.id}>
      <div className="launch-tag">
        <div>
          <span>{launch.launch_service_provider.type}</span>
          <span>{launch.mission ? launch.mission.type : null}</span>
          <span>{launch.mission && launch.mission.orbit ? launch.mission.orbit.name : null}</span>
        </div>
        <div className="launch-status">{launch.status.abbrev}</div>
      </div>
      <div className="hr"></div>
      <div className="header">
        <div className="launch-name title">{launch.name}</div>
        <div>
          <div className="launch-time"><span>{ time.countingDown ? 'T-' : 'T+'} </span>{time.value}</div>
        </div>
      </div>
      <div className="launch-details sub-title">
        <span>{launch.launch_service_provider.name.substring(0, 26)}</span>
        <span>{launch.pad.location.name.substring(0, 20)}</span>
      </div>
      <div className="launch-description">
        <p>{launch.mission ? launch.mission.description.substring(0, 150) : ''}</p>
      </div>
    </StyledLaunchItemContainer>
  )
}
