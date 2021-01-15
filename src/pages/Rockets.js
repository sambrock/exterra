import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { getRockets } from '../api';
import { RocketItem } from '../components';

const StyledLinkDiv = styled.div`
  border: 1px dotted var(--white-opacity-2);
`;

export default function Rockets() {
  const [rockets, setRockets] = useState([]);
  const [offset, setOffset] = useState(0);
  const [compare, setCompare] = useState([]);

  const loader = useRef(null);

  useEffect(() => {
    getRockets(offset)
      .then(data => setRockets(r => [...r, ...data.results]))
  }, [offset]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { root: null, rootMargin: "20px", threshold: 1.0 });
    
    if (loader.current) {
      observer.observe(loader.current)
    }
  }, []);
  
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setOffset((offset) => offset + 50)
    }
  }

  if (!rockets) return <div></div>;

  return (
    <main>
      <Helmet title='Rockets' />
      <div className="flex flex-grow-0 justify-between items-center mb-8">
        <h1>Rockets</h1>
        {compare.length > 1 && (
          <StyledLinkDiv>
            <Link to={`/rockets/compare/${compare[0]}-vs-${compare[1]}`} className="flex items-center font-semibold ml-2">Compare<i className="material-icons mt-1">navigate_next</i></Link>
          </StyledLinkDiv>
        )}
      </div>
      <div>
        {rockets.map(rocket => <RocketItem key={rocket.id} rocket={rocket} setCompare={setCompare} locked={compare.length > 1} />)}
      </div>
      <div className="loading" ref={loader}>Loading...</div>
    </main>
  )
}
