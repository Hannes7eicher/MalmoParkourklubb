import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Membership from "./pages/Membership";
import ScrollToTop from "./components/scrollToTop";

export default function App() {
  return (
    <Router>
      <Helmet>
        <title>Malmö Parkour</title>
        <meta name="description" content="Träna på Malmös största Parkouranläggning" />
      </Helmet>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}