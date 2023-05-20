import About from "./components/About";
import Contact from "./components/Contact";
// import GamesPicker from "./components/GamesPicker";
import Nav from "./components/Nav";
import ProjectsPicker from "./components/ProjectsPicker";
import Welcome from "./components/Welcome";
import { useEffect, useRef } from "react";
import LoadingScreen from "./components/LoadingScreen";

const App: React.FC = () => {
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (sectionTop < windowHeight * 1) {
            section.classList.add("fade-in");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <Nav />
      <Welcome />
      <section
        ref={(el) => sectionRefs.current.push(el)}
        className="h-screen fade-in-section"
      >
        <About />
      </section>
      <section
        ref={(el) => sectionRefs.current.push(el)}
        className="h-screen fade-in-section"
      >
        <ProjectsPicker />
      </section>
      <section
        ref={(el) => sectionRefs.current.push(el)}
        className="h-screen fade-in-section"
      >
        {/* <GamesPicker /> */}
        <Contact />
      </section>
    </>
  );
};

export default App;
