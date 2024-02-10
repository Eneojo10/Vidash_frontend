import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import View from './pageSections/View';
import Product from './pageSections/Product';
import ProductDetails from './pageSections/ProductDetails';
import About from './pageSections/About';
import Contact from './pageSections/Contact';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<View/>} />
          <Route path='/product' element={<Product/>}/>
          <Route path='/ProductDetails' element={<ProductDetails/>} />
          <Route path='About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
