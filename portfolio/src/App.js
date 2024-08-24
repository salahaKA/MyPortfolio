import React from "react";
import MainLayout from "./components/Layout/MainLayout";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  
  return (
    <Router>
      <MainLayout>
        {/* Main components content */}
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/contacts" element={<Contact/>}></Route>
        </Routes>
        
      </MainLayout>
    </Router>
  );
}

export default App;
