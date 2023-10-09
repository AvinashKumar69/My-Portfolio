import { IconType } from "react-icons";
import { FaCss3, FaGithub, FaJira, FaReact } from "react-icons/fa";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { SiFirebase, SiRedux, SiTypescript } from "react-icons/si";

interface SkillsArray {
  name: string;
  logo: IconType;
  logoColor?: string;
}

export const skills: SkillsArray[] = [
  { name: "React", logo: FaReact, logoColor: "#04d8f9" },
  { name: "React Native", logo: FaReact, logoColor: "#04d8f9" },
  { name: "JavaScript", logo: IoLogoJavascript, logoColor: "#F0DB4F" },
  { name: "TypeScript", logo: SiTypescript, logoColor: "#007ACC" },
  { name: "HTML", logo: IoLogoHtml5, logoColor: "#E34C26" },
  { name: "CSS", logo: FaCss3, logoColor: "#264de4" },
  { name: "Redux", logo: SiRedux, logoColor: "#764abc" },
  { name: "Google Cloud Platform", logo: SiFirebase, logoColor: "#ffc403" },
  { name: "Git", logo: FaGithub, logoColor: "#fff" },
  { name: "Jira", logo: FaJira, logoColor: "#146ee3" },
];
