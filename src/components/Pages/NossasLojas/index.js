import React from 'react';
import './styles.css'

import Navbar from '../../Layout/Header';
import Footer from '../../Layout/Footer';

export default function NossasLojas() {
 return (
   <div>
    <Navbar />
       <div className='mainDiv'>
       <h1>Nossas Lojas</h1>
       </div>
    <Footer />
   </div>
 );
}