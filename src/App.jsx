import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Dashboard/Home'
import SideNav from './Components/SideNav';
import Banner from './Components/Dashboard/Banner';
import About from './Components/Dashboard/About';
import Estate from './Components/Dashboard/Estate';
import Projects from './Components/Dashboard/Projects'
import CreateEstate from './Components/Dashboard/CreateEstate'
import Clients from './Components/Dashboard/clients';
import Tour from './Components/Dashboard/Tour'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />;
      <Route path='/nav' element={<SideNav />} />;
      <Route path='/banner' element={<Banner/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/estate' element={<Estate/>} />
      <Route path='/estate' element={<Estate/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/post' element={<CreateEstate/>} />
      <Route path='/inspection' element={<Clients/>} />
      <Route path='/tour' element={<Tour/>} />
    </Routes>
  );
}

export default App;
