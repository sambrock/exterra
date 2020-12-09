import React from 'react'
import styled from 'styled-components';
import CountdownClock from './CountdownClock';

const StyledLaunchItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-template-rows: repeat(5, auto);
  margin: 0 0 32px;
  max-width: 100%;

  div {
    margin: 0 0 6px;
    display: flex;
    align-items: center;
    padding: 0 12px;
  }

  .launch-info {
    grid-row: 1;
    grid-column: span 2;
    font-size: .6em;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--blue);

    span {
      margin-right: 12px;
    }
  }

  .hr {
    grid-column: span 2;
    grid-row: 2;
    height: 3px;
    margin: 3px 0 12px;
    width: 100%;
    background: var(--blue);
  }

  .launch-name {
    grid-column: 1;
    grid-row: 4;
  }

  .launch-status {
    grid-column: 2;
    grid-row: 3;
    font-weight: 500;
  }
  
  .launch-details {
    color: var(--white-opacity);
    
    span {
      margin-right: 12px;
      text-overflow: ellipsis;
      /* max-width: 100px; */
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .launch-description {
    grid-column: 1;
    grid-row: 5;
    max-width: 450px;
  }

`;

export default function LaunchItem({ launch }) {
  return (
    <StyledLaunchItemContainer>
      <div className="launch-info">
        <span>{launch.launch_service_provider.type}</span>
        <span>{launch.mission ? launch.mission.type : null}</span>
        <span>{launch.mission && launch.mission.orbit ? launch.mission.orbit.name : null}</span>
      </div>
      <div className="hr"></div>
      <div className="launcn-name title">{launch.name}</div>
      <div className="launcn-status"> <span>T- <CountdownClock launchDateTime={launch.net} /></span></div>
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
