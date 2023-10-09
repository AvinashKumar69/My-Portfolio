import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Home from "./pages/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <Home />
    </Box>
  </ChakraProvider>
);
