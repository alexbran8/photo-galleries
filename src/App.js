import React from "react";
import "./App.css";

import {Navbar} from "./components/Navbar/Navbar"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { SimpleGallery } from "./components/SimpleGallery/SimpleGallery";

function App() {
  


  return (
  <div className="app">
     
   
     <BrowserRouter>
     <Navbar />
    <Routes>
        <Route path="/simple-gallery"  element={<SimpleGallery/>} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
