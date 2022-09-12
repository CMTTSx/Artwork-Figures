import React from 'react';
import './styles.css'
//Componentes
import Navbar from '../../Layout/Header';
import Footer from '../../Layout/Footer';

export default function SejaFranqueado() {
 return (
   <div>
    <Navbar />
       <div className='mainDiv' >
       <h1>Seja Franqueado</h1>
       </div>
    <Footer />
   </div>
 );
}