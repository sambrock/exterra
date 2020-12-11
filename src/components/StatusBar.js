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
      /* padding: 0 12px; */

      span {
        margin-right: 12px;
        text-shadow: 0 0 3px ${props => props.theme.statusColors[props.statusId]};
      }
    }

    .hl {
      grid-column: span 2;
      height: 2px;
      margin: 3px 0 12px;
      width: 100%;
      background: ${props => props.theme.statusColors[props.statusId]};
      box-shadow: 0 0 3px ${props => props.theme.statusColors[props.statusId]};
      text-shadow: 0 0 3px ${props => props.theme.statusColors[props.statusId]};
    }

    .status {
      ${props => props.theme.mixins.status}
      box-shadow: 0 0 3px ${props => props.theme.statusColors[props.statusId]};
      text-shadow: 0 0 3px ${props => props.theme.statusColors[props.statusId]};
      color: ${props => props.theme.statusColors[props.statusId]};
      border: 1px solid ${props => props.theme.statusColors[props.statusId]};
  }
`;

const StatusBar = ({agency, mission, status}) => (
  <StyledStatusBar statusId={status.id}>
    <div className="tags">
      <div>
        <span>{agency.type}</span>
        <span>{mission ? mission.type : null}</span>
        <span>{mission && mission.orbit ? mission.orbit.name : null}</span>
      </div>
      <div className="status">{status.abbrev}</div>
    </div>
    <div className="hl"></div>
  </StyledStatusBar>
);

export default StatusBar;
