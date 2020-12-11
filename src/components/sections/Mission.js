import styled from 'styled-components';

const StyledMissionSection = styled.section`
  margin: 0 0 96px;

  h2 {
    ${props => props.theme.mixins.sectionH2}
  }

  .content {
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    margin: 32px 0;

    .data {
      font-size: var(--fz-xl);
      font-weight: 600;

      span {
        ${props => props.theme.mixins.label}
        margin: 6px 0 0;
        display: block;
      }
    }

  }
`;

const Mission = ({ mission }) => (
  <StyledMissionSection>
    <h2>Mission <span className="hl"></span></h2>
    <div className="content">
      <div className="data">{mission.name} <span >Name</span></div>
      <div className="data">{mission.type} <span>Type</span></div>
      {mission.orbit && mission.orbit.name && (
        <div className="data">{mission.orbit.name} <span>Orbit</span></div>
      )}
    </div>
  </StyledMissionSection>
)

export default Mission;