import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter as Router

import Navbar from "./Navbar";
import Demo from "./Demo";




function App() {


  return (
    <Router> 
      <div>
      <Navbar />
        <Routes>
          <Route path="/demo" element={<Demo/>} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
