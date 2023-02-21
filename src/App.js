import "./App.css";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section id="Home">
        <Home />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Blogs">
        <Blogs />
      </section>
      <section id="AboutUs">
        <AboutUs />
      </section>
      <Footer />
    </>
  );
}

export default App;
