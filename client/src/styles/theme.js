import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './button/button';
import { headingTheme } from './heading/heading';
import { linkTheme } from './link/link';

// import { ButtonStyles as Button } from './button/buttonStyles';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors: {
    gray: {
      border: '#D0D5DD', // Border
      50: '#F6F6F6', // Hover bg
      200: '#667085', // Secondary text
      400: '#101828', // Main text
    },
    green: {
      soft: '#ECFDF3',
      softActive: '#CDFAE0',
      main: '#027A48',
      hover: '#015934',
      active: '#013721',
    },
    orange: {
      main: '#F89B29',
      softBg: '#FFF5E9',
    },
    red: {
      main: '#D62828',
    },
    rosa: {
      main: '#FF0F7B',
      softBg: '#FFF1F7',
    },
    negro: {
      main: '#000000',
      softBg: '#E9E9E9',
    },
    azul: {
      main: '#3A86FF',
      softBg: '#E5EFFF',
    },
  },
  components: {
    Heading: headingTheme,
    Button: buttonTheme,
    Link: linkTheme,
  },
});
