import { Fragment } from "react";
import SkillWithLogo from "../components/SkillWithLogo";
import SkillsTable from "../components/SkillsTable";

const Skills = () => {
  return (
    <Fragment>
      <SkillWithLogo />
      <SkillsTable />
    </Fragment>
  );
};

export default Skills;
