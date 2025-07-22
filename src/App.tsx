import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";

import Footer from "./components/layout/Footer";
import AboutUs from "./components/AboutUs";

import Servicess from "./components/Services";
import Doctorss from "./components/Doctors";
import Contactss from "./components/Contact";
import Newss from "./components/News";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Servicess />} />
        <Route path="/doctors" element={<Doctorss />} />
        <Route path="/contacts" element={<Contactss />} />
        <Route path="/news" element={<Newss />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
