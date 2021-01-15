import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useDrag, } from 'react-use-gesture';
import { clamp } from 'lodash';

import LaunchMapItem from './LaunchMapItem';

const StyledLaunchListDiv = styled(animated.div)`
  touch-action: none;

  @media(max-width: 480px) {
    bottom: 2rem;
    left: 1rem;
  }
`;

const LaunchMapList = ({ launches, setCenterMap }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const container = useRef();

  const [{ x }, set] = useSpring(() => ({ x: [0, 0] }));

  const handleDrag = ({offset}) => {
    const offsetX = clamp(offset[0], 0, container.offsetWidth);

    const launchElPositions = [];
    container.current.childNodes.forEach(el => launchElPositions.push(el.offsetLeft));

    const closest = launchElPositions.reduce((a, b) => {
      return Math.abs(b - Math.abs(offsetX)) < Math.abs(a - Math.abs(offsetX)) ? b : a;
    });

    set({ x: [-closest, 0] });
  };

  const bind = useDrag(state => handleDrag(state), { drag: { bounds: { left: -4000, right: 0 } } });

  return (
    <StyledLaunchListDiv {...bind()} ref={container} className="absolute flex items-end z-10 w-screen overflow-hidden bottom-8 left-4 sm:bottom-12 sm:left-0">
      {launches.map((launch, index) => (
        <animated.div style={{ transform: x.interpolate(value => `translate3d(${value}px, 0px, 0px)`) }} key={launch.id}>
          <LaunchMapItem launch={launch} isActive={index === activeIndex} setActive={() => setActiveIndex(index)} setCenterMap={setCenterMap} />
        </animated.div>
      ))}
    </StyledLaunchListDiv>
  )
}

export default LaunchMapList;