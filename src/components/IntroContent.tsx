import { HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const IntroContent = () => {
  return (
    <Stack
      width={["100%", "50%"]}
      justifyContent={"center"}
      // order={[2, 1]}
      p={5}
    >
      <Text
        as="b"
        fontSize={["3xl", "4xl", "5xl"]}
        textAlign={["center", "left"]}
      >
        Hi, I'm Avinash Kumar
      </Text>
      <Text fontSize={["md", "lg"]} textAlign={["center", "left"]}>
        I am a software developer with experience in crafting{" "}
        <Text as="b" textDecoration={"underline"}>
          Web and Mobile Applications
        </Text>{" "}
        utilizing state-of-the-art technologies.
      </Text>
      {/* <Text fontSize={["md", "lg"]} textAlign={["center", "left"]}>
        My strength lies in consistently delivering top-notch products and
        services while adhering to project timelines.
      </Text> */}
      <HStack justifyContent={["center", "flex-start"]}>
        <IconButton
          as="a"
          href="https://github.com/AvinashKumar69"
          target="_blank"
          rel="noopener noreferrer"
          isRound={true}
          variant="link"
          colorScheme={"github"}
          aria-label="Github"
          fontSize="30px"
          icon={<FaGithub />}
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/avinash-kumar-8047a7235/"
          target="_blank"
          rel="noopener noreferrer"
          isRound={true}
          variant="link"
          colorScheme={"white"}
          aria-label="LinkedIn"
          fontSize="30px"
          icon={<FaLinkedin />}
        />
      </HStack>
    </Stack>
  );
};

export default IntroContent;
