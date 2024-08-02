import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Fragments/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Experiences from "./components/Pages/Experiences";
import Educations from "./components/Pages/Educations";
import Skills from "./components/Pages/Skills";
import Project from "./components/Pages/Project";

const App = () => {
  return (
    <Router>
      <div className="bg-secondary mx-auto font-pixel">
        <Navbar />
        <div className="container mx-auto">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/educations" element={<Educations />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
