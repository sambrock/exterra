import styled from 'styled-components';
import { DateTime } from 'luxon';

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

const Rocket = ({ rocket }) => (
  <StyledMissionSection>
    <h2>Rocket <span className="hl"></span></h2>
    <div className="content">
      <div className="flex-table">
        <div className="tr">
          <div className="th"> Name </div> <div className="td"> {rocket.configuration.full_name} </div>
        </div>
        <div className="tr">
          <div className="th"> Family </div> <div className="td"> {rocket.configuration.family} </div>
        </div>
        <div className="tr">
          <div className="th"> Maiden flight </div> <div className="td"> {rocket.configuration.maiden_flight ? DateTime.fromISO(rocket.configuration.maiden_flight).toFormat('DD') : 'Yet to fly'} </div>
        </div>
        <div className="tr">
          <div className="th"> Stages </div> <div className="td"> {rocket.configuration.max_stage} </div>
        </div>
        <div className="tr">
          <div className="th"> Length </div> <div className="td"> {rocket.configuration.length} <span className="unit">m</span></div>
        </div>
        <div className="tr">
          <div className="th"> Diameter </div> <div className="td"> {rocket.configuration.diameter} <span className="unit">m</span></div>
        </div>
        <div className="tr">
          <div className="th"> Launch mass </div> <div className="td"> {(rocket.configuration.launch_mass * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span className="unit">kg</span></div>
        </div>
        <div className="tr">
          <div className="th"> Payload to LEO </div> <div className="td"> { rocket.configuration.leo_capacity ? (rocket.configuration.leo_capacity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '-'} <span className="unit">kg</span></div>
        </div>
        <div className="tr">
          <div className="th"> Payload to GTO </div> <div className="td"> {rocket.configuration.gto_capacity ? (rocket.configuration.gto_capacity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '-'} <span className="unit">kg</span></div>
        </div>
        <div className="tr">
          <div className="th"> Thrust </div> <div className="td"> {rocket.configuration.thrust ? (rocket.configuration.to_thrust).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '-'} <span className="unit">kN</span></div>
        </div>
      </div>
    </div>
  </StyledMissionSection>
)

export default Rocket;