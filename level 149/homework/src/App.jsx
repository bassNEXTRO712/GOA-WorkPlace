import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Footer from './footer';
import Main from './components/main';
import Rules from './components/rules';
import CarList from './components/carList';
import BookedCars from "./components/bookedCars";

import mercedes from './components/pictures/mercedes.jpg';
import bmw from './components/pictures/bmw.jpg';
import porche from './components/pictures/porche.jpg';
import ferari from './components/pictures/ferari.jpg';
import subaru from './components/pictures/subaru.jpg';
import dodge from './components/pictures/dodge.jpg';
import lamborghini from './components/pictures/lamborghini.jpg';
import astonmartin from './components/pictures/astonmartin.jpg';
import mitsubish from './components/pictures/mitsubish.jpg';

import { useState, useEffect } from "react";

const carLists = [
  { src: mercedes, alt: 'mercedes' },
  { src: bmw, alt: 'bmw' },
  { src: porche, alt: 'porche' },
  { src: ferari, alt: 'ferari' },
  { src: subaru, alt: 'subaru' },
  { src: dodge, alt: 'dodge' },
  { src: lamborghini, alt: 'lamborghini' },
  { src: astonmartin, alt: 'aston martin' },
  { src: mitsubish, alt: 'mitsubish' }
];

function App() {
  const [cars, setCars] = useState(() => {
    const stored = localStorage.getItem("bookedCars");
    return stored ? JSON.parse(stored) : [];
  });

  const handleDelete = (indexToRemove) => {
    setCars(prev => prev.filter((_, i) => i !== indexToRemove));
  };

  useEffect(() => {
    localStorage.setItem("bookedCars", JSON.stringify(cars));
  }, [cars]);

  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route index element={<Main />} />
        <Route path="rules" element={<Rules />} />
        <Route path="carList" element={<CarList carLists={carLists} setCars={setCars} />} />
        <Route path="bookedcars" element={<BookedCars booked={cars} onDelete={handleDelete} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
