import logo from './logo.svg';
import HTH from './assets/img/HTH.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { EducationTimeline } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <EducationTimeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
