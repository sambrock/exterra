import styled from 'styled-components';
import getCountryISO2 from 'country-iso-3-to-2';

import ProgressBar from '../ProgressBar';

const StyledMissionSection = styled.section`
  margin: 0 0 96px;

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

      h2 {
        ${props => props.theme.mixins.sectionH2}
        color: var(--white-opacity);
        margin: 0 12px 0 0;
      }
    .agency-logo {
      height: 2em;
    }
  }
  
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

    .launch-flag {
      img {
        height: 60px;
      }
    }
  }

  .description {
    color: var(--white-opacity);
    padding: 0 24px;
    margin: 0 0 48px;
  }

  .agency-data {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 24px;
    grid-gap: 24px;

    .progress-bar {
      /* background: var(--dark-blue-2); */
      grid-gap: 48px;
    }
  }
`;

const Mission = ({ agency }) => {
  const launchData = {
    success: agency.successful_launches * (100 / agency.total_launch_count),
    fail: agency.failed_launches * (100 / agency.total_launch_count)
  }

  const landingData = {
    success: agency.successful_landings * (100 / agency.attempted_landings),
    fail: agency.failed_landings * (100 / agency.attempted_landings)
  }

  return (
    <StyledMissionSection>
      <div className="section-header">
        <h2>Agency <span className="hl"></span></h2>
        {agency.logo_url && (
          <img className="agency-logo" src={agency.logo_url} alt={`${agency.name} logo`} />
        )}
      </div>
      <div className="content">
        <div className="launch-flag">
          <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${getCountryISO2(agency.country_code)}.svg`} alt={`${agency.country_code} flag`} />
        </div>
        <div className="data">{agency.name} <span>Name</span></div>
        <div className="data">{agency.type ? agency.type : '-'} <span>Type</span></div>
      </div>
      <div className="description">
        <p>{agency.description}</p>
      </div>
      <div className="agency-data">
      {agency.total_launch_count !== 0 && (
        <div className="progress-bar">
          <h3>Launches</h3>
          <ProgressBar data={launchData} />
        </div>
      )}
        {agency.attempted_landings !== 0 && (
          <div className="progress-bar">
            <h3>Landings</h3>
            <ProgressBar data={landingData} />
          </div>
        )}
      </div>
    </StyledMissionSection >
  )
}

export default Mission;