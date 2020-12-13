import { useState } from 'react';
import styled from 'styled-components';

import StatusBar from './StatusBar';
import Time from './Time';

const StyledLaunchItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px;
  color: var(--white-opacity);
  cursor: pointer;
  transition: var(--transition);

  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
    margin: 0 0 6px;
  }

  .launch-name {
    /* ${props => props.theme.mixins.heading} */
    font-weight: 600;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
  }

  .launch-time {
    width: 100px;
    text-align: right;
  }
  
  .launch-details {
    color: var(--white-opacity);
    padding: 0 12px;
    margin: 0 0 12px;
    font-size: var(--fz-xs);
    
    span {
      margin-right: 12px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .launch-description {
    grid-column: 1;
    width: 400px;
    padding: 0 12px;
    margin: 0 0 12px;
  }
`;

export default function LaunchItem({ launch }) {
  const [expanded, setExpanded] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <StyledLaunchItemContainer statusId={launch.status.id} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <StatusBar agency={launch.launch_service_provider} mission={launch.mission} status={launch.status} hover={hover} />
      <a href={`/launch/${launch.id}`}>
        <div className="header">
          <div className="launch-name title">{launch.name}</div>
          <div>
            <div className="launch-time"><Time launchTime={launch.net} /></div>
          </div>
        </div>
      </a>
      <div className="launch-details sub-title">
        <span>{launch.launch_service_provider.name.substring(0, 26)}</span>
        <span>{launch.pad.location.name.substring(0, 20)}</span>
      </div>
      <div className="launch-description">
        {launch.mission && (
          <p>
            {expanded ? launch.mission.description : launch.mission.description.length > 150 ? `${launch.mission.description.substring(0, 150)}... ` : launch.mission.description}
            {launch.mission.description.length > 150 ? <button onClick={() => setExpanded(!expanded)}>{expanded ? 'Less' : 'More'}</button> : ''}
          </p>
        )}
      </div>
    </StyledLaunchItemContainer>
  )
}
