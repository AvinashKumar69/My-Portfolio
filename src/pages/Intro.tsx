import { Stack } from "@chakra-ui/react";
import IntroContent from "../components/IntroContent";
import IntroImage from "../components/IntroImage";

const Intro = () => {
  return (
    <Stack direction={["column", "row"]} minH={"100%"} id="home_introStack">
      <IntroContent />
      <IntroImage />
    </Stack>
  );
};

export default Intro;
