import { Fragment } from 'react';
import styled from 'styled-components';

const StyledTagsDiv = styled.div`
  ${props => props.theme.mixins.tag}
  color: ${props => props.theme.statusColors[props.statusId]};
`;

const StyledStatusDiv = styled.div`
  ${props => props.theme.mixins.status}
  color: ${props => props.theme.statusColors[props.statusId]};
  border: 1px solid ${props => props.theme.statusColors[props.statusId]};
  transition: var(--transition);
  box-shadow: ${props => props.hover ? `0 0 3px ${props.theme.statusColors[props.statusId]}` : 'none'};
`;

const StyledHL = styled.div.attrs({ className: 'w-full' })`
  height: 2px;
  background: ${props => props.theme.statusColors[props.statusId]};
  transition: var(--transition);
  box-shadow: ${props => props.hover ? `0 0 3px ${props.theme.statusColors[props.statusId]}` : 'none'};
`;

export const Status = ({ status }) => (
  <StyledStatusDiv statusId={status.id}>{status.abbrev}</StyledStatusDiv>
)

const StatusBar = ({ agency, mission, status }) => (
  <div>
    <div className="flex justify-between items-end mb-2">
      <StyledTagsDiv statusId={status.id} className="whitespace-nowrap overflow-hidden mr-6">
        {agency.type && (
          <span className="hidden sm:inline-block mr-3 sm:mr-6">{agency.type}</span>
        )}
        {mission && (
          <span className="mr-3 sm:mr-6">{mission.type}</span>
        )}
        {(mission && mission.orbit) && (
          <Fragment><span className="hidden sm:inline-block mr-6">{mission.orbit.name}</span><span className="inline-block sm:hidden mr-3">{mission.orbit.abbrev}</span></Fragment>
        )}
      </StyledTagsDiv>
      <Status status={status} />
    </div>
    <StyledHL statusId={status.id}></StyledHL>
  </div>
);

export default StatusBar;
