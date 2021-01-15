import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenuDiv = styled.div`
  .link-border {
    border-top: 1px var(--dark-blue-2) solid;

    &:last-child {
      border-bottom: 1px var(--dark-blue-2) solid;
    }
  }
`;

export default function Menu({active, setActive}) {  
  return (
    <nav>
      <div className="hidden md:block">
        <Link to={'/upcoming'} className="text-sm font-medium p-6">Upcoming</Link>
        <Link to={'/previous'} className="text-sm font-medium p-6">Previous</Link>
        <Link to={'/rockets'} className="text-sm font-medium p-6 pr-0">Rockets</Link>
      </div>
      <div>
        <button className="flex items-center" onClick={() => setActive(!active)}><i className="material-icons text-xxl sm:text-heading md:hidden">{!active ? 'menu' : 'close'}</i></button>
        <StyledMenuDiv isActive={active} className={`absolute left-0 right-0 bg-dark-blue flex flex-col mt-4 md:hidden ${!active ? 'hidden' : ''}`}>
          <Link to={'/upcoming'} className="link-border font-medium p-3 text-base" onClick={() => setActive(false)}>Upcoming</Link>
          <Link to={'/previous'} className="link-border font-medium p-3 text-base" onClick={() => setActive(false)}>Previous</Link>
          <Link to={'/rockets'} className="link-border font-medium p-3 text-base" onClick={() => setActive(false)}>Rockets</Link>
        </StyledMenuDiv>
      </div>
    </nav>
  )
}
