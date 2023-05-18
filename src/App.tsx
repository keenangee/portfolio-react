import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
// import GamesPicker from "./components/GamesPicker";
import Nav from "./components/Nav";
import ProjectsPicker from "./components/ProjectsPicker";
import Welcome from "./components/Welcome";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Welcome />
      <About />
      <ProjectsPicker />
      {/* <GamesPicker /> */}
      <Contact />
    </>
  );
};

export default App;
