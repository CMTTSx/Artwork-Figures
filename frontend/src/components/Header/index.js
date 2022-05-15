import React from "react";

//Importando Styles
import styles from '../Header/styles.css'

//Importando Imagem
import Logo from '../../assets/Logotipo.png'

export default function Header() {
    return(
        
        
        <header>
            
        <img className="Logo" src={Logo} alt="Logotipo" />

        <div className="div-items">
            <h6>Seja Franqueado</h6>
            <h6>|</h6>
            <h6>Nossas Lojas</h6>
            <h6>|</h6>
            <h6>Fale Conosco</h6>

        </div>

        </header>
    
    )
}