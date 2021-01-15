import styled from 'styled-components';

const StyledRow = styled.div.attrs({ className: 'row-border flex justify-between py-3 px-2 sm:px-6 font-medium text-sm md:text-base' })`
  ${props => props.theme.mixins.row}

  .label {  
    ${props => props.theme.mixins.label}
    grid-column: 2;
    grid-row: 1;
  }
`;

const StyledSectionHeader = styled.h2`
  ${props => props.theme.mixins.sectionH2}
`;

const Rocket = ({ rocket }) => (
  <section>
    <StyledSectionHeader>Rocket <span className="hl"></span></StyledSectionHeader>
    <StyledRow>
      <span className="label">Name</span>
      <span>{rocket.configuration.full_name}</span>
    </StyledRow>
    <StyledRow>
      <span className="label">Family</span>
      <span>{rocket.configuration.family}</span>
    </StyledRow>
    <StyledRow>
      <span className="label">Stages</span>
      <span>{rocket.configuration.max_stage}</span>
    </StyledRow>
    <StyledRow>
      <span className="label">Length</span>
      <span>{rocket.configuration.length}<span className="unit">m</span></span>
    </StyledRow>
    <StyledRow>
      <span className="label">Diameter</span>
      <span>{rocket.configuration.diameter}<span className="unit">m</span></span>
    </StyledRow>
    <StyledRow>
      <span className="label">Launch mass</span>
      <span>{(rocket.configuration.launch_mass * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span className="unit">kg</span></span>
    </StyledRow>
    <StyledRow>
      <span className="label">Payload to LEO</span>
      <span>{rocket.configuration.leo_capacity ? (rocket.configuration.leo_capacity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '-'}<span className="unit">kg</span></span>
    </StyledRow>
    <StyledRow>
      <span className="label">Payload to GTO</span>
      <span>{rocket.configuration.gto_capacity ? (rocket.configuration.gto_capacity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '-'}<span className="unit">kg</span></span>
    </StyledRow>
    <StyledRow>
      <span className="label">Thrust</span>
      <span>{rocket.configuration.thrust ? (rocket.configuration.to_thrust).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '-'}<span className="unit">kg</span></span>
    </StyledRow>
  </section>
)

export default Rocket;