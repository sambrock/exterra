import styled from 'styled-components';

const StyledMissionSection = styled.section`
  margin: 0 0 96px;

  h2 {
    ${props => props.theme.mixins.sectionH2}
  }

  .content {
    padding: 0 24px;
    margin: 32px 0;
    
    .flex-table {
      ${props => props.theme.mixins.flexTable}
    }
  }
`;

const Pad = ({ pad }) => (
  <StyledMissionSection>
    <h2>Pad <span className="hl"></span></h2>
    <div className="content">
      <div className="flex-table">
        <div className="tr">
          <div className="th"> Name </div> <div className="td"> {pad.name} </div>
        </div>
        <div className="tr">
          <div className="th"> Location </div> <div className="td"> {pad.location.name} </div>
        </div>
      </div>
    </div>
  </StyledMissionSection>
)

export default Pad;