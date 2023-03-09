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

  "&: hover" : {
    color: '#5899E2',
  }
}

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt: 20, backgroundColor: '#1F2232', p: 2 }}>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Box>
            <Typography sx={itemTitleConfig}>INSTITUCIONAL</Typography>
            <Typography sx={itemConfig}>Home</Typography>
            <Typography sx={itemConfig}>Sobre a Artwork Figures</Typography>
            <Typography sx={itemConfig}>Entregas</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.4}>
          <Box>
              <Typography sx={itemTitleConfig}>MINHA CONTA</Typography>
              <Typography sx={itemConfig}>Meu Cadastro</Typography>
              <Typography sx={itemConfig}>Meu Pedido</Typography>
              <Typography sx={itemConfig}>Meu Carrinho</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.8}>
          <Box>
              <Typography sx={itemTitleConfig}>DÚVIDAS</Typography>
              <Typography sx={itemConfig}>FAQ - Dúvidas frequentes</Typography>
              <Typography sx={itemConfig}>Trocas e devoluções</Typography>
          </Box>
        </Grid>

        <Grid item xs={2}>
        <Box>
            <Typography sx={itemTitleConfig}>FALE CONOSCO</Typography>
            <Typography sx={itemConfig}>(38) 26848-0064</Typography>
            <Typography sx={itemConfig}>atendimento@artworkfigures.com.br</Typography>
        </Box>
        </Grid>

        <Grid item xs={0}>
        <Box>
          <Typography sx={itemTitleConfig}>FORMAS DE PAGAMENTO</Typography>
        <Box sx={{ml: 2}}><Image src={formaDePagamentoIcon} alt='formas-de-pagamento-icon' width={200} /></Box>
        </Box>
        </Grid>


        <Grid item xs={0}>
        <Box sx={{cursor: 'pointer', }}><Image src={androidIOSIcon} alt='androidIOSIcon' width={200} /></Box>
        </Grid>



      </Grid>
    </Box>
  );
}
