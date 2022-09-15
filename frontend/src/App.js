
import React from 'react';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddPatient from "./components/AddPatient";
import Patients from "./components/Patients";
import About from "./components/About";
import PatientDetails from "./components/PatientDetails";
import UpdatePatient from './components/UpdatePatient';


function App() {
  return (
    

<BrowserRouter>
<div className='container'>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} exact />
    <Route path="/add" element={<AddPatient />} exact />
    <Route path="/patients" element={<Patients />} exact />
    <Route path="/updatePatient/:id" element={<UpdatePatient />} exact />
    <Route path="/about" element={<About />} exact />
    <Route path="/patient/:id" element={<PatientDetails />} exact />
  </Routes>
  <Footer />
</div>
</BrowserRouter>
  );
}

export default App;
