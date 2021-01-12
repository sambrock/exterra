import { useEffect, useState } from 'react';
import styled from 'styled-components';

import apiData from '../apidataid.json';

import Mission from '../components/sections/Mission';
import Agency from '../components/sections/Agency';
import StatusBar from '../components/StatusBar';
import Time from '../components/Time';
import Rocket from '../components/sections/Rocket';
import Pad from '../components/sections/Pad';
import { getLaunchById } from '../api';
import { api } from '../config';

const StyledPageContainer = styled.div`
  ${props => props.theme.mixins.pageContainer}
`;

const StyledImgContainer = styled.div`
  ${props => props.theme.mixins.imgContainer}
  height: 500px;
`;

export default function LaunchDetails({ match }) {
  const [launch, setLaunch] = useState('');

  useEffect(() => {
    getLaunchById(match.params.id)
      .then(data => setLaunch(data))
  }, []);

  if (!launch) return <div></div>;

  return (
    <main>
      <StatusBar agency={launch.launch_service_provider} mission={launch.mission} status={launch.status} />
      <div className="mt-6 mb-2 flex justify-between">
        <h1>{launch.name}</h1>
        <div className="text-xl"><Time launchTime={launch.net} /></div>
      </div>
      <div className="flex text-opacity">
        <span className="mr-6">{launch.launch_service_provider.name}</span>
        <span>{launch.pad.location.name}</span>
      </div>
      {launch.mission && (
        <div className="my-6">
          <p dangerouslySetInnerHTML={{ __html: launch.mission.description.replace(/(?:\r\n|\r|\n)/g, '<br>') }}></p>
        </div>
      )}
      <StyledImgContainer>
        <img src={launch.image} alt={launch.name} />
      </StyledImgContainer>
      {launch.mission ? <Mission mission={launch.mission} /> : null}
      <Agency agency={launch.launch_service_provider} />
      <Rocket rocket={launch.rocket} />
      <Pad pad={launch.pad} />
    </main>
  )
}
