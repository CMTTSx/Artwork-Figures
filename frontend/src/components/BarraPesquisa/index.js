import React from 'react';

//Importando styles
import styles from './BarraDePesquisa.css'

//Importando Imagem
import searchIcon from '../../assets/pesquisar.png'

export default function BarraPesquisa() {

  //Função Botao pesquisar
  function pesquisar() {
    alert('Clicou em pesquisar!')
  }


 return ( 
       
      <div className='Container'>
        
        <div className='Barra-de-pesquisa'>
          
          <input type="text" />

          <img onClick={pesquisar} className='pesquisar' src={searchIcon} alt="botao pesquisar" />

        </div>

        

      </div>     

  );
}