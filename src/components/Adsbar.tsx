import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image';

//Icons
import freteRapidoIcon from '../assets/frete-rapido.png';
import cardParcelaIcon from '../assets/cardIcon.png';
import favoritoIcon from '../assets/coracao.png';

export default function adsbar() {
  return (
    <Box sx={{
      display: 'flex',
      backgroundColor: '#F7F7F7'
    
    }}>
    
    <Box sx={{display: 'flex', flexDirection: 'row', width: '100%' }}>
    
    <Box sx={{ml: 8, mt: 1, display: 'flex' }}>
    <Image src={freteRapidoIcon} alt='freterapidoicon' />
    <Typography>FRETE GRÁTIS PARA TODO O BRASIL. APROVEITE!</Typography>
    </Box>

    <Box sx={{display: 'flex', mt: 1, ml: 14,}}>
      <Image src={cardParcelaIcon} alt='cardparcelaIcon' />
      <Typography>PARCELAMENTO EM ATÉ 12X SEM JUROS NO CARTÃO</Typography>
    </Box>

    <Box sx={{display: 'flex', mt: 1, ml: 14,}}>
      <Box sx={{mt: 0.3}}><Image src={favoritoIcon} alt='favoritoIcon' /></Box>
      <Typography sx={{pl: 1}}>NÃO TEM NA LOJA? FAÇA SEU PEDIDO!</Typography>
    </Box>


    </Box>

    </Box>
  )
}

