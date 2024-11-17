import { extendTheme } from "@chakra-ui/react";
import "@fontsource/pacifico";
import "@fontsource-variable/inter";

const themeValue = extendTheme({
  fonts: {
    heading: `'Pacifico', sans-serif`,
    body: `'Inter Variable', sans-serif;`,
    p: `'Inter Variable', sans-serif;`,
  },
});

export default themeValue;
