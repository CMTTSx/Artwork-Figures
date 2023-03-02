import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';


import todaLoja from '../assets/TodaLojaWhiteversion.png';
import vestuario from '../assets/vestuarioIcon.png';
import acessorios from '../assets/acessoriosIcon.png';
import colecionaveis from '../assets/colecionaveisIcon.png';
import casaDecoracao from '../assets/casaedecoracaoIcon.png';

function Navigation() {
  
    return (
    <Box sx={{
        display: 'flex',
        width: '55%',
        mx: 'auto',
        boxShadow: 10,
        borderRadius: '1%'

    }}>
        <Link href='/toda-loja' ><Button fullWidth={true} sx={{backgroundColor: '#000', "&:hover": {backgroundColor: '#000'}}} > <Image src={todaLoja} alt='todaLojaIcon' width={200}/></Button></Link>
        <Link href='/vestuario'><Button fullWidth={true} sx={{mt: 1.2}}><Image src={vestuario} alt='vestuario' width={180} /></Button></Link>
        <Link href='/acessorios' ><Button fullWidth={true} sx={{mt: 2.5}}><Image src={acessorios} alt='acessorios' width={190} /></Button></Link>
        <Link href='/colecionaveis'><Button fullWidth={true} sx={{mt: 3.8}}><Image src={colecionaveis} alt='colecionaveis' width={210} /></Button></Link>
        <Link href='/casa-e-decoracao'><Button fullWidth={true} sx={{ml: '-1rem', mt: 5}}><Image src={casaDecoracao} alt='casaDecoracao' width={200} /></Button></Link>
    </Box>
  )
}

export default Navigation