import React from 'react';

import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';

//Importando styles
import styles from './Footer.css'

//Importando Imagem
import formas_de_pagamento from '../../../assets/metodosdepagamento.png'


export default function Footer() {
 return ( 
       <footer>
         
        <div className='alinhamento-div'>
          
        <div className='Institucional'>
          
          <div className='titulo'>INSTITUCIONAL</div>
          <Link> 
            <div className='info'>Home</div>
          </Link>
          
          <Link to='/Sobre-nos'> 
            <div className='info'>Sobre a Artwork Figures</div>
          </Link>

         <Link to='/Entregas'>
            <div className='info'>Entregas</div>
         </Link>
  
          </div>
  
          <div className='Minha-Conta'>
  
          <Link to='/Minha-Conta'>
            <div className='titulo'>MINHA CONTA</div>
          </Link>

          <div className='info'>Meus Pedidos</div>
          <div className='info'>Meu Carrinho</div>
  
          </div>
  
          <div className='Fale-Conosco'>
  
            <div className='titulo'>FALE CONOSCO</div>
            <div>(38) 26848-0064 </div>
            <div>atendimento@artworkfigures.com.br</div>
  
          </div>
  
          <div className='Duvidas'> 
  
            <div className='titulo'>DÚVIDAS</div>
            
            <Link to='/FAQ'>
              <div>FAQ - Dúvidas Frequentes</div>
            </Link>

            <Link to='/Trocas-e-Devolucoes'>
              <div>Trocas e Devoluções</div>
            </Link>
  
          </div>

          <div className='Forma-de-Pagamento'>
            <div className='titulo'>FORMAS DE PAGAMENTO</div>
            <img className='formas-de-pagamento-icon' src={formas_de_pagamento} alt="meios de pagamento" />
          </div>

        </div>
         
        <h5>© CSM SOLUÇÕES E DESENVOLVIMENTO. Todos Direitos Reservados 2021.</h5>

       </footer>
  );
}