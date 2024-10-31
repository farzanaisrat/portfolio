
import './App.css';
import Navigation from './components/Navigation/navigation';
import Clouds from './components/Clouds';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Eve from './components/ThreeJSAnimations/Eve';
import Experience from './components/Experience/experience';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
        <Clouds></Clouds>
        <Eve></Eve>
        <About></About>
        <Experience></Experience>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
        
    </div>
  );
}

export default App;
