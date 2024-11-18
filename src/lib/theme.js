import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
        50: "#f0e4ff",
        100: "#cbb2ff",
        200: "#a480ff",
        300: "#7a4dff",
        400: "#641bfe",
        500: "#5a01e5",
        600: "#5200b3",
        700: "#430081",
        800: "#2d004f",
        900: "#14001f",
    },
  },
});

export default theme;