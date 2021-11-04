import About from "./components/About";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Self from "./components/Self";
import Skills from "./components/Skills";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100" id="home">
      {/* <Navbar /> */}
      <div data-aos="fade-down" data-aos-duration="1000">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About />
      </div>
      <div data-aos="fade-up" data-aos-duration="800">
        <Self />
      </div>
      <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">
        <Skills />
      </div>
      <div data-aos="flip-left">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
