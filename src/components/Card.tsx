import { Box, Button, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import Image from 'next/image'

//Import Icons
import kakashiIcon from '../assets/kakashi.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';


const buttonConfig = {
  display: 'flex',
  mx: 'auto',
  mt: 5,
  mb: 2,
  backgroundColor: '#84F076',
  color: '#000',
  fontFamily: 'Slackey',
  fontStyle: 'cursive',

  "&:hover": {
    backgroundColor: '#00e817',

  }

}

const iconConfig = { 
  mb: 1,
  borderRadius: '50%',
  color: '#000',
  width: '30px',
  height: '40px',


  "&:hover" : {
    backgroundColor: '#89FF52',
  }

}



export default function Card() {


  //Favorite Function
  function favorite() {
    alert('Adicionado aos favoritos!')
  }

  //Share Function
  function shareProduct() {
    alert('Compartilhado!')
  }

  return (
    <Box sx={{
    }}>

    <Box>
    <Image src={kakashiIcon} alt='imagemIcon' />
    
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
    
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      ml: 'auto',
      mr: 'end',
      mt: -28,
    }}>
      <Button sx={iconConfig}
      onClick={favorite}
      >
      <FavoriteBorderIcon />
      </Button>
      <Button
      onClick={shareProduct}
      sx={iconConfig}>
      <ShareIcon />
      </Button>


    </Box>
    
    </Box>
    </Box>
    <Typography sx={{
        display: 'flex',
        fontFamily: 'Scheherazade New , serif',
        fontWeight:  'bold',
        color: '#000',

    }}>NARUTO</Typography>
    <Typography sx={{display: 'flex'}}>Action Figure Kakashi Hatake</Typography>
    <Button sx={buttonConfig}>Adicionar ao Carrinho</Button>
    <Typography sx={{textAlign: 'end', pr: 3, color: '#00BF2A'}}>R$190,80</Typography>
    <Typography sx={{textAlign: 'end', pr: 3}}>Ou 12x de 15,90 s/Juros</Typography>
    </Box>
  )
}

