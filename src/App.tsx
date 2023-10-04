import { BrowserRouter as Router, Route, Routes, } from "react-router-dom"; // Import BrowserRouter as Router

import Navbar from "./Navbar";
import Demo from "./Demo";
import Form from "./Form";




function App() {


  return (
    <Router> 
      <div>
      <Navbar />
        <Routes>
          <Route path="/demo" element={<Demo/>} />
          <Route path="/form" element={<Form/>} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
