import { Box, Icon, SimpleGrid } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaCss3, FaGithub, FaJira, FaReact } from "react-icons/fa";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { SiFirebase, SiRedux, SiTypescript } from "react-icons/si";

interface SkillsArray {
  name: string;
  logo: IconType;
  logoColor?: string;
}

const skills: SkillsArray[] = [
  { name: "React", logo: FaReact, logoColor: "#04d8f9" },
  { name: "React Native", logo: FaReact, logoColor: "#04d8f9" },
  { name: "JavaScript", logo: IoLogoJavascript, logoColor: "#F0DB4F" },
  { name: "TypeScript", logo: SiTypescript, logoColor: "#007ACC" },
  { name: "HTML", logo: IoLogoHtml5, logoColor: "#E34C26" },
  { name: "CSS", logo: FaCss3, logoColor: "#264de4" },
  { name: "Redux", logo: SiRedux, logoColor: "#764abc" },
  { name: "GCP", logo: SiFirebase },
  { name: "Git", logo: FaGithub },
  { name: "Jira", logo: FaJira },
];

const SkillWithLogo = () => {
  return (
    <SimpleGrid
      // minChildWidth="120px"
      columns={[2, 3, 5]}
      spacing={"40px"}
    >
      {skills.map((skill: SkillsArray, index: number) => (
        <Box key={String(index)} textAlign="center" p={4}>
          <Icon as={skill.logo} boxSize={30} color={"white"} />
          <Box fontWeight={"bold"} mt={2} color={"white"}>
            {skill.name}
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default SkillWithLogo;
