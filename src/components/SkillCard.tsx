import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { skills } from "../helpers/SkillData";

const SkillCard = () => {
  return (
    <SimpleGrid columns={[1, 3, 3, 5]} spacing={"40px"}>
      {skills.map((skill, index: number) => {
        return (
          <Card
            key={String(index)}
            bg={"#1a1664"}
            borderBottom={"3px solid #fff"}
            color={"#fff"}
          >
            <CardHeader>
              <Icon as={skill.logo} boxSize={30} color={"white"} />
              <Heading size="md">Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            {/* <CardFooter>
              <Button>View here</Button>
            </CardFooter> */}
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default SkillCard;
