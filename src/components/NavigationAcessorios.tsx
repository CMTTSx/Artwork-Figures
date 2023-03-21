import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';


//Import Icons
import todaLoja from '../assets/toda_loja.png';
import vestuarioIcon from '../assets/vestuarioIcon.png';
import AcessoriosWhiteVersion from '../assets/AcessoriosWhiteVersion.png';
import colecionaveisIcon from '../assets/colecionaveisIcon.png';
import casaedecoracaoIcon from '../assets/casaedecoracaoIcon.png';


const BoxContainerConfig = {
  display: 'flex',
  flexWrap: 'wrap',
  mx: 'auto',
  mt: 30,
  boxShadow: 15,
  width: '43.6%',

  '@media (min-width: 320px)': {
    width: '10.4rem',

  },
  '@media (min-width: 768px)': {
    width: '42rem',
  },
  '@media (min-width: 1024px)': {
    width: '52rem',
  },

}

export default function Navigation() {
    
    return (
      <Box sx={BoxContainerConfig}>
        
      <Link href='/'><Button fullWidth={true}><Image src={todaLoja} alt='todaLoja' width={150} height={100} /></Button></Link>
      <Link href='/vestuario'><Button fullWidth={true}><Image src={vestuarioIcon} alt='vestuarioIcon' /></Button></Link>
      <Link href='/acessorios'><Button fullWidth={true} sx={{backgroundColor: '#000', '&:hover' :{backgroundColor: '#1C3144'}}}><Image src={AcessoriosWhiteVersion} alt='AcessoriosWhiteVersion' /></Button></Link>
      <Link href='/colecionaveis'><Button fullWidth={true}><Image src={colecionaveisIcon} alt='colecionaveisIcon' /></Button></Link>
      <Link href='/casa-e-decoracao'><Button fullWidth={true}><Image src={casaedecoracaoIcon} alt='casaedecoracaoIcon' /></Button></Link>


      </Box>
    )
}

