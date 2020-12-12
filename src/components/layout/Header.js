import React from 'react';
import styled from 'styled-components';

import Logo from '../../images/logo.svg';

const StyledHeader = styled.header`
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 9999;

  .logo {
    width: 10em;
    position: fixed;
    svg {
      filter: contrast(100%);
      z-index: 9999;
      path {
        fill: var(--white);
      }
    }
  }
  @media(max-width: 480px) {
    margin: 25px 0 0 0;
    .logo {
      width: 3rem;
      position: fixed;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="logo"><a href="/"><img src={Logo} alt="Logo" /></a></div>
  </StyledHeader>
)

export default Header;