import About from "./components/About";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Self from "./components/Self";
import Skills from "./components/Skills";
import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div
      className="min-h-screen py-10 px-3 sm:px-5"
      style={{
        backgroundImage:
          "url(https://tailwindcss.com/_next/static/media/hero-dark@90.a7a063e8f9d179fbd72b0b735c5797b7.jpg)",
      }}
      id="home"
    >
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
      {/* <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">
       
      </div> */}
      <Skills />
      <div data-aos="flip-left">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
