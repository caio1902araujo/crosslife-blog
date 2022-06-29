import React from 'react';
import './globalStyles/reset.module.css';
import './globalStyles/colors.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import News from './pages/news';
import CategoryNews from './pages/categoryNews';
import Search from './pages/search';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Author from './pages/author';

function App() {
  const [theme, setTheme] = React.useState('light');

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Header setTheme={setTheme}/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:titleNews" element={<News/>}/>
            <Route path="/categoria/:category" element={<CategoryNews/>}/>
            <Route path="/autor/:nameAuthor" element={<Author/>}/>
            <Route path="/pesquisar" element={<Search/>}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
