import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import ContactMe from "./components/ContactMe";
import Portfolio from "./components/Portfolio";
import FinalProject from "./components/FinalProject";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/skills" element={<SkillSection />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/finalProject" element={<FinalProject />} />
      </Routes>

      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
