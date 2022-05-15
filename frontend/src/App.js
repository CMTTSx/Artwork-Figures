import React from 'react';

// Importando Components
import Header from './components/Header';
import BarraPesquisa from './components/BarraPesquisa';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';




export default function App() {
  return (

  <div>

    <div className="App">
    
        <Header />
        <BarraPesquisa />
        <Main />
        <Navbar />
        <Footer />
    

    </div>
  
  </div>
  );
}


