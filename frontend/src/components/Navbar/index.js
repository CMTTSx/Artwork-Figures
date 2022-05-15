import React from 'react';

import styles from './Navbar.css'


//Importando Imagens
import TodaLoja from '../../assets/TodaLoja.png'
import Vestuario from '../../assets/vestuarioIcon.png'
import Acessorios from '../../assets/acessoriosIcon.png'
import Colecionaveis from '../../assets/colecionaveisIcon.png'
import Casaedecoracao from '../../assets/casaedecoracaoIcon.png'


export default function Navbar() {
 return (
   <div className='Container-Navbar'>

     <div className='NavCard'>
       <img className='TodaLoja' src={TodaLoja} alt="Toda_Loja" />
     </div>

     <div className='NavCard'>
       <img className='Vestuario' src={Vestuario} alt="Vestuario" />
     </div>

     <div className='NavCard'>
       <img className='Acessorios' src={Acessorios} alt="Acessorios" />
     </div>

     <div className='NavCard'>
       <img className='Colecionaveis' src={Colecionaveis} alt="Colecionaveis" />
     </div>

     <div className='NavCard'>
       <img className='Casaedecoracao' src={Casaedecoracao} alt="Casaedecoracao" />
     </div>

   </div>
 );
}