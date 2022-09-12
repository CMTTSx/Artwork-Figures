import React from 'react';

import Header from '../../Layout/Header';
import BarraPesquisa from '../../Layout/BarraPesquisa';
import Main from '../../Layout/Main';
import Navbar from '../../Layout/Navbar';
import Footer from '../../Layout/Footer';

export default function PaginaInicial() {
 return (
   <div>

       <Header />
       <BarraPesquisa />
       <Main />
       <Navbar />
       <Footer />


   </div>
 );
}