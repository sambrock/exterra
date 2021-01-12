import styled from 'styled-components';
import getCountryISO2 from 'country-iso-3-to-2';

import ProgressBar from '../ProgressBar';

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
    <section>
      <div className="flex justify-between items-center">
        <StyledSectionHeader>Agency <span className="hl"></span></StyledSectionHeader>
        {agency.logo_url && (
          <img className="h-6" src={agency.logo_url} alt={`${agency.name} logo`} />
        )}
      </div>
      <div className="flex justify-between items-center px-6 py-12">
        <img className="h-12" src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${getCountryISO2(agency.country_code)}.svg`} alt={`${agency.country_code} flag`} />
        <StyledDataDiv>{agency.name} <span className="label">Name</span></StyledDataDiv>
        <StyledDataDiv>{agency.type ? agency.type : '-'} <span className="label">Type</span></StyledDataDiv>
      </div>
      <p className="text-opacity text-sm my-6">{agency.description}</p>
      <div className="grid grid-cols-2">
        {agency.total_launch_count !== 0 && (
          <div>
            <h3>Launches</h3>
            <ProgressBar data={launchData} />
          </div>
        )}
        {agency.attempted_landings !== 0 && (
          <div>
            <h3>Landings</h3>
            <ProgressBar data={landingData} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Mission;