import { useContext } from 'react';
import styled from 'styled-components';
import getCountryISO2 from 'country-iso-3-to-2';
import AddCircle from '@material-ui/icons/AddCircle';

import { RocketCompareContext } from '../App';

const StyledRocketItem = styled.div`
  border-bottom: 1px var(--white-opacity-2) solid;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr;
  /* margin: 12px 0; */
  /* padding-bottom: 12px; */
  padding: 24px;

  &:first-child {
    border-top: 1px var(--white-opacity-2) solid;
  }

  .img-container {
    width: 100%;
    height: 150px;
    position: relative;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .name {
    font-weight: 600;
    font-size: var(--fz-xl);
    display: flex;
    align-items: center;

    img {
      height: .7rem;
      margin-right: 12px;
    }
  }

  .rocket-details {
    margin-top: 6px;
    color: var(--white-opacity);
    display: flex;

    span {
      margin-right: 24px;
    }
  }

  .add {
    grid-column: 2;
    grid-row: 1/span 2;
    ${props => props.theme.mixins.flexCenter};

    .material-icon {
      height: 35px;
      width: 35px;
      color: var(--white-opacity-2);
      background: none;
      cursor: pointer;
    }
  }
`;

export default function RocketItem({ rocket, addCompareId }) {
  return (
    <StyledRocketItem>
      <div className="name"><img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${getCountryISO2(rocket.manufacturer.country_code)}.svg`} alt="" />{rocket.name}</div>
      <div className="rocket-details">
        <span>{rocket.manufacturer.name}</span>
        <span>{rocket.manufacturer.type}</span>
      </div>
      <div className="add">
        <AddCircle className="material-icon" onClick={() => addCompareId(rocket.id)} />
      </div>
    </StyledRocketItem>
  )
}
