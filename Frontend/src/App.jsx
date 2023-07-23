import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        {/* <Route path="/aboutme" element={<Aboutme />} /> */}
        <Route path="/skills" element={<SkillSection />} />
        {/* <Route path="/contact" element={<ContactMe />} /> */}
      </Routes>

      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
