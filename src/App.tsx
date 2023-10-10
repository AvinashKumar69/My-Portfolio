import { ChakraProvider, theme } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./pages/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
    <Home />
  </ChakraProvider>
);
