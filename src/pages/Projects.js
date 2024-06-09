import profileReact from "../assets/profile-react.jpg";
import profile from "../assets/profile.jpg";
import crypto from "../assets/crypto.jpg";
import rick from "../assets/rick_and_morty.png";
import aton from "../assets/aton.png";
import aton_server from "../assets/aton_server.png";
import "./projects.css";

const data = [
  {
    id: 1,
    image: rick,
    title: "Rick And Morty",
    skills: ["Angular", "TypeScript", "HTML", "SCSS"],
    github: "https://github.com/ramisoul84/rick_and_morty",
    demo: " https://ramisoul84.github.io/rick_and_morty/",
  },
  {
    id: 2,
    image: aton,
    title: "Clients Managment System - FrontEnd",
    skills: ["Angular", "TypeScript", "HTML", "SCSS"],
    github: "https://github.com/ramisoul84/aton_front",
    demo: " https://ramisoul84.github.io/aton_front/",
  },
  {
    id: 3,
    image: aton_server,
    title: "Clients Managment System - BackEnd",
    skills: ["NestJS", "PostgresSQL", "Docker"],
    github: "https://github.com/ramisoul84/aton_back",
    demo: " https://ramisuliman.ru/aton/api",
  },
  {
    id: 4,
    image: crypto,
    title: "cryptography",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/ramisoul84/rudn-master",
    demo: " https://ramisoul84.github.io/rudn-master/",
  },
  {
    id: 3,
    image: profileReact,
    title: "Profile: (React)",
    skills: ["React", "JavaScript", "CSS"],
    github: "https://github.com/ramisoul84/pro",
    demo: " https://ramisoul84.github.io/pro/",
  },
  {
    id: 4,
    image: profile,
    title: "Profile: (HTML-CSS-JS)",
    skills: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/ramisoul84/profile",
    demo: " https://ramisoul84.github.io/profile/",
  },
];

const Projects = () => {
  const projects = data.map((item) => {
    return (
      <div className="project-item">
        <img src={item.image} alt="project-pic" className="project-img" />
        <h2>{item.title}</h2>
        <div className="stack">
          {item.skills.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
        <div className="project-btns">
          <a href={item.github}>
            <button className="project-btn">GitHub</button>
          </a>
          <a href={item.demo} target="_blank" rel="noreferrer">
            <button className="project-btn">Demo</button>
          </a>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="title">
        <h5>some of</h5>
        <h2>My Projects</h2>
      </div>
      <div className="projects-container">{projects}</div>
    </section>
  );
};
export default Projects;
