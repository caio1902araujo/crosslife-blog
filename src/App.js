import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import News from './pages/news';
import CategoryNews from './pages/categoryNews';
import Search from './pages/search';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:titleNews" element={<News/>}/>
          <Route path="/categoria/:category" element={<CategoryNews/>}/>
          <Route path="/pesquisar" element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
