import styled from 'styled-components';
import getCountryISO2 from 'country-iso-3-to-2';

import { ProgressBar } from '..';

const StyledDataDiv = styled.div.attrs({ className: 'text-base sm:text-xl font-semibold' })`
  .label {
    ${props => props.theme.mixins.label}
    display: block;
  }
`;

const StyledSectionHeader = styled.h2`
  ${props => props.theme.mixins.sectionH2}
`;

const Mission = ({ agency }) => {
  const launchData = {
    success: agency.successful_launches * (100 / agency.total_launch_count),
    fail: agency.failed_launches * (100 / agency.total_launch_count)
  }

  const landingData = {
    success: agency.successful_landings * (100 / (agency.successful_landings + agency.failed_landings)),
    fail: agency.failed_landings * (100 / (agency.successful_landings + agency.failed_landings))
  }

  return (
    <section>
      <div className="flex justify-between items-center">
        <StyledSectionHeader>Agency <span className="hl"></span></StyledSectionHeader>
        {agency.logo_url && (
          <img className="h-4 sm:h-6" src={agency.logo_url} alt={`${agency.name} logo`} />
        )}
      </div>
      <div className="grid grid-cols-2 gap-6 sm:flex sm:justify-between items-center px-2 sm:px-6 py-3 sm:py-6">
        <img className="h-12" src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${getCountryISO2(agency.country_code)}.svg`} alt={`${agency.country_code} flag`} />
        <StyledDataDiv>{agency.name} <span className="label label text-base mt-1">Name</span></StyledDataDiv>
        <StyledDataDiv>{agency.type ? agency.type : '-'} <span className="label label text-base mt-1">Type</span></StyledDataDiv>
      </div>
      <p className="text-opacity text-sm my-3 px-2 sm:px-6">{agency.description}</p>
      <div className="grid grid-cols-2 my-12 px-2 sm:px-6">
        {agency.total_launch_count !== 0 && (
          <div className="mr-4">
            <h3 className="text-sm">Launches</h3>
            <ProgressBar data={launchData} />
          </div>
        )}
        {agency.attempted_landings !== 0 && (
          <div className="ml-4">
            <h3 className="text-sm">Landings</h3>
            <ProgressBar data={landingData} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Mission;