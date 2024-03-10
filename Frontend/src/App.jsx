import './App.css';
import HeroSection from './components/HeroSection';
import SkillSection from './components/SkillSection';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import ContactMe from './components/ContactMe';
import Portfolio from './components/Portfolio';
import Scroller from './components/Scroller';

function App() {
  return (
    <>
      <HeroSection />
      <Scroller />
      <Aboutme />
      <SkillSection />
      <Portfolio />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
