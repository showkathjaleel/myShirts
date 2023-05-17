import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
function App() {
  return (
    <div className="app transition-all">
      <Home />
      <Canvas />
      <Customizer />
    </div>
  );
}

export default App;
