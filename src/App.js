import "./App.css";
import Nav from "./Components/nav/Nav";
import Header from "./Components/header/Header";
import About from "./Components/about/About";
import Portfolio from "./Components/portfolio/Portfolio";
import Experience from "./Components/experience/Experience";
import Contact from "./Components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
