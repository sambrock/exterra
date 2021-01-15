import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DateTime } from 'luxon';
import { Helmet } from 'react-helmet';


import { getRocketById } from '../api';

const StyledRow = styled.div.attrs({ className: 'row-border py-3 md:p-3 font-medium text-xs sm:text-sm md:text-base' })`
  ${props => props.theme.mixins.row}
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  *:nth-child(1) {
      text-align: left;
  }

  *:nth-child(2) {
    text-align: right;
  }

  .label {  
    ${props => props.theme.mixins.label}
    grid-column: 2;
    grid-row: 1;
  }
`;

const StyledImgContainer = styled.div`
  ${props => props.theme.mixins.imgContainer}
  height: 540px;
  
  @media(max-width: 480px) {
    height: 384px;
  }
`;

const StyledSectionHeader = styled.h2`
  ${props => props.theme.mixins.sectionH2}
`;

export default function RocketCompare({ match }) {
  const [rocketA, setRocketA] = useState({});
  const [rocketB, setRocketB] = useState({});
  const [compareIds, setCompareIds] = useState([]);

  const rockets = [rocketA, rocketB];

  useEffect(() => {
    setCompareIds(match.params.compare.split('-vs-').map(num => parseInt(num)));
  }, [match])

  useEffect(() => {
    if(compareIds.length < 1) return;
    getRocketById(compareIds[0])
      .then(data => setRocketA(data));

    getRocketById(compareIds[1])
      .then(data => setRocketB(data));
  }, [compareIds]);

  if (!rocketA && !rocketB) return <div></div>;

  return (
    <main>
      <Helmet title={`${rocketA.name} vs ${rocketB.name}`} />
      <div className="grid grid-cols-2 gap-4 sm:gap-12">
        {rockets.map(rocket => <StyledImgContainer>{rocket.image_url ? <img src={rocket.image_url} alt={rocket.name} /> : <i className="m-auto material-icons text-opacity-2 text-heading">image_not_supported</i>}</StyledImgContainer>)}
      </div>
      <div className="grid grid-cols-2 gap-12 py-6">
        {rockets.map(rocket => <div className="text-center font-bold text-xxl sm:text-heading">{rocket.name}</div>)}
      </div>
      <section>
        <StyledSectionHeader>Details <span className="hl"></span></StyledSectionHeader>
        <StyledRow>
          {rockets.map(rocket => <span>{rocket.full_name}</span>)}
          <div className="label">Full Name</div>
        </StyledRow>
        <StyledRow>
          {rockets.map(rocket => <span>{rocket.family}</span>)}
          <div className="label">Family</div>
        </StyledRow>
        <StyledRow>
          {rockets.map(rocket => <span>{rocket.variant}</span>)}
          <div className="label">Variant</div>
        </StyledRow>
        <StyledRow>
          {rockets.map(rocket => <span>{rocket.manufacturer ? rocket.manufacturer.name : ''}</span>)}
          <div className="label">Manufacturer</div>
        </StyledRow>
        <StyledRow className="row-border-btm">
          {rockets.map(rocket => <span>{DateTime.fromISO(rocket.maiden_flight).toLocaleString(DateTime.DATE_MED)}</span>)}
          <div className="label">Maiden flight</div>
        </StyledRow>
      </section>
      <section>
        <StyledSectionHeader>Specification <span className="hl"></span></StyledSectionHeader>
        <StyledRow>
          {rockets.map(rocket => <span>{rocket.max_stage}</span>)}
          <div className="label">Stages</div>
        </StyledRow>
        <StyledRow>
          {rockets.map(rocket => <><span>{rocket.length}<span className="unit">m</span></span></>)}
          <div className="label">Length</div>
        </StyledRow>
        <StyledRow>
          {rockets.map(rocket => <span>{rocket.diameter}<span className="unit">m</span></span>)}
          <div className="label">Diameter</div>
        </StyledRow>
        <StyledRow>
          {rockets.map(rocket => <span>{(rocket.launch_mass * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<span className="unit">T</span></span>)}
          <div className="label">Launch Mass</div>
        </StyledRow>
        <StyledRow className="row-border-btm">
          {rockets.map(rocket => <span>{rocket.thrust ? (rocket.to_thrust).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '-'}<span className="unit">kN</span></span>)}
          <div className="label">Thrust</div>
        </StyledRow>
      </section>
      <section>
        <StyledSectionHeader>Payload Capacity <span className="hl"></span></StyledSectionHeader>
        <StyledRow>
          {rockets.map(rocket => <span>{rocket.gto_capacity ? (rocket.gto_capacity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '-'}<span className="unit">kg</span></span>)}
          <div className="label">GTO</div>
        </StyledRow>
        <StyledRow className="row-border-btm">
          {rockets.map(rocket => <span>{rocket.leo_capacity ? (rocket.leo_capacity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '-'}<span className="unit">kg</span></span>)}
          <div className="label">LEO</div>
        </StyledRow>
      </section>
      <section>
        <StyledSectionHeader>Launch Statistics <span className="hl"></span></StyledSectionHeader>
        <StyledRow>
          {rockets.map(rocket => <span>{rocket.successful_launches}</span>)}
          <div className="label">Success</div>
        </StyledRow>
        <StyledRow className="row-border-btm">
          {rockets.map(rocket => <span>{rocket.failed_launches}</span>)}
          <div className="label">Fail</div>
        </StyledRow>
      </section>
    </main>
  )
}
