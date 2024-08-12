
import './App.css';
import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Insertnotes from './pages/insertnotes';
import Viewnotes from './pages/viewnotes';
function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/'  element={<Home/>}/>
      <Route exact path='/register'  element={<Register/>}/>
      <Route exact path='/login'  element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/insertnotes' element={<Insertnotes/>}></Route>
      <Route path='/viewnotes' element={<Viewnotes/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
