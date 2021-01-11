import styled from "styled-components";

const StyledStatusBar = styled.div`
  .tags {
    ${props => props.theme.mixins.tag}
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    grid-column: span 2;
    color: ${props => props.theme.statusColors[props.statusId]};
    margin: 0 0 8px;
    padding: 0 12px;

    span {
      transition: var(--transition);
      margin-right: 24px;
      text-shadow: ${props => props.hover ?  `0 0 3px ${props.theme.statusColors[props.statusId]}` : 'none'};
    }
  }

  .hl {
    ${props => props.theme.mixins.hl}
    grid-column: span 2;
    height: 2px;
    margin: 3px 0 12px;
    width: 100%;
    background: ${props => props.theme.statusColors[props.statusId]};
    transition: var(--transition);
    box-shadow: ${props => props.hover ?  `0 0 3px ${props.theme.statusColors[props.statusId]}` : 'none'};
  }

  .status {
    ${props => props.theme.mixins.status}
    color: ${props => props.theme.statusColors[props.statusId]};
    border: 1px solid ${props => props.theme.statusColors[props.statusId]};
    transition: var(--transition);
    box-shadow: ${props => props.hover ?  `0 0 3px ${props.theme.statusColors[props.statusId]}` : 'none'};
  }
`;

const StatusBar = ({ agency, mission, status, hover }) => (
  <StyledStatusBar statusId={status.id} hover={hover}>
    <div className="tags">
      <div>
        {/* {agency.type && (
          <span>{agency.type}</span>
        )} */}
        {mission && (
          <span>{mission.type}</span>
        )}
        {(mission && mission.orbit) && (
          <span>{mission.orbit.name}</span>
        )}
      </div>
      <div className="status">{status.name}</div>
    </div>
    <div className="hl"></div>
  </StyledStatusBar>
);

export default StatusBar;
