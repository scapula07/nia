import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark", // 'dark' | 'light'
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
      100: "#F1A7A7",
      200: "#EC8383",
      300: "#E66060",
      400: "#E13D3D",
      500: "#C71F1F",
      600: "#B01C1C",
      700: "#8D1616",
      800: "#6A1111",
      900: "#460B0B",
    },
    secondary: {
      100: "#EEECEC",
    },
    secondaryDark: {
      100: "#141414",
    },
    blue: {
      200: "#aaaaaa",
    },
    gray: {
      300: "#aaaaaa",
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "primary",
      },
    },
    Text: {
      baseStyle: {
        color: "gray.800",
      },
    },
    Link: {
      baseStyle: {
        color: "primary.500",
      },
    },
  },
});

export default theme;