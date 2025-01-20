import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cursor from "./pageSections/Cursor";
import View from './pageSections/View';
import Product from './pageSections/Product';
import ProductDetails from './pageSections/ProductDetails';
import About from './pageSections/About';
import Contact from './pageSections/Contact';
import Estates from './AllEstates/Emerald';
import AreasDetails from './pageSections/AreasDetails';
import AreaDetailstwo from './pageSections/AreaDetailstwo';
// import EstateDetails from './AllEstates/EstateDetails'
// import More from './AllEstates/More';
import Terms from './pageSections/Terms'
import WhatsAppButton from './pageSections/whatsApp/WhatsAppButton';

function App() {
  return (
    <div className='App'>
      {/* Cursor component for global rendering */}
      <Cursor />

      {/* BrowserRouter for route handling */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<View />} />
          <Route path='/projects/:nav_id' element={<Product />} />
          <Route path='/ProjectDetails/:id' element={<ProductDetails />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/estate/:estateName/:estate_id' element={<Estates />} />
          <Route path='/area/:areaName' element={<AreasDetails />} />
          <Route path='/location/:id' element={<AreaDetailstwo />} />
          {/* <Route path='/estate' element={<EstateDetails />} /> */}
          {/* <Route path='/moreestate' element={<More />} /> */}
          <Route path='/terms and condition' element={<Terms />} />
          <Route path='/whatsapp' element={<WhatsAppButton/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
