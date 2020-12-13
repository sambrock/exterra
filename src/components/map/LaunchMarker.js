import styled from 'styled-components';
import getCountryISO2 from 'country-iso-3-to-2';

import Time from '../Time';

const StyledMarkerContainer = styled.div`
  display: flex;

  .launch-flag {
    margin-right: 12px;
    img {
      height: .7rem;
      margin-right: 3px;
    }
  }
`;

const StyledLaunchDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white-opacity);
  
  .launch-name {
    ${props => props.theme.mixins.heading}
    font-size: var(--fz-sm);
  }

  .launch-time-status {
    display: flex;
    align-items: center;
    margin: 3px 0 0; 
    
    .launch-time {
      width: 88px;
    }

    .launch-status {
      ${props => props.theme.mixins.status}
      color: ${props => props.theme.statusColors[props.statusId]};
      border: 1px solid ${props => props.theme.statusColors[props.statusId]};
      box-shadow: 0 0 3px ${props => props.theme.statusColors[props.statusId]};
      text-shadow: 0 0 3px ${props => props.theme.statusColors[props.statusId]};
    }
  }
`;

export default function LaunchMarker({ launch }) {
  // Fix country code issue
  if (launch.pad.location.country_code === 'UNK') launch.pad.location.country_code = 'USA';

  return (
    <StyledMarkerContainer className="launch-marker">
      <div className="launch-flag">
        <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${getCountryISO2(launch.pad.location.country_code)}.svg`} alt="" />
      </div>
      <StyledLaunchDetailsContainer statusId={launch.status.id}>
        <span className="launch-name">{launch.name}</span>
        <span className="launch-service">{launch.launch_service_provider.name}</span>
        <div className="launch-time-status">
          <div className="launch-time"><Time launchTime={launch.net} /></div>
          <div className="launch-status">{launch.status.abbrev}</div>
        </div>
      </StyledLaunchDetailsContainer>
    </StyledMarkerContainer>
  )
}