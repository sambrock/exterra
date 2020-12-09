import { createGlobalStyle } from 'styled-components';

import 'mapbox-gl/dist/mapbox-gl.css';

import Chakra from '../fonts/ChakraPetch-Regular.woff';
import ChakraSemiBold from '../fonts/ChakraPetch-SemiBold.woff';
import ChakraBold from '../fonts/ChakraPetch-Bold.woff';

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Chakra';
    src: url(${Chakra}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Chakra';
    src: url(${ChakraSemiBold}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Chakra';
    src: url(${ChakraBold}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

  :root {
    --black: #010300;
    --white: #FFFFFF;
    --orange: #E8A300;
    --red: #FF0602;
    --blue: #01FFD8;
    --dark-blue: #030917;
    --white-opacity: rgba(255,255,255,.65);
    --font-sans: 'Chakra', sans-serif;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --easing: cubic-bezier(0.43, 0.13, 0.23, 0.96);
    --transition: all 0.25s cubic-bezier(0.43, 0.13, 0.23, 0.96);
  }
  html {
    box-sizing: border-box;
    width: 100%;
    scrollbar-width: none;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  ::selection {
    background: var(--red);
    color: var(--white);
  }
  ::-webkit-scrollbar {
    display: none;
  }
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: var(--white);
    font-family: var(--font-sans);
    font-size: var(--fz-md);
    line-height: 1.3;
    
    @media(max-width: 480px) {
      font-size: var(--fz-lg);
    }
    &.hidden {
      overflow: hidden;
    }
    
  }
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  #map {
  }

  p {
    margin: 0;
    padding: 0;
    width: 100%;
    word-break: break-all;
    white-space: normal;
  }

  .title {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    font-weight: 600;
  }

  .sub-title {
    font-size: clamp(.7rem, 2.5vw, .9rem);
    font-weight: 400;
  }

  // Override mapbox font-faily
  .mapboxgl-map {
    font-family: inherit !important;
  }
`;