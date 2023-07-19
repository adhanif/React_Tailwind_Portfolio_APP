import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<HeroSection />} />
        <Route path="/skills" element={<SkillSection />} />
        {/* // <Route path="/signUp" element={</>} /> */}
      </Routes>

      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
