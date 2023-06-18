import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Main>
        <Project />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
