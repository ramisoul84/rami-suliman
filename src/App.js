import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Col from "./pages/Col";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <HashRouter>
      <Col />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Nav />
    </HashRouter>
  );
};
export default App;
