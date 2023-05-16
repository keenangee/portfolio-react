import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Welcome />
      <Footer />
    </>
  );
};

export default App;
