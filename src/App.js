import React from 'react';

import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';

// Importando Pages
import PaginaInicial from './components/Pages/PaginaInicial';
import MinhaConta from './components/Pages/MinhaConta';
import TodaLoja from './components/Pages/TodaLoja';
import Sobre from './components/Pages/Sobre';
import Entregas from './components/Pages/Entregas'
import FAQ from './components/Pages/FAQ';
import TrocaseDevolucao from './components/Pages/TrocasDevolucoes';
import SejaFranqueado from './components/Pages/SejaFranqueado';
import NossasLojas from './components/Pages/NossasLojas';
import FaleConosco from './components/Pages/FaleConosco';
import Vestuario from './components/Pages/Vestuario'
import Acessorios from './components/Pages/Acessorios'
import Colecionaveis from './components/Pages/Colecionaveis'
import CasaeDecoracao from './components/Pages/CasaeDecoracao'

export default function App() {
  return (

  <div>

    <div className="App">
    
       <Router>

         

        <Switch>
                <Route exact path='/' component={PaginaInicial} />
                <Route exact path='/Minha-Conta' component={MinhaConta} />
                <Route exact path='/Sobre-nos' component={Sobre} />
                <Route exact path='/Entregas' component={Entregas} />
                <Route exact path='/FAQ' component={FAQ} />
                <Route exact path='/Trocas-e-devolucoes' component={TrocaseDevolucao} />
                <Route exact path='/Toda-Loja' component={TodaLoja} />
                <Route exact path='/Seja-Franqueado' component={SejaFranqueado} />
                <Route exact path='/Nossas-Lojas' component={NossasLojas} />
                <Route exact path='/Fale-Conosco' component={FaleConosco} />
                <Route exact path='/Vestuario' component={Vestuario} />
                <Route exact path='/Acessorios' component={Acessorios} />
                <Route exact path='/Colecionaveis' component={Colecionaveis} />
                <Route exact path='/CasaeDecoracao' component={CasaeDecoracao} />


        </Switch>
       </Router>
    

    </div>
  
  </div>
  );
}


