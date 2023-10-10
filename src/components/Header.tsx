import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Show,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();

  const handleLogoClick = () => {
    scroll.scrollToTop({ smooth: true });
  };

  return (
    <Stack
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="#06051d"
      // bg="gray.900"
      p={5}
      direction={["row"]}
      align="center"
      justify="space-between"
      id="header_navBar"
      height={"80px"}
    >
      <Box boxSize={"auto"} bg={"#000"}>
        <Text
          as="b"
          cursor={"pointer"}
          color={"#fff"}
          fontSize={"xl"}
          fontFamily={"cursive"}
        >
          AK
        </Text>
      </Box>

      <Show breakpoint="(min-width: 768px)">
        <Stack direction={["row"]}>
          <ScrollLink to="home_introStack" smooth duration={500} offset={-90}>
            <Text
              as="b"
              fontSize={"lg"}
              mx={2}
              color="white"
              cursor="pointer"
              fontFamily={"cursive"}
            >
              Home
            </Text>
          </ScrollLink>
          <ScrollLink
            to="skill_skillWithLogo"
            smooth
            duration={500}
            offset={-90}
          >
            <Text
              as="b"
              fontSize={"lg"}
              mx={2}
              color="white"
              cursor="pointer"
              fontFamily={"cursive"}
            >
              Tech Stack
            </Text>
          </ScrollLink>
          <ScrollLink
            to="experience_verticalTimeline"
            smooth
            duration={500}
            offset={-90}
          >
            <Text
              as="b"
              fontSize={"lg"}
              mx={2}
              color="white"
              cursor="pointer"
              fontFamily={"cursive"}
            >
              Experience
            </Text>
          </ScrollLink>
          <ScrollLink
            to="projects_industryProjects"
            smooth
            duration={500}
            offset={-90}
          >
            <Text
              as="b"
              fontSize={"lg"}
              mx={2}
              color="white"
              cursor="pointer"
              fontFamily={"cursive"}
            >
              Projects
            </Text>
          </ScrollLink>
          <ScrollLink to="contact" smooth duration={500} offset={-90}>
            <Text
              as="b"
              fontSize={"lg"}
              mx={2}
              color="white"
              cursor="pointer"
              fontFamily={"cursive"}
            >
              Contact
            </Text>
          </ScrollLink>
        </Stack>
      </Show>

      <Show breakpoint="(max-width: 767px)">
        <IconButton
          isRound={true}
          variant="link"
          color={"#fff"}
          aria-label="Hamburger Menu"
          fontSize="25px"
          // ref={btnRef}
          onClick={onOpen}
          icon={<GiHamburgerMenu />}
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          // finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color={"#fff"} />
            <DrawerHeader bg="#06051d"></DrawerHeader>

            <DrawerBody bg="#06051d">
              <Stack direction={["column"]} alignItems={"flex-start"}>
                <ScrollLink
                  to="home_introStack"
                  smooth
                  duration={500}
                  offset={-90}
                >
                  <Text
                    as="b"
                    fontSize={"lg"}
                    mx={2}
                    color="white"
                    cursor="pointer"
                    onClick={onClose}
                    fontFamily={"cursive"}
                  >
                    Home
                  </Text>
                </ScrollLink>
                <ScrollLink
                  to="skill_skillWithLogo"
                  smooth
                  duration={500}
                  offset={-90}
                >
                  <Text
                    as="b"
                    fontSize={"lg"}
                    mx={2}
                    color="white"
                    cursor="pointer"
                    onClick={onClose}
                    fontFamily={"cursive"}
                  >
                    Tech Stack
                  </Text>
                </ScrollLink>
                <ScrollLink
                  to="experience_verticalTimeline"
                  smooth
                  duration={500}
                  offset={-90}
                >
                  <Text
                    as="b"
                    fontSize={"lg"}
                    mx={2}
                    color="white"
                    cursor="pointer"
                    onClick={onClose}
                    fontFamily={"cursive"}
                  >
                    Experience
                  </Text>
                </ScrollLink>
                <ScrollLink
                  to="projects_industryProjects"
                  smooth
                  duration={500}
                  offset={-90}
                >
                  <Text
                    as="b"
                    fontSize={"lg"}
                    mx={2}
                    color="white"
                    cursor="pointer"
                    onClick={onClose}
                    fontFamily={"cursive"}
                  >
                    Projects
                  </Text>
                </ScrollLink>
                <ScrollLink to="contact" smooth duration={500} offset={-90}>
                  <Text
                    as="b"
                    fontSize={"lg"}
                    mx={2}
                    color="white"
                    cursor="pointer"
                    onClick={onClose}
                    fontFamily={"cursive"}
                  >
                    Contact
                  </Text>
                </ScrollLink>
              </Stack>
            </DrawerBody>

            {/* <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </Show>
    </Stack>
  );
};

export default Header;
