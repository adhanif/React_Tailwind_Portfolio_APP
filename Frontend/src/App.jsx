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
        <Route element={<SkillSection />} />
        <Route element={<CtaSection />} />
        <Route element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
