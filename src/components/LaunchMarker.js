import React from 'react';
import styled from 'styled-components';
import CountdownClock from './CountdownClock';
import getCountryISO2 from 'country-iso-3-to-2';

const StyledMarkerContainer = styled.div`
  color: var(--white-opacity);
  font-size: 11px;
  display: flex;
  flex-direction: column;

  .launch-title {
    font-weight: 600;
    color: var(--white);
    font-size: 14px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    span:nth-child(2) {
      margin-left: 12px;
    }
  }

  .launch-status {
    background: var(--orange);
    color: var(--dark-blue);
    font-weight: 700;
    padding: 0 3px;
    text-transform: uppercase;
  }

img {
  height: .7rem;
  margin-right: 3px;
}
`;

export default function LaunchMarker({ launch }) {
  return (
    <StyledMarkerContainer>
      <div>

        <span className="launch-title">{launch.name}</span>
      </div>
      <div>
        <span>{launch.launch_service_provider.name}</span>
      </div>
      <div>
        <span style={{width: '100%'}}>T- <CountdownClock launchDateTime={launch.net} /></span>
        <div>
          <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${getCountryISO2(launch.pad.location.country_code)}.svg`} alt="" />
          <span className="launch-status">{launch.status.abbrev}</span>
        </div>
      </div>
    </StyledMarkerContainer>
  )
}
