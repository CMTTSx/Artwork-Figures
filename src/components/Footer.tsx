import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Image from 'next/image';

import formaDePagamentoIcon from '../assets/formas_de_pagamento.png';
import androidIOSIcon from '../assets/apple-android.png';

const itemTitleConfig = {
  color: '#fff',
  fontFamily: 'Scheherazade New, serif',
  fontStyle: 'regular',
  fontSize: 20,
  cursor: 'pointer',
  textAlign: 'center',
}

const itemConfig = {
  color: '#fff',
  fontFamily: 'Scheherazade New, serif',
  fontStyle: 'regular',
  fontSize: 20,
  cursor: 'pointer',
  textAlign: 'center',

  "&: hover": {
    color: '#5899E2',
  }
}

const ContainerConfig = { 
  display: 'flex',
  width: '100%', 
  backgroundColor: '#1F2232', 

  '@media (min-width: 320px)': {
    flexDirection: 'column',
    mt: 20, 
    p: 0,
    pb: 0,
  },
  '@media (min-width: 1024px)': {
    flexDirection: 'row',
    mt: 20, 
    pl: 5,
    pr: 4,
    ml: 'auto',
  },
  '@media (min-width: 1440px)': {
    flexDirection: 'row',
  },
}

const BoxConfig = {
  pl: 0,
  pt: 0,
  pb: 0,

  '@media (min-width: 320px)': {
    mt: 5,
  },
  '@media (min-width: 1024px)': {
    ml: 1,
  },
  '@media (min-width: 1440px)': {
    mx: 'auto',
    pb: 2,
  },

}


export default function BasicGrid() {
  return (
    <Box sx={ContainerConfig}>

      <Box sx={BoxConfig}>
        <Typography sx={itemTitleConfig}>INSTITUCIONAL</Typography>
        <Typography sx={itemConfig}>Home</Typography>
        <Typography sx={itemConfig}>Sobre a Artwork Figures</Typography>
        <Typography sx={itemConfig}>Entregas</Typography>
      </Box>

      <Box sx={BoxConfig}>
        <Typography sx={itemTitleConfig}>MINHA CONTA</Typography>
        <Typography sx={itemConfig}>Meu Cadastro</Typography>
        <Typography sx={itemConfig}>Meu Pedido</Typography>
        <Typography sx={itemConfig}>Meu Carrinho</Typography>
      </Box>

      <Box sx={BoxConfig}>
        <Typography sx={itemTitleConfig}>DÚVIDAS</Typography>
        <Typography sx={itemConfig}>FAQ - Dúvidas frequentes</Typography>
        <Typography sx={itemConfig}>Trocas e devoluções</Typography>
      </Box>

      <Box sx={BoxConfig}>
        <Typography sx={itemTitleConfig}>FALE CONOSCO</Typography>
        <Typography sx={itemConfig}>(38) 26848-0064</Typography>
        <Typography sx={itemConfig}>atendimento@artworkfigures.com.br</Typography>
      </Box>

      <Box sx={BoxConfig}>
        <Typography sx={itemTitleConfig}>FORMAS DE PAGAMENTO</Typography>
        <Box sx={itemConfig}><Image src={formaDePagamentoIcon} alt='formas-de-pagamento-icon' width={200} /></Box>
      </Box>

    </Box>
  );
}