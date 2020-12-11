import styled from 'styled-components';
import LaunchItem from './LaunchItem';

const StyledLaunchListContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 1;
  white-space: nowrap;
  max-height: calc(100% - 80px);
  overflow-y: scroll;
`;

const LaunchList = ({ launches }) => (
  <StyledLaunchListContainer>
    {launches.map(launch => (
      <LaunchItem launch={launch} />
    ))}
  </StyledLaunchListContainer>
)

export default LaunchList;