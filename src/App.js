import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Ninja from "./components/Ninja/Ninja";
import Home from "./pages/Home/Home";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </div>
  );
};

export default App;
