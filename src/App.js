import "./App.css";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Guides from "./Components/Guides";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripPromise = loadStripe("pk_test_51PnCOZRxea1sBKLjpGBq6V0uFY8BhVA1W7xNTRzjzJXX0y5IsCV8MK0PJ5UUDixwIiMwj5DPcu3ee76r9hOmpLY600R2rFMXZ2");

function App() {
  return (
    <Elements stripe={stripPromise}>
    <div className="App">
      <section id="about"><About /></section>
      <section id="guides"><Guides /></section>
      <section id="services"><Services /></section>
      <section id="contact"><Contact /></section>
      <section id="testimonial"><Testimonial /></section>
      <section id="footer"><Footer /></section>
    </div>
    </Elements>
  );
}

export default App;
