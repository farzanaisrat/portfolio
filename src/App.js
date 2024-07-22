
import './App.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import EveModel from './components/ThreeJSAnimations/evemodel';
import Experience from './components/Experience/experience';

function App() {
  return (
    <div className="App">
        <EveModel></EveModel>
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
    </div>
  );
}

export default App;
