import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';
import Article from './pages/article/article';
import Search from './pages/search/search';
import AuthorNews from './pages/authorNews/authorNews';
import CategoryNews from './pages/categoryNews/categoryNews';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Warning from './components/warning/warning';

import './globalStyles/reset.module.css';
import './globalStyles/colors.module.css';

function App() {
  const [theme, setTheme] = React.useState('light');

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Header setTheme={setTheme} theme={theme}/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/artigo/:titleNews' element={<Article/>}/>
            <Route path='/categoria/:category' element={<CategoryNews/>}/>
            <Route path='/autor/:username' element={<AuthorNews/>}/>
            <Route path='/pesquisar' element={<Search/>}/>
            <Route path="*" element={<Warning title='Error: 404' description='Não foi possível achar nenhuma página correspondente.' svg='error' isFull={true}/>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
