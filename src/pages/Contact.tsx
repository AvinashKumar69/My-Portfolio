import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  IconButton,
  Image,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AvinashPic from "../assets/Avinash-Kumar.jpeg";

const Contact = () => {
  return (
    <Stack
      direction={["column", "row"]}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      mt={20}
    >
      <Box>
        <Image
          borderRadius="full"
          boxSize={["300px", "400px"]}
          src={AvinashPic}
          alt="Dan Abramov"
          objectFit={"cover"}
        />
      </Box>
      <Show above={"md"}>
        <Divider orientation="vertical" height={"200px"} />
      </Show>
      <Box>
        <Card bg={"#06051d"} borderBottom={"1px solid #fff"} color={"#fff"}>
          <CardHeader>
            <Heading size="lg">GET IN TOUCH WITH ME</Heading>
          </CardHeader>

          <CardBody>
            <Stack
              // divider={<StackDivider />}
              spacing="4"
            >
              <Box>
                <Heading size="sm" textTransform="uppercase">
                  Contact Details
                </Heading>
                <Stack direction={["row"]} alignItems={"center"}>
                  <IconButton
                    variant={"ghost"}
                    colorScheme="white"
                    aria-label="Call"
                    size="sm"
                    icon={<PhoneIcon />}
                  />
                  <Text fontSize="md">(+91) 9102397312</Text>
                </Stack>
                <Stack direction={["row"]} alignItems={"center"}>
                  <IconButton
                    variant={"ghost"}
                    colorScheme="white"
                    aria-label="Email"
                    size="sm"
                    icon={<EmailIcon />}
                  />
                  <Text fontSize="md">ak2449746@gmail.com</Text>
                </Stack>
              </Box>
              <Box>
                <Heading size="sm" textTransform="uppercase">
                  Social Platform
                </Heading>
                <Stack direction={["row"]}>
                  <Button
                    mt={2}
                    mb={2}
                    bg={"#1a1664"}
                    color={"#fff"}
                    //   colorScheme="linkedin"
                    leftIcon={<FaLinkedin />}
                    as="a"
                    href="https://www.linkedin.com/in/avinash-kumar-8047a7235/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    mt={2}
                    mb={2}
                    bg={"#1a1664"}
                    color={"#fff"}
                    leftIcon={<FaGithub />}
                    as="a"
                    href="https://github.com/AvinashKumar69"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                </Stack>
              </Box>
              <Box>
                <Heading size="sm" textTransform="uppercase">
                  @AvinashKumar
                </Heading>
                <Text pt="2" fontSize="md">
                  All rights reserved, 2023 & onwards.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Stack>
  );
};

export default Contact;
