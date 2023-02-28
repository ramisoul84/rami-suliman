import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Landscape from "../assets/homeLand.jpg";
import Portrait from "../assets/homePort.jpg";
import CV from "../assets/cv.pdf";
import "./home.css";
const Home = () => {
  // useState to change image source on different devices..
  const [width, setWidth] = useState(window.innerWidth);
  const [imgSrc, setImgSrc] = useState();
  function windowsWidth() {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }
  function imgChange() {
    if (width > 1000) {
      setImgSrc(Landscape);
    } else {
      setImgSrc(Portrait);
    }
  }
  useEffect(windowsWidth, []);
  useEffect(imgChange, [width]);
  return (
    <section>
      <div className="title">
        <h5>Hello I'm</h5>
        <h2>Rami Suliman</h2>
        <h3>a Web Developer</h3>
      </div>
      <img src={imgSrc} alt="rami suliman pic" className="home-pic" />
      <div className="home-btns">
        <Link to="/contact">
          <button className="home-btn btn1">Contact ME</button>
        </Link>
        <a href={CV} download>
          <button className="home-btn btn2">Download CV</button>
        </a>
      </div>
    </section>
  );
};
export default Home;
