import styled from 'styled-components';

import LaunchMarker from './LaunchMarker';

const StyledMarkersContainer = styled.div`
  display: flex;
  flex-direction: column;

  .launch-marker {
    margin: 0 0 12px;
  }

  .launch-marker:last-child {
    margin: 0;
  }
`;

const LaunchMarkerMultple = ({ launches }) => (
  <StyledMarkersContainer>
    {launches.map(launch => (
      <LaunchMarker className="" launch={launch} />
    ))}
  </StyledMarkersContainer>
);

export default LaunchMarkerMultple;