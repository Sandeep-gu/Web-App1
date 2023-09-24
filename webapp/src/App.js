import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Resister from './pages/Resister';
import Revenue from './pages/Revenue';
import Addsales from './pages/Addsales';
import Topsales from './pages/Topsales';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        
          <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/resister" element={<Resister/>}/>
          <Route exact path="/revenue" element={<Revenue/>}/>
          <Route exact path="/addsales" element={<Addsales/>}/>
          <Route exact path="/topsales" element={<Topsales/>}/>

        </Routes>
          
        
        

      </Router>
        

    </div>
  );
}

export default App;
