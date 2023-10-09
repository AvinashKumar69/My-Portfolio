import { Box } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { IoMdSchool } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceVerticalTimeline = () => {
  return (
    <Box mt={20} mb={20}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1a1664", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #1a1664" }}
          date="April 2023 - PRESENT"
          iconStyle={{ background: "#1a1664", color: "#fff" }}
          icon={<FaReact color="#04d8f9" />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              fontWeight: "bold",
            }}
          >
            NeoSOFT
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              fontStyle: "italic",
            }}
          >
            Software Engineer
          </h4>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              fontStyle: "italic",
            }}
          >
            Puna, India
          </h4>
          <p>
            React Native, TypeScript, JavaScript, HTML, CSS, REST API, Git, Jira
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1a1664", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #1a1664" }}
          date="June 2022 - April 2023"
          iconStyle={{ background: "#1a1664", color: "#fff" }}
          icon={<FaReact color="#04d8f9" />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              fontWeight: "bold",
            }}
          >
            101 Innovations
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              fontStyle: "italic",
            }}
          >
            Software Developer
          </h4>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              fontStyle: "italic",
            }}
          >
            Bengaluru, India
          </h4>
          <p>
            React, React Native, JavaScript, HTML, CSS, Google Cloud Platform,
            Git, Jira
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1a1664", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #1a1664" }}
          date="November 2020 - May 2022"
          iconStyle={{ background: "#1a1664", color: "#fff" }}
          icon={<FaReact color="#04d8f9" />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              fontWeight: "bold",
            }}
          >
            IT TECH SOFTWARE SOLUTIONS
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              fontStyle: "italic",
            }}
          >
            Software Developer
          </h4>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              fontStyle: "italic",
            }}
          >
            Patna, India
          </h4>
          <p>React, JavaScript, HTML, CSS, Git</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#36454F", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #36454F" }}
          date="June 2018 - October 2020"
          iconStyle={{ background: "#36454F", color: "#fff" }}
          icon={<FcSalesPerformance />}
        >
          <h3 className="vertical-timeline-element-title">Non-IT Expertise</h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              fontStyle: "italic",
            }}
          >
            Key Account Manager
          </h4>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              fontStyle: "italic",
            }}
          >
            Bengaluru, India
          </h4>
          <p>
            Aegis (June 2018 - December 2018), Meesho (January 2019 - October
            2020)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#36454F", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #36454F" }}
          date="2017"
          iconStyle={{ background: "#36454F", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Bangalore Institute of Technology, Bangalore
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              fontStyle: "italic",
            }}
          >
            B.E (Electrical & Elctronics Engineering)
          </h4>
          <p>60%, Full Time</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default ExperienceVerticalTimeline;
