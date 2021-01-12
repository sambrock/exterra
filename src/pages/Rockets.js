import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getRockets } from '../api';
import RocketItem from '../components/RocketItem';

const StyledPageContainer = styled.div`
  ${props => props.theme.mixins.pageContainer}
`;

export default function Rockets(props) {
  const [rockets, setRockets] = useState('');
  const [compare, setCompare] = useState('');

  console.log(compare);

  useEffect(() => {
    getRockets()
      .then(data => setRockets(data.results))
  }, []);

  const handleAddCompareId = (id) => {
    if(compare.length > 1) return console.error('Compare full.');

    return setCompare([...compare, id]);
  }


  if (!rockets) return <div></div>;

  return (
    <StyledPageContainer>
      <h1>Rockets</h1>
      <Link to={`/rockets/compare/${compare[0]}-vs-${compare[1]}`}>Compare!!</Link>
      <div>
        {rockets.map(rocket => <RocketItem rocket={rocket} addCompareId={handleAddCompareId} />)}
      </div>
    </StyledPageContainer>
  )
}
