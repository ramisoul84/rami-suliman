import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav>
      <Link
        to="/"
        onClick={() => {
          setActiveNav("#");
          top();
        }}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="/about"
        onClick={() => {
          setActiveNav("about");
          top();
        }}
        className={activeNav === "about" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="/skills"
        onClick={() => {
          setActiveNav("skills");
          top();
        }}
        className={activeNav === "skills" ? "active" : ""}
      >
        <BsFillGearFill />
      </Link>
      <Link
        to="/projects"
        onClick={() => {
          setActiveNav("projects");
          top();
        }}
        className={activeNav === "projects" ? "active" : ""}
      >
        <MdOutlineDesignServices />
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          setActiveNav("contact");
          top();
        }}
        className={activeNav === "contact" ? "active" : ""}
      >
        <AiOutlineContacts />
      </Link>
    </nav>
  );
};
export default Nav;
