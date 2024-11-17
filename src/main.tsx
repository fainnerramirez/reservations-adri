import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/pacifico/400.css";

const themeValue = extendTheme({
  fonts: {
    heading: `'Pacifico', sans-serif`,
    body: `'Inter Variable', sans-serif;`,
    p: `'Inter Variable', sans-serif;`,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={themeValue}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
