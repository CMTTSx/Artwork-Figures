import React from "react";

//Importando React-Router-DOM
import { Link } from 'react-router-dom';

//Importando Styles
import './styles.css'

//Importando Imagem
import Logo from '../../../assets/Logotipo.png'


export default function Header() {
    return(
        
        
    <header>

        <Link to='/'>
            <img className="Logo" src={Logo} alt="Logotipo" />
        </Link>    

        <div className="div-items">
        
        <Link to='/Seja-Franqueado'>
            <h6>Seja Franqueado</h6>
        </Link>
            <h6>|</h6>
        <Link to='nossas-lojas'>
            <h6>Nossas Lojas</h6>
        </Link>
            <h6>|</h6>
        <Link to='fale-conosco'>
            <h6>Fale Conosco</h6>
        </Link>

       

        </div>

        
        

    </header>
    
    )
}