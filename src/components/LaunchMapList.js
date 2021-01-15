import { useState } from 'react';
import styled from 'styled-components';

import LaunchMapItem from './LaunchMapItem';

const StyledLaunchListDiv = styled.div`
  touch-action: pan-x;

  @media(max-width: 480px) {
    bottom: 2rem;
    left: 1rem;
  }
`;

const LaunchMapList = ({ launches, setCenterMap }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <StyledLaunchListDiv className="fixed flex items-end z-10 w-screen overflow-x-scroll bottom-0 pb-4 sm:pb-8 left-4 sm:bottom-2">
      {launches.map((launch, index) => (
        <div className="touch-div" key={launch.id}>
          <LaunchMapItem launch={launch} isActive={index === activeIndex} setActive={() => setActiveIndex(index)} setCenterMap={setCenterMap} />
        </div>
      ))}
    </StyledLaunchListDiv>
  )
}

export default LaunchMapList;