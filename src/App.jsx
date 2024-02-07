import React from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import WeatherInfo from './pages/weatherinfo';

import Dashboard from './Components/Dashboard';
import Login from './pages/Login';



export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<WeatherInfo/> } />
    <Route path="/login" element={<Login/> } />
    <Route path="/dashboard" element={<Dashboard/> } />
  </Routes>
  </BrowserRouter>
)}
    
    


    
