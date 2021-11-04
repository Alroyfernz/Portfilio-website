import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Self from "./components/Self";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen py-10 px-3 sm: px-5 bg-gray-100" id="home">
      <Navbar />
      <Card />
      <About />
      <Self id="prod" />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
