import { Box, Icon, SimpleGrid } from "@chakra-ui/react";
import { skills } from "../helpers/SkillData";

const SkillWithLogo = () => {
  return (
    <SimpleGrid columns={[2, 3, 4, 5]} spacing={"40px"}>
      {skills?.map((skill, index: number) => (
        <Box
          key={String(index)}
          textAlign="center"
          p={4}
          // bg={"red"}
          borderRadius={"lg"}
          borderBottom={"3px solid #fff"}
        >
          <Icon
            as={skill.logo}
            boxSize={50}
            color={skill.logoColor ? skill.logoColor : "#fff"}
          />
          <Box
            fontWeight={"bold"}
            fontSize={["md", "md", "lg", "2xl"]}
            mt={2}
            color={"white"}
          >
            {skill.name}
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default SkillWithLogo;
