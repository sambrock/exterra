import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useDrag, } from 'react-use-gesture';
import { clamp } from 'lodash';

import LaunchMapItem from './LaunchMapItem';

const StyledLaunchListDiv = styled(animated.div)`
  touch-action: pan-x;
  cursor: grab;

  &.dragging {
    cursor: grabbing;
  }

  @media(max-width: 480px) {
    bottom: 2rem;
    left: 1rem;
  }
`;

const LaunchMapList = ({ launches, setCenterMap }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragging, setDragging] = useState(false);

  const container = useRef();

  const [{ x }, set] = useSpring(() => ({ x: [0, 0] }));

  const handleDrag = (state) => {
    setDragging(true);

    const offsetX = clamp(state.offset[0], -container.current.offsetWidth, 0 );

    const launchElPositions = [];
    container.current.childNodes.forEach(el => launchElPositions.push(el.offsetLeft));

    const closest = launchElPositions.reduce((a, b) => {
      return Math.abs(b - Math.abs(offsetX)) < Math.abs(a - Math.abs(offsetX)) ? b : a;
    });

    set({ x: [-closest, 0] });
  };

  const bind = useDrag(state => handleDrag(state), { bounds: { left: container.current ? -container.current.offsetWidth : 0, right: 0 }, lockdirection: true, axis: 'x' });

  return (
    <StyledLaunchListDiv
      {...bind()}
      ref={container}
      className={`fixed flex items-end z-10 w-screen overflow-hidden bottom-8 left-4 sm:bottom-12 sm:left-0 ${dragging ? 'dragging' : ''}`}
      onMouseUp={() => setDragging(false)}
    >
      {launches.map((launch, index) => (
        <animated.div style={{ transform: x.interpolate(value => `translate3d(${value}px, 0px, 0px)`) }} key={launch.id}>
          <LaunchMapItem launch={launch} isActive={index === activeIndex} setActive={() => setActiveIndex(index)} setCenterMap={setCenterMap} />
        </animated.div>
      ))}
      <div className="bg-opacity h-2 w-2 border"></div>
    </StyledLaunchListDiv>
  )
}

export default LaunchMapList;