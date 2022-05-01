import Home from "./Home";
import About from "./About";
import {Routes, Route, Link} from "react-router-dom";
import LandingPage from "./LandingPage";
import NotFound from "./NotFound";
import Login from "./Login";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>SportFields</h1>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/LandingPage" element={<LandingPage/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
