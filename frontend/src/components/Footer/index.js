import React from 'react';

//Importando styles
import styles from './Footer.css'

//Importando Imagem
import formas_de_pagamento from '../../assets/metodosdepagamento.png'


export default function Footer() {
 return ( 
       <footer>
         
        <div className='alinhamento-div'>
          
        <div className='Institucional'>
          
          <div className='titulo'>INSTITUCIONAL</div>
          <div className='info'>Home</div>
          <div className='info'>Sobre a Artwork Figures</div>
          <div className='info'>Entregas</div>
  
          </div>
  
          <div className='Minha-Conta'>
  
          <div className='titulo'>MINHA CONTA</div>
          <div className='info'>Meu Cadastro</div>
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
            <div>FAQ - Dúvidas Frequentes</div>
            <div>Trocas e Devoluções</div>
  
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