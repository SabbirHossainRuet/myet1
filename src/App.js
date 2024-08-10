import "./App.css";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Guides from "./Components/Guides"

function App() {
  return (
    <div className="App">
      <About />
      <Guides />
      <Services />
      <Contact />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
