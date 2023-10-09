import { Box, Divider, Stack } from "@chakra-ui/react";
import IntroContent from "../components/IntroContent";
import IntroImage from "../components/IntroImage";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <Box w="100%" minH={"100vh"} p={4} color="white" bg="#06051d">
      <Stack direction={["column", "row"]} minH={"100%"}>
        <IntroContent />
        <IntroImage />
      </Stack>
      <Skills />
      <Experience />
      <Projects />
      {/* <Divider mt={5} mb={5} /> */}
      <Contact />
    </Box>
  );
};

export default Home;
