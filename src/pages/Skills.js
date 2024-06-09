import { SlScreenDesktop } from "react-icons/sl";
import { FaServer } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { GiServerRack } from "react-icons/gi";

import "./skills.css";

const fe_data = [
  { id: 1, icon: <AiFillHtml5 />, name: "HTML", rate: 80 },
  { id: 2, icon: <DiCss3 />, name: "CSS", rate: 60 },
  { id: 3, icon: <IoLogoJavascript />, name: "JavaScript", rate: 60 },
  { id: 4, icon: <SiTypescript />, name: "TypeScript", rate: 60 },
  { id: 5, icon: <FaAngular />, name: "Angular", rate: 70 },
  { id: 6, icon: <RiReactjsFill />, name: "React", rate: 50 },
];
const be_data = [
  { id: 1, icon: <SiPhp />, name: "PHP", rate: 60 },
  { id: 3, icon: <SiNestjs />, name: "NestJS", rate: 60 },
  { id: 2, icon: <FaNodeJs />, name: "NodeJS", rate: 50 },
  { id: 3, icon: <SiPostgresql />, name: "PostgreSQL", rate: 60 },
  { id: 4, icon: <SiMongodb />, name: "MongoDB", rate: 60 },
];
const other_data = [
  { id: 1, icon: <FaGitAlt />, name: "git", rate: 70 },
  { id: 2, icon: <FaDocker />, name: "Docker", rate: 60 },
  { id: 3, icon: <SiCplusplus />, name: "C++", rate: 50 },
];

const Skills = () => {
  const dataFront = fe_data.map((item) => {
    return (
      <div className="skill-item">
        <div className="skill-icon">{item.icon}</div>
        <div className="skill-detail">
          <h5 className="skill-name">
            {item.name}
            <small></small>
          </h5>
          <div className="skill-bar">
            <span
              className="skill-rate"
              style={{ width: item.rate + "%", animationDelay: "2s" }}
            >
              <span className="tooltip">{item.rate}%</span>
            </span>
          </div>
        </div>
      </div>
    );
  });
  const dataBack = be_data.map((item) => {
    return (
      <div className="skill-item">
        <div className="skill-icon">{item.icon}</div>
        <div className="skill-detail">
          <h5 className="skill-name">
            {item.name}
            <small></small>
          </h5>
          <div className="skill-bar">
            <span
              className="skill-rate"
              style={{ width: item.rate + "%", animationDelay: "2.5s" }}
            >
              <span className="tooltip">{item.rate}%</span>
            </span>
          </div>
        </div>
      </div>
    );
  });
  const others = other_data.map((item) => {
    return (
      <div className="skill-item">
        <div className="skill-icon">{item.icon}</div>
        <div className="skill-detail">
          <h5 className="skill-name">
            {item.name}
            <small></small>
          </h5>
          <div className="skill-bar">
            <span
              className="skill-rate"
              style={{ width: item.rate + "%", animationDelay: "2.5s" }}
            >
              <span className="tooltip">{item.rate}%</span>
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="title">
        <h5>Skills i have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="skills-container">
        <div className="skill-card card1">
          <div className="skills-icon">
            <SlScreenDesktop />
            <h2>FrontEnd</h2>
          </div>
          <div className="skill-items">{dataFront}</div>
        </div>
        <div className="skill-card card2">
          <div className="skills-icon">
            <FaServer />
            <h2>BackEnd</h2>
          </div>
          <div className="skill-items">{dataBack}</div>
        </div>
        <div className="skill-card card2">
          <div className="skills-icon">
            <GiServerRack />
            <h2>Others</h2>
          </div>
          <div className="skill-items">{others}</div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
/*
  const dataAI = ai_data.map((item) => {
    return (
      <div className="skill-item">
        <div className="skill-icon">{item.icon}</div>
        <div className="skill-detail">
          <h5 className="skill-name">
            {item.name}
            <small></small>
          </h5>
          <div className="skill-bar">
            <span
              className="skill-rate"
              style={{ width: item.rate + "%", animationDelay: "3s" }}
            >
              <span className="tooltip">{item.rate}%</span>
            </span>
          </div>
        </div>
      </div>
    );
  });
   <div className="skill-card card3">
          <div className="skills-icon">
            <SiTensorflow />
            <h2>AI</h2>
          </div>
          <div className="skill-items">{dataAI}</div>
        </div>
*/
