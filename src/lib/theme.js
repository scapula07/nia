import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
      100: "#E2E8F0",
      200: "#CBD5E0",
      300: "#A0AEC0",
      // Add more shades as needed
    },
  },
});

export default theme;
