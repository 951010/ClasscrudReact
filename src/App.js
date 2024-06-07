import React, { Component } from 'react'
import './App.css';
import Form1 from './Form1';
import Tabledata from './Tabledata';
import Navbar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Form1/>}/>
        <Route path='/TableData' element={<Tabledata/>}/>
        <Route path='/edit/:id' element={<Form1/>}/>
       </Routes>
      </BrowserRouter>
  
     
     </div>
    )
  }
}




