import "./App.css";
import Mission from "./Components/Mission";
import Clients from "./Components/Clients";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Guides from "./Components/Guides";
import NewsLetter from "./Components/NewsLetter";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripPromise = loadStripe("pk_test_51PnCOZRxea1sBKLjpGBq6V0uFY8BhVA1W7xNTRzjzJXX0y5IsCV8MK0PJ5UUDixwIiMwj5DPcu3ee76r9hOmpLY600R2rFMXZ2");

function App() {
  return (
    <Elements stripe={stripPromise}>

      <div className="App">

        <section id="mission"><Mission /></section>
        <hr className="divider" />
        <br />
        <section id="guides"><Guides /></section>
        <hr className="divider" />
        <br />
        <section id="services"><Services /></section>
        <hr className="divider" />
        <br />
        <section id="contact"><Contact /></section>
        <br />
        <hr className="divider" />
        <br />
        <section id="newsletter"><NewsLetter /></section>
        <hr className="divider" />
        <br />
        <section id="clients"><Clients /></section>
        <hr className="divider" />
        <br />
        <section id="footer"><Footer /></section>
      </div>
    </Elements>
  );
}

export default App;
