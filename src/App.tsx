import { Route, Routes } from "react-router-dom";
import Home from "./_pages/Home";
import About from "./_pages/About";
import Capability from "./_pages/Capability";
import Technology from "./_pages/Technology";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import ContactUs from "./_pages/ContactUs";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
      easing: "ease-in",
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/capability" element={<Capability />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
