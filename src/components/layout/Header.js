import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from '..';
import Logo from '../../images/logo.svg';


const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={`fixed w-screen items-center flex justify-between top-0 px-4 py-6 md:p-12 z-10 ${active ? 'bg-dark-blue' : ''}`}>
      <div className="w-28 sm:w-40"><Link to="/"><img src={Logo} alt="Logo" /></Link></div>
      <Menu active={active} setActive={setActive}/>
    </header>
  )
}

export default Header;