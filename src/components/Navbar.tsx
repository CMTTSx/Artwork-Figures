import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'

//Icons
import Logo from '../../src/assets/Logotipo.png';


const NavbarConfig = {
    display: 'flex',
    width: '100%',
    backgroundColor: '#1F2232',
    height: '6em' ,
}

const LogoConfig = { 
    ml: '10rem',
    cursor:'pointer',
}

const TypoNavbar = {
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
    p: 3,
    ml: 'auto',
    pr: 20,
    fontSize: 14,
}

export default function Navbar() {
    
    return (
    
    <Box sx={NavbarConfig}>
        
       <Box sx={LogoConfig}>
       <Image src={Logo} alt='Logo' />
       </Box>

       <Box sx={TypoNavbar}>
        <Box sx={{pr: 1, cursor: 'pointer',}}><h3>Seja Franqueado |</h3></Box>
        <Box sx={{pr: 1, cursor: 'pointer',}}><h3>Nossas Lojas |</h3></Box>
        <Box sx={{pr: 1, cursor: 'pointer',}}><h3>Fale Conosco</h3></Box>
       </Box>
         
    </Box>
  )
}
