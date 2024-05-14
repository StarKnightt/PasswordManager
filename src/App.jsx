import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Manager from "./Components/Manager";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Manager />

      <Footer />
    </>
  );
}

export default App;
