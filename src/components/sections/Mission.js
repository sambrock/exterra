import styled from 'styled-components';

const StyledDataDiv = styled.div.attrs({ className: 'text-base sm:text-xl font-semibold' })`
  .label {
    ${props => props.theme.mixins.label}
    display: block;
  }
`;

const StyledSectionHeader = styled.h2`
  ${props => props.theme.mixins.sectionH2}
`;

const Mission = ({ mission }) => (
  <section>
    <StyledSectionHeader>Mission <span className="hl"></span></StyledSectionHeader>
    <div className="grid grid-cols-2 gap-6 sm:flex sm:justify-around px-2 sm:px-6 py-3 sm:py-6">
      <StyledDataDiv>{mission.name}<span className="label text-base mt-1">Name</span></StyledDataDiv>
      <StyledDataDiv>{mission.type}<span className="label label text-base mt-1">Type</span></StyledDataDiv>
      {mission.orbit && mission.orbit.name && (
        <StyledDataDiv>{mission.orbit.name}<span className="label label text-base mt-1">Orbit</span></StyledDataDiv>
      )}
    </div>
  </section>
)

export default Mission;