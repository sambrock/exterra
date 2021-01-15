import { createGlobalStyle } from 'styled-components';

import 'mapbox-gl/dist/mapbox-gl.css';

import Chakra from '../fonts/ChakraPetch-Regular.woff';
import ChakraSemiBold from '../fonts/ChakraPetch-SemiBold.woff';
import ChakraBold from '../fonts/ChakraPetch-Bold.woff';

const GlobalStyle = createGlobalStyle`
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
    --red: #DB2544;
    --green: #31FF87;
    --blue: #01FFD8;
    --grey: #909090;
    --dark-blue: #030917;
    --dark-blue-2: #0B1A29;
    --white-opacity: rgba(255,255,255,.65);
    --white-opacity-2: rgba(255,255,255,.30);
    --font-sans: 'Chakra', sans-serif;
    --fz-xxs: 10px;
    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 34px;
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
    background: var(--orange);
    color: var(--white);
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--white-opacity-2);
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
    background: var(--dark-blue);
    
    @media(max-width: 480px) {
      font-size: var(--fz-lg);
    }
    &.hidden {
      overflow: hidden;
    }
  }

  main {
    max-width: 768px;
    padding: 115px 0;
    margin: 0 auto;

    @media(max-width: 768px) {
      padding: 64px 15px;
    }
  }

  p {
    font-size: var(--fz-md);
    margin: 0;
    padding: 0;
    white-space: normal;
    word-wrap: break-word;
    line-height: 1.4em;
  }

  h1, h2, h3 {
    margin: 0;
    padding: 0;
    font-weight: 600;
  }

  h1 {
    font-size: clamp(2rem, 4vw, 2.5rem);
    /* font-size: var(--fz-heading); */
    letter-spacing: .8px;
  }

  h2 {
    font-size: clamp(1rem, 2.5vw, 1rem);
    text-transform: uppercase;
    letter-spacing: 1.6px;
    text-transform: uppercase;
  }

  h3 {
    font-size: clamp(1rem, 2.5vw, 1rem);
    text-transform: uppercase;
    letter-spacing: 1.6px;
    color: var(--white-opacity);
  }

  a {
    color: var(--white);
    text-transform: none;
    text-decoration: none;

    &:focus {
      outline: none;
      border: none;
    }
  }

  button {
    background: none;
    border: none;
    color: var(--white);
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    margin: 0;
    padding: 0;
    
    &:focus {
      border-radius: none;
      outline: 1px dotted var(--white-opacity-2);
    }
  }

  .mapboxgl-map {
    font-family: inherit; // Override mapbox font
  }

  .mapboxgl-ctrl-bottom-left, .mapboxgl-ctrl.mapboxgl-ctrl-attrib {
    display: none;  // hide mapbox links
  }
`;

export default GlobalStyle;