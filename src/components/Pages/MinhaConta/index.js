import React from 'react';

import './styles.css'

//Importando Components
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';

export default function MinhaConta() {
 return (
   <div>
     <Header />
       <main className='mainDiv'>
       <h1>Minha Conta</h1>
       </main>
      <Footer />
   </div>
 );
}