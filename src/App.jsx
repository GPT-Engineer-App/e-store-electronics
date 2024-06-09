import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/products" element={<Products searchQuery={searchQuery} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;