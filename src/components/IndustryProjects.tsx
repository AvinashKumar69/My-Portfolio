import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FaCheckCircle, FaWrench } from "react-icons/fa";

const IndustryProjects = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={"40px"}>
      {/* *** */}
      <Card bg={"#1a1664"} borderBottom={"3px solid #fff"}>
        <CardHeader color={"#fff"}>
          <Heading size="md">NWave</Heading>
          <Text as={"i"} pt="2" fontSize="sm">
            101 Innovations
          </Text>
        </CardHeader>

        <CardBody color={"#fff"}>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                The core idea of the "NWave" mobile app is to offer a platform
                where consumers can engage in conversations with the seller
                prior to making a purchasing decision for any product.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Roles & Responsibilities:
              </Heading>
              <List spacing={3} pt={2} fontSize="sm">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Ensuring a consistent and visually appealing user interface
                  across different devices.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />I developed
                  the Chat and Business & Products modules in the application
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Managed application state using Redux to ensure data
                  consistency and efficient updates.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />I integrated
                  React Navigation into the application to manage routing.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />I integrated
                  Firebase Cloud Messaging notifications.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaWrench} color="green.500" />
                  Debug and resolve issues and bugs in the application.
                </ListItem>
              </List>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Tech Stack
              </Heading>
              <Text pt="2" fontSize="sm">
                React Native, JavaScript, Google Cloud Platofrm, HTML, CSS, Git,
                Jira
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      {/* *** */}
      <Card bg={"#1a1664"} borderBottom={"3px solid #fff"}>
        <CardHeader color={"#fff"}>
          <Heading size="md">NWave Admin</Heading>
          <Text as={"i"} pt="2" fontSize="sm">
            101 Innovations
          </Text>
        </CardHeader>

        <CardBody color={"#fff"}>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                The “NWave Admin” website, is for the sellers to upload their
                listings and manage their account details for the NWave mobile
                app.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Roles & Responsibilities:
              </Heading>
              <List spacing={3} pt={2} fontSize="sm">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Ensuring a consistent and visually appealing user interface
                  across different screen sizes.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />I developed
                  the Chat and Agent Management modules in the application
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Managed application state using Redux to ensure data
                  consistency and efficient updates.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />I integrated
                  React Router into the application to manage routing.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />I integrated
                  Firebase Auth for the login module.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaWrench} color="green.500" />
                  Debug and resolve issues and bugs in the application.
                </ListItem>
              </List>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Tech Stack
              </Heading>
              <Text pt="2" fontSize="sm">
                React, JavaScript, Google Cloud Platofrm, HTML, CSS, Git, Jira
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      {/* *** */}
      <Card bg={"#1a1664"} borderBottom={"3px solid #fff"}>
        <CardHeader color={"#fff"}>
          <Heading size="md">UPayments</Heading>
          <Text as={"i"} pt="2" fontSize="sm">
            NeoSOFT
          </Text>
        </CardHeader>

        <CardBody color={"#fff"}>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                The “UPayments” mobile app, is a fintech solution tailored for
                merchants. The merchants can create invoices effortlessly and
                keep track of their balance and revenue in real-time.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Roles & Responsibilities:
              </Heading>
              <List spacing={3} pt={2} fontSize="sm">
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Ensuring a consistent and visually appealing user interface
                  across different devices and screen sizes.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Managed application state using Redux to ensure data
                  consistency and efficient updates.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Used Axios to make API requests within the application.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaWrench} color="green.500" />
                  Debug and resolve issues and bugs in the application.
                </ListItem>
              </List>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Tech Stack
              </Heading>
              <Text pt="2" fontSize="sm">
                React Native, JavaScript, TypeScript, HTML, CSS, Git, Jira
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default IndustryProjects;
