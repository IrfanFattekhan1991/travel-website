import React from "react";
import Vehicles from "./components/Vehicles";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Vehicles />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
