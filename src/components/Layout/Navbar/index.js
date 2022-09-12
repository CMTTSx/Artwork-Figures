import React from 'react';

import './Navbar.css'

//Importando React-Router-DOM
import { Link } from 'react-router-dom';

//Importando Imagens
import TodaLojaIcon from '../../../assets/TodaLoja.png'
import Vestuario from '../../../assets/vestuarioIcon.png'
import Acessorios from '../../../assets/acessoriosIcon.png'
import Colecionaveis from '../../../assets/colecionaveisIcon.png'
import Casaedecoracao from '../../../assets/casaedecoracaoIcon.png'


export default function Navbar() {
 return (
   <div className='Container-Navbar'>

     <Link to='/Toda-Loja'>
        <div className='NavCard'>
          <img className='TodaLoja' src={TodaLojaIcon} alt="Toda_Loja" />
        </div>
     </Link>

     <Link to='/Vestuario'>
        <div className='NavCard'>
          <img className='Vestuario' src={Vestuario} alt="Vestuario" />
        </div>
     </Link>

     <Link to='/Acessorios'>
        <div className='NavCard'>
          <img className='Acessorios' src={Acessorios} alt="Acessorios" />
        </div>
     </Link>

     <Link to='Colecionaveis'>
        <div className='NavCard'>
          <img className='Colecionaveis' src={Colecionaveis} alt="Colecionaveis" />
        </div>
     </Link>

     <Link to='CasaeDecoracao'>
        <div className='NavCard'>
          <img className='Casaedecoracao' src={Casaedecoracao} alt="Casaedecoracao" />
        </div>
     </Link>

   </div>
 );
}