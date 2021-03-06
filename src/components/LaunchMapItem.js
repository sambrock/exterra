import { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-router-dom';

import { StatusBar, Time } from '.';

const StyledContainerDiv = styled(animated.div)`
  width: 350px;
  flex-shrink: 0;

  @media(max-width: 480px) {
    width: calc(100vw - 80px);
  }

  &.active {
    width: 500px;

    @media(max-width: 480px) {
      width: calc(100vw - 60px);
    }
  }
`;

export default function LaunchMapItem({ launch, isActive, setActive, setCenterMap }) {
  const [expanded, setExpanded] = useState(false);
  const [hover, setHover] = useState(false);

  const containerProps = useSpring({ paddingBottom: hover && !isActive ? '12px' : '0px' });

  const handleClick = () => {
    setActive();
    if (!isActive) setCenterMap([launch.pad.longitude, launch.pad.latitude]);
  }

  return (
    <StyledContainerDiv
      className={`flex flex-col cursor-pointer mr-8 sm:mr-16 select-none ${isActive ? 'active' : 'inactive'}`}
      style={containerProps}
      onClick={() => handleClick()}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <StatusBar agency={launch.launch_service_provider} mission={launch.mission} status={launch.status} />
      <div className={`flex justify-between mb-1 font-semibold select-none ${isActive ? 'mt-3' : 'mt-2'}`}>
        <Link to={isActive ? `/launch/${launch.id}` : ''}>
          <div className={`${isActive ? 'text-md sm:text-xl' : 'text-md'}`}>{isActive ? launch.name : launch.rocket.configuration.full_name}</div>
        </Link>
        <div className={`pl-6 ${isActive ? 'text-xs sm:text-base' : 'text-xs sm:text-md'}`}><Time launchTime={launch.net} /></div>
      </div>
      <div className={`text-opacity text-sm ${!isActive ? 'hidden' : ''}`}>
        <span className="mr-4">{launch.launch_service_provider.name}</span>
        <span>{launch.pad.location.name}</span>
      </div>
      {launch.mission && (
        <p className={`text-opacity overflow-hidden hidden sm:block  ${isActive ? 'mt-4 h-auto' : 'h-0'}`}>
          {expanded ? launch.mission.description : launch.mission.description.length > 150 ? `${launch.mission.description.substring(0, 150)}... ` : launch.mission.description}
          {launch.mission.description.length > 150 ? <button className="ml-1" onClick={() => setExpanded(!expanded)}>{expanded ? 'Less' : 'More'}</button> : ''}
        </p>
      )}
    </StyledContainerDiv>
  )
}
