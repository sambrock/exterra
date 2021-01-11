import styled from 'styled-components';
import axios from 'axios';

import apiData from '../apidataid.json';

import Mission from '../components/sections/Mission';
import Agency from '../components/sections/Agency';
import StatusBar from '../components/StatusBar';
import Time from '../components/Time';
import Rocket from '../components/sections/Rocket';
import Pad from '../components/sections/Pad';
import { useEffect, useState } from 'react';
import { getLaunchById } from '../api';
import { api } from '../config';

const StyledPageContainer = styled.div`
  ${props => props.theme.mixins.pageContainer}

  .header {
    margin: 24px 12px 6px;
    display: flex;
    justify-content: space-between;

    h1 {
      max-width: 80%;
    }

    .launch-time {
      font-size: 1.4em;
    }
  }

  .launch-details {
    margin: 0 12px 48px;
    color: var(--white-opacity);
    display: flex;

    span {
      margin-right: 24px;
    }
  }
  
  .launch-description {
    width: 80%;
    margin: 0 12px 48px;
  }

  .launch-image {
    margin: 0 12px 96px;
    height: 400px;
    overflow: hidden;
    background: var(--dark-blue-2);
    display: flex;
    /* width: 100%; */
    position: relative;
    justify-content: center;

    img{
      height: 100%;
      object-fit: contain;
      width: auto;
    }
  }
`;

export default function LaunchDetails({ match }) {
  const [launch, setLaunch] = useState('');

  useEffect(() => {
    getLaunchById(match.params.id)
      .then(data => setLaunch(data))

    // setLaunch(apiData);
  }, []);

  if (!launch) return <div></div>;

  return (
    <StyledPageContainer>
      <StatusBar agency={launch.launch_service_provider} mission={launch.mission} status={launch.status} />
      <div className="header">
        <h1>{launch.name}</h1>
        <div className="launch-time"><Time launchTime={launch.net} /></div>
      </div>
      <div className="launch-details">
        <span>{launch.launch_service_provider.name}</span>
        <span>{launch.pad.location.name}</span>
      </div>
      {launch.mission && (
        <div className="launch-description">
          <p dangerouslySetInnerHTML={{ __html: launch.mission.description.replace(/(?:\r\n|\r|\n)/g, '<br>') }}></p>
        </div>
      )}
      <div className="launch-image">
        <img src={launch.image} alt={launch.name} />
      </div>
      {launch.mission ? <Mission mission={launch.mission} /> : null}
      <Agency agency={launch.launch_service_provider} />
      <Rocket rocket={launch.rocket} />
      <Pad pad={launch.pad} />
    </StyledPageContainer>
  )
}
