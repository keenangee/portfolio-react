import About from "./components/About";
import Contact from "./components/Contact";
// import GamesPicker from "./components/GamesPicker";
import Nav from "./components/Nav";
import ProjectsPicker from "./components/ProjectsPicker";
import Welcome from "./components/Welcome";
import { useEffect, useRef } from "react";
import LoadingScreen from "./components/LoadingScreen";
import BlogPicker from "./components/BlogPicker";
import { Route, Routes } from "react-router-dom";
import BlogNav from "./components/BlogNav";
import BlogPost from "./components/BlogPost";
import Background from "./components/Background";

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

      <Routes>
        <Route
          path="/"
          element={
            <>
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
                <BlogPicker />
              </section>
              {/* <GamesPicker /> */}
              <section
                ref={(el) => sectionRefs.current.push(el)}
                className="h-screen fade-in-section"
              >
                <Contact />
              </section>
              <Background />
            </>
          }
        />
        <Route
          path="/blog/:blog_id"
          element={
            <>
              <LoadingScreen />
              <BlogNav />
              <BlogPost />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
