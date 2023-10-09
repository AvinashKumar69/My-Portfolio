import {
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const SkillsTable = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <TableContainer
        minW={"70%"}
        borderWidth={2}
        borderRadius={10}
        borderColor={"#847de7"}
        mt={20}
      >
        <Table size="md">
          <Thead>
            <Tr>
              <Th fontWeight={"bold"} color={"#fff"} fontSize={["lg", "xl"]}>
                Category
              </Th>
              <Th fontWeight={"bold"} color={"#fff"} fontSize={["lg", "xl"]}>
                Skill
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Frameworks/ Libraries</Td>
              <Td>Next.js, React.js, React Native</Td>
            </Tr>
            <Tr>
              <Td>Scripting Languages</Td>
              <Td>TypeScript, JavaScript, HTML5, CSS3</Td>
            </Tr>
            <Tr>
              <Td>Databases</Td>
              <Td>Firestore, MongoDB</Td>
            </Tr>
            <Tr>
              <Td>Versioning Tools</Td>
              <Td>Git, BitBucket</Td>
            </Tr>
            <Tr>
              <Td>Project Management</Td>
              <Td>Jira, Agile Methodology</Td>
            </Tr>
            <Tr>
              <Td>Cloud Platforms</Td>
              <Td>Google Cloud Platform</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default SkillsTable;
