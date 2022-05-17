import React from 'react';

//Importando React-Router-DOM
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

//Importando styles
import styles from './BarraDePesquisa.css'

//Importando Imagem
import searchIcon from '../../../assets/pesquisar.png'
import userIcon from '../../../assets/userIcon.png'

//Importando Components
import MinhaConta from '../../Pages/MinhaConta'

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

      <Link to='/Minha-Conta'>
        <div className='minhaConta' >
          <img className='userIcon' src={userIcon} alt="UserIcon" />
          <h5>Minha Conta</h5>
        </div>
      </Link>

      <Switch>
        <Route exact path='/Minha-Conta' component={MinhaConta} />
      </Switch>

    </div>

  );
}