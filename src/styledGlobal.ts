import { createGlobalStyle } from 'styled-components';
import PoppinsBlack from './theme/fonts/Poppins-Black.ttf';
import PoppinsBlackItalic from './theme/fonts/Poppins-BlackItalic.ttf';
import PoppinsBold from './theme/fonts/Poppins-Bold.ttf';
import PoppinsBoldItalic from './theme/fonts/Poppins-BoldItalic.ttf';
import PoppinsExtraBold from './theme/fonts/Poppins-ExtraBold.ttf';
import PoppinsExtraBoldItalic from './theme/fonts/Poppins-ExtraBoldItalic.ttf';
import PoppinsExtraLight from './theme/fonts/Poppins-ExtraLight.ttf';
import PoppinsExtraLightItalic from './theme/fonts/Poppins-ExtraLightItalic.ttf';
import PoppinsItalic from './theme/fonts/Poppins-Italic.ttf';
import PoppinsLight from './theme/fonts/Poppins-Light.ttf';
import PoppinsLightItalic from './theme/fonts/Poppins-LightItalic.ttf';
import PoppinsMedium from './theme/fonts/Poppins-Medium.ttf';
import PoppinsMediumItalic from './theme/fonts/Poppins-MediumItalic.ttf';
import PoppinsRegular from './theme/fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from './theme/fonts/Poppins-SemiBold.ttf';
import PoppinsSemiBoldItalic from './theme/fonts/Poppins-SemiBoldItalic.ttf';
import PoppinsThin from './theme/fonts/Poppins-Thin.ttf';
import PoppinsThinItalic from './theme/fonts/Poppins-ThinItalic.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBlackItalic}) format('truetype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBoldItalic}) format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsExtraBold}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsExtraBoldItalic}) format('truetype');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsExtraLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsExtraLightItalic}) format('truetype');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsLightItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsMediumItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsSemiBoldItalic}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsThinItalic}) format('truetype');
    font-weight: 100;
    font-style: italic;
  }

  * {
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    letter-spacing: 0;
    color: #414145;
  }
  
  html, body {
    position: relative;
    height: 100dvh;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;
