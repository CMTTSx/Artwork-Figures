import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image';

//Icons
import freteRapidoIcon from '../assets/frete-rapido.png';
import cardParcelaIcon from '../assets/cardIcon.png';
import favoritoIcon from '../assets/coracao.png';


const BoxConfig = {
  overflowX: 'hidden',
  display: 'flex',
  width: '100%',
  backgroundColor: '#F7F7F7',
  px: 2,
}

const AdsBarConfig = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  
  '@media (min-width: 320px)': {
    mx: 'auto',
    textAlign: 'center',
    pt: 1,
  },
  '@media (min-width: 1024px)': {
    fontSize: 16,
    flexDirection: 'row',
    
  },
}

const TypoAdsBar = {

  '@media (min-width: 320px)': {
    fontSize: 10,
    mx: 'auto',
  },
  '@media (min-width: 1024px)': {
    fontSize: 16,
    
  },
}

const ContainerConfig = {
  display: 'flex',
  flexDirection: 'row', 
  width: '100%',

  '@media (min-width: 320px)': {
    ml: -2,
  },
}

export default function AdsBar() {
  return (
    <Box sx={BoxConfig}>
    
    <Box sx={ContainerConfig}>
    
    <Box sx={AdsBarConfig}>
    <Box sx={{mx: 'auto',}} >
    <Image src={freteRapidoIcon} alt='freterapidoicon' />
    </Box>
    <Typography sx={TypoAdsBar}>FRETE GRÁTIS PARA TODO O BRASIL. APROVEITE!</Typography>
    </Box>

    <Box sx={AdsBarConfig}>
      <Box sx={{mx: 'auto',}} >
      <Image src={cardParcelaIcon} alt='cardparcelaIcon' />
      </Box>
      <Typography sx={TypoAdsBar}>PARCELAMENTO EM ATÉ 12X SEM JUROS NO CARTÃO</Typography>
    </Box>

    <Box sx={AdsBarConfig}>
      <Box sx={{mx: 'auto',}} >
      <Box><Image src={favoritoIcon} alt='favoritoIcon' /></Box>
      </Box>
      <Typography sx={TypoAdsBar}>NÃO TEM NA LOJA? FAÇA SEU PEDIDO!</Typography>
    </Box>

    </Box>

    </Box>
  )
}

