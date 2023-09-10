import { SlScreenDesktop } from "react-icons/sl";
import { FaServer } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { DiJqueryLogo } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import "./skills.css";

const fe_data = [
  { id: 1, icon: <AiFillHtml5 />, name: "HTML", rate: 80 },
  { id: 2, icon: <DiCss3 />, name: "CSS", rate: 60 },
  { id: 3, icon: <IoLogoJavascript />, name: "JavaScript", rate: 60 },
  { id: 4, icon: <DiJqueryLogo />, name: "JQuery", rate: 50 },
  { id: 5, icon: <RiReactjsFill />, name: "React.js", rate: 70 },
];
const be_data = [
  { id: 1, icon: <SiPhp />, name: "PHP", rate: 60 },
  { id: 2, icon: <FaNodeJs />, name: "Node.js", rate: 50 },
  { id: 3, icon: <SiMysql />, name: "MySQL", rate: 60 },
  { id: 4, icon: <SiMongodb />, name: "MongoDB", rate: 60 },
  { id: 5, icon: <SiCplusplus />, name: "C++", rate: 60 },
];
const ai_data = [
  { id: 1, icon: <DiPython />, name: "Python", rate: 80 },
  { id: 2, icon: <SiTensorflow />, name: "TensorFlow", rate: 60 },
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
        <div className="skill-card card3">
          <div className="skills-icon">
            <SiTensorflow />
            <h2>AI</h2>
          </div>
          <div className="skill-items">{dataAI}</div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
