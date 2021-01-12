import styled from 'styled-components';

const StyledRow = styled.div.attrs({ className: 'row-border flex justify-between py-3 md:p-3 font-medium text-xs sm:text-sm md:text-base' })`
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

const Pad = ({ pad }) => (
  <section>
    <StyledSectionHeader>Pad <span className="hl"></span></StyledSectionHeader>
    <div className="flex-table">
      <StyledRow>
        <span className="label">Name</span>
        <span>{pad.name}</span>
      </StyledRow>
      <StyledRow className="row-border-btm">
        <span className="label">Location</span>
        <span>{pad.location.name}</span>
      </StyledRow>
    </div>
  </section>
)

export default Pad;