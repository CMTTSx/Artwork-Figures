import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Image from 'next/image';

import formaDePagamentoIcon from '../assets/formas_de_pagamento.png';

const itemTitleConfig = {
  color: '#fff',
  fontFamily: 'Scheherazade New, serif',
  fontStyle: 'regular',
  fontSize: 20,
  cursor: 'pointer',
  textAlign: 'center',

  "&: hover" : {
    color: 'red',
  }
}

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt: 20, backgroundColor: '#1F2232', p: 2 }}>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Box>
            <Typography sx={itemTitleConfig}>INSTITUCIONAL</Typography>
            <Typography sx={itemTitleConfig}>Home</Typography>
            <Typography sx={itemTitleConfig}>Sobre a Artwork Figures</Typography>
            <Typography sx={itemTitleConfig}>Entregas</Typography>
            <Typography sx={itemTitleConfig}>Trocas e devoluções</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.4}>
          <Box>
              <Typography sx={itemTitleConfig}>MINHA CONTA</Typography>
              <Typography sx={itemTitleConfig}>Meu Cadastro</Typography>
              <Typography sx={itemTitleConfig}>Meu Pedido</Typography>
              <Typography sx={itemTitleConfig}>Meu Carrinho</Typography>
          </Box>
        </Grid>
        <Grid item xs={1.8}>
          <Box>
              <Typography sx={itemTitleConfig}>DÚVIDAS</Typography>
              <Typography sx={itemTitleConfig}>FAQ - Dúvidas frequentes</Typography>
              <Typography sx={itemTitleConfig}>Trocas e devoluções</Typography>
          </Box>
        </Grid>

        <Grid item xs={2}>
        <Box>
            <Typography sx={itemTitleConfig}>FALE CONOSCO</Typography>
            <Typography sx={itemTitleConfig}>(38) 26848-0064</Typography>
            <Typography sx={itemTitleConfig}>atendimento@artworkfigures.com.br</Typography>
        </Box>
        </Grid>

        <Grid item xs={0}>
        <Box>
          <Typography sx={itemTitleConfig}>FORMAS DE PAGAMENTO</Typography>
        <Box sx={{ml: 3}}><Image src={formaDePagamentoIcon} alt='formas-de-pagamento-icon'/></Box>
        </Box>
        </Grid>

      </Grid>
    </Box>
  );
}
