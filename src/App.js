import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen py-10 px-3 sm: px-5 bg-gray-100">
      <Navbar />
      <Card />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
