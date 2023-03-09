import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';


//Import Icons
import todaLojaWhiteVersion from '../assets/TodaLojaWhiteversion.png';
import vestuarioIcon from '../assets/vestuarioIcon.png';
import AcessoriosIcon from '../assets/acessoriosIcon.png';
import colecionaveisIcon from '../assets/colecionaveisIcon.png';
import casaedecoracaoIcon from '../assets/casaedecoracaoIcon.png';

export default function Navigation() {
    
    return (
      <Box sx={{
        display: 'flex',
        width: '63%',
        mx: 'auto',
        mt: 45,
        boxShadow: 15,
      }}>
        
      <Link href='/'><Button fullWidth={true} sx={{backgroundColor: '#000', '&:hover' :{backgroundColor: '#1C3144'}}}><Image src={todaLojaWhiteVersion} alt='todaLojaIcon'/></Button></Link>
      <Link href='/vestuario'><Button fullWidth={true}><Image src={vestuarioIcon} alt='vestuarioIcon'/></Button></Link>
      <Link href='/acessorios'><Button fullWidth={true}><Image src={AcessoriosIcon} alt='AcessoriosIcon'/></Button></Link>
      <Link href='/colecionaveis'><Button fullWidth={true}><Image src={colecionaveisIcon} alt='colecionaveisIcon'/></Button></Link>
      <Link href='/casa-e-decoracao'><Button fullWidth={true}><Image src={casaedecoracaoIcon} alt='casaedecoracaoIcon'/></Button></Link>

      </Box>
    )
}

