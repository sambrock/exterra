import { useState } from 'react';
import styled from 'styled-components';
import getCountryISO2 from 'country-iso-3-to-2';

const StyledRocketItemDiv = styled.div`
  border-top: 1px var(--dark-blue-2) solid;

  &:last-child {
    border-bottom: 1px var(--dark-blue-2) solid;
  }
`;

export default function RocketItem({ rocket, setCompare, locked }) {
  const [added, setAdded] = useState(false);

  const handleAddClick = () => {
    setCompare(arr => [...arr, rocket.id]);
    setAdded(true);
  }

  const handleRemoveClick = () => {
    setCompare(arr => arr.splice(arr.indexOf(rocket.id), 1));
    setAdded(false);
  }

  return (
    <StyledRocketItemDiv className="flex justify-between items-center py-4">
      <div>
        <div className="flex items-center"><img className="h-3 sm:h-5 mr-2 sm:mr-4" src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${getCountryISO2(rocket.manufacturer.country_code)}.svg`} alt="" />
          <div className="text-xxl font-semibold">{rocket.name}</div>
        </div>
        <div className="mt-2 text-sm text-opacity">
          <span className="mr-4">{rocket.manufacturer.name}</span>
          <span>{rocket.manufacturer.type}</span>
        </div>
      </div>
      {!added ?
        <button className={`flex items-center text-sm text-opacity ml-3 sm:ml-0 ${locked ? 'hidden' : ''}`} onClick={() => handleAddClick()}><i className="material-icons sm:mr-2">add</i><span className="hidden sm:block">Add to compare</span></button> :
        <button className="flex items-center text-sm text-opacity ml-3 sm:ml-0" onClick={() => handleRemoveClick()}><i className="material-icons sm:mr-2">close</i><span className="hidden sm:block">Remove</span></button>
      }
    </StyledRocketItemDiv>
  )
}
