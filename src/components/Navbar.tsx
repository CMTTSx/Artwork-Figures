import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


//Icons
import Logo from '../../src/assets/Logotipo.png';


const NavbarConfig = {
    minWidth: '320px',
    display: 'flex',
    backgroundColor: '#1F2232',
    height: {
        xs: 'auto',
        xl: 94,
    },

    '@media (min-width: 1024px)': {
        height: 95,
    },
    
}

const LogoConfig = {
    ml: {
        xl: '10rem',
    },
    cursor:'pointer',
    
    '@media (min-width: 320px)': {
        ml: 8.5,
    },
    '@media (min-width: 360px)': {
        ml: 11.1,
    },
    '@media (min-width: 375px)': {
        ml: 12.5,
    },
    '@media (min-width: 390px)': {
        ml: 13,
    },
    '@media (min-width: 412px)': {
        ml: 13.5,
    },
    '@media (min-width: 425px)': {
        ml: 15,
    },
    '@media (min-width: 480px)': {
        ml: 18.5,
    },
    '@media (min-width: 600px)': {
        ml: 25,
    },
    '@media (min-width: 712px)': {
        ml: 33,
    },
    '@media (min-width: 768px)': {
        ml: 35,
    },
    '@media (min-width: 800px)': {
        ml: 40,
    },
    '@media (min-width: 912px)': {
        ml: 45,
    },
    '@media (min-width: 1024px)': {
        ml: 0,
    },
    '@media (min-width: 1440px)': {
        ml: 10,
    },
}

const TypoNavbar = {
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
    p: 3,
    ml: {
        xs: -30,
        xl: 'auto',
    },
    mt: {
        xs: 10,
    },

    fontSize: {
        xs: 10,
        xl: 14
    },
    '@media (min-width: 360px)': {
        ml: -32.2,
    },
    '@media (min-width: 375px)': {
        ml: -32,
    },
    '@media (min-width: 390px)': {
        ml: -32,
    },
    '@media (min-width: 768px)': {
        ml: -32,
    },
    '@media (min-width: 800px)': {
        ml: -31,
    },
    '@media (min-width: 1024px)': {
        ml: 62,
        mt: 1,
    },
    '@media (min-width: 1280px)': {
        ml: 80,
        mt: 1,
    },
    '@media (min-width: 1440px)': {
        mt: 0,
        fontSize: 14,
    },
    '@media (min-width: 1920px)': {
        ml: 'auto',
        mr: 20,
        mt: 0,
        fontSize: 14,
    },
   
}

export default function Navbar() {
    
    return (
    
    <Box sx={NavbarConfig}>
        
       <Link href='/'>
       <Box sx={LogoConfig}>
       <Image src={Logo} alt='Logo' />
       </Box>
       </Link>

       <Box sx={TypoNavbar}>
        <Box sx={{pr: 1, cursor: 'pointer',  "&: hover" : {
        color: '#5899E2'
    }}}><h3>Seja Franqueado |</h3></Box>
        <Box sx={{pr: 1, cursor: 'pointer',  "&: hover" : {
        color: '#5899E2'
    }}}><h3>Nossas Lojas |</h3></Box>
        <Box sx={{pr: 1, cursor: 'pointer',  "&: hover" : {
        color: '#5899E2'
    }}}><h3>Fale Conosco</h3></Box>
       </Box>
         
    </Box>
  )
}

