import "./App.css";
import Header from "./Components/header/Header";
import About from "./Components/about/About";
import Portfolio from "./Components/portfolio/Portfolio";
import Nav from "./Components/nav/Nav";
import Experience from "./Components/experience/Experience";
import Contact from "./Components/contact/Contact";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my portfolio</h1>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
