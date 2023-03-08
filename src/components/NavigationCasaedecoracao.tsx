import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';


//Import Icons
import todaLoja from '../assets/TodaLoja.png';
import vestuarioIcon from '../assets/vestuarioIcon.png';
import AcessoriosIcon from '../assets/acessoriosIcon.png';
import colecionaveisIcon from '../assets/colecionaveisIcon.png';
import casaedecoracaoIcon from '../assets/casaedecoracaoIconWhiteVersion.png';

export default function Navigation() {
    
    return (
      <Box sx={{
        display: 'flex',
        width: '64%',
        mx: 'auto',
        mt: 45,
        boxShadow: 15,
      }}>
        
      <Link href='/'><Button fullWidth={true}><Image src={todaLoja} alt='todaLoja'/></Button></Link>
      <Link href='/vestuario'><Button fullWidth={true}><Image src={vestuarioIcon} alt='vestuario'/></Button></Link>
      <Link href='/acessorios'><Button fullWidth={true}><Image src={AcessoriosIcon  } alt='AcessoriosIcon' width={255} /></Button></Link>
      <Box sx={{mt: 2.2}}>
      <Link href='/colecionaveis'><Button fullWidth={true}><Image src={colecionaveisIcon} alt='colecionaveisIcon' width={250}/></Button></Link>
      </Box>
      <Box>
      <Link href='/casa-e-decoracao'><Button fullWidth={true} sx={{backgroundColor: '#000', '&:hover' :{backgroundColor: '#1C3144'}}}><Image src={casaedecoracaoIcon} alt='casaedecoracaoIcon' width={239} height={122} /></Button></Link>
      </Box>
      </Box>
    )
}

