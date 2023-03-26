import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Resume from "./components/resume";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
