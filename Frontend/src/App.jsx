import './App.css';
import HeroSection from './components/HeroSection';
import SkillSection from './components/SkillSection';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import ContactMe from './components/ContactMe';
import Portfolio from './components/Portfolio';
import Scroller from './components/Scroller';
import { useTheme } from './components/contextApi/ThemeContext';

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`${
          theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-#f5f8fd '
        }`}
      >
        <HeroSection />
        <Scroller />
        <Aboutme />
        <SkillSection />
        <Portfolio />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
