import styled from 'styled-components';

const StyledDataDiv = styled.div.attrs({ className: 'text-base sm:text-xl font-semibold' })`
  .label {
    ${props => props.theme.mixins.label}
    display: block;
    margin-top: 6px;
  }
`;

const StyledSectionHeader = styled.h2`
  ${props => props.theme.mixins.sectionH2}
  margin: 24px 0 0; // override mixin
`;

const Mission = ({ mission }) => (
  <section>
    <StyledSectionHeader>Mission <span className="hl"></span></StyledSectionHeader>
    <div className="flex justify-between px-6 py-12">
      <StyledDataDiv>{mission.name}<span className="label">Name</span></StyledDataDiv>
      <StyledDataDiv>{mission.type}<span className="label">Type</span></StyledDataDiv>
      {mission.orbit && mission.orbit.name && (
        <StyledDataDiv>{mission.orbit.name}<span className="label">Orbit</span></StyledDataDiv>
      )}
    </div>
  </section>
)

export default Mission;