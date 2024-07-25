
import './App.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import EveModel from './components/ThreeJSAnimations/evemodel';
import Experience from './components/Experience/experience';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className="App">
        <About></About>
        <Experience></Experience>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        
    </div>
  );
}

export default App;
