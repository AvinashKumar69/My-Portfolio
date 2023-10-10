import { Box } from "@chakra-ui/react";
import Contact from "./Contact";
import Experience from "./Experience";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <Box w="100%" minH={"100vh"} p={4} color="white" bg="#06051d" id="home">
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Box>
  );
};

export default Home;
