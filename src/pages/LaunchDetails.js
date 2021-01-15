import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { getLaunchById } from '../api';
import { StatusBar, Mission, Agency, Time, Rocket, Pad } from '../components';

const StyledImgContainer = styled.div`
  ${props => props.theme.mixins.imgContainer}
  height: 500px;
`;

export default function LaunchDetails({ match }) {
  const [launch, setLaunch] = useState('');

  useEffect(() => {
    getLaunchById(match.params.id)
      .then(data => setLaunch(data));
  }, [match]);

  if (!launch) return <div></div>;

  return (
    <main>
      <Helmet title={launch.name}/>
      <StatusBar agency={launch.launch_service_provider} mission={launch.mission} status={launch.status} />
      <div className="flex flex-col sm:flex-row sm:justify-between mt-4 sm:mt-6 mb-2">
        <h1>{launch.name}</h1>
        <div className="h-auto text-xl order-1 mb-4 sm:mb-0 sm:ml-auto"><Time launchTime={launch.net} /></div>
      </div>
      <div className="flex text-opacity text-xs sm:text-sm">
        <span className="mr-6">{launch.launch_service_provider.name.length < 25 ? launch.launch_service_provider.name : launch.launch_service_provider.abbrev}</span>
        <span>{launch.pad.location.name}</span>
      </div>
      {launch.mission && (
        <p className="mt-6 mb-12" dangerouslySetInnerHTML={{ __html: launch.mission.description.replace(/(?:\r\n|\r|\n)/g, '<br>') }}></p>
      )}
      {launch.image && (
        <StyledImgContainer className="my-12">
          <img src={launch.image} alt={launch.name} />
        </StyledImgContainer>
      )}
      {launch.mission ? <Mission mission={launch.mission} /> : null}
      <Agency agency={launch.launch_service_provider} />
      <Rocket rocket={launch.rocket} />
      <Pad pad={launch.pad} />
    </main>
  )
}
