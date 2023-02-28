import ME from "../assets/about.jpg";
import { FaUserGraduate } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import "./about.css";

const About = () => {
  return (
    <section>
      <div className="title">
        <h5>Get to know</h5>
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <img src={ME} className=" about-pic" alt="rami pic" />
        <div className="about-card">
          <div className="about-icon">
            <FaUserGraduate />
            <h2>Education</h2>
          </div>
          <ul>
            <li>Bachelor of Marine Engineering</li>
            <h5>
              Tishreen University, <small>Syria</small>
            </h5>
            <h6>2003-2008</h6>
            <br />
            <li>Master of Business Administration</li>
            <h5>
              SVU, <small>Syria</small>
            </h5>
            <h6>2019-2021</h6>
            <br />
            <li>Master of Information Technology</li>
            <h5>
              RUDN, <small>Russia</small>
            </h5>
            <h6>2021-present</h6>
          </ul>
        </div>
        <div className="about-card">
          <div className="about-icon">
            <MdWork />
            <h2>Experience</h2>
          </div>
          <ul>
            <li>Data Analysis</li>
            <h5>
              Lattakia Port, <small>Syria</small>
            </h5>
            <h6>2009-2021</h6>
            <br />
            <li>Freelance</li>
            <h5>
              RUDN, <small>Russia</small>
            </h5>
            <h6>2021-present</h6>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default About;
