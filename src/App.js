import "./App.css";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Guides from "./Components/Guides";

function App() {
  return (
    <div className="App">
      <section id="about"><About /></section>
      <section id="guides"><Guides /></section>
      <section id="services"><Services /></section>
      <section id="contact"><Contact /></section>
      <section id="testimonial"><Testimonial /></section>
      <section id="footer"><Footer /></section>
    </div>
  );
}

export default App;
