import { Box, Grid, Paper, Typography, styled } from '@mui/material'
import React from 'react'

//Components
import Card from '../components/Card'
import Navigation from '@/components/NavigationColecionaveis'
import Footer from './Footer';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: '5em',
  color: theme.palette.text.secondary,
}));

const GridContainerConfig = {
  display: 'flex',
  mx: 'auto',
  flexWrap: 'wrap',

}

const CardConfig = {
  mx:20,
  mt: 5,

  '@media (min-width: 320px)': {
    mx: 'auto',
  },
  '@media (min-width: 1440px)': {
    mx: 10,
  },
}

export default function Main() {
  return (
    <Box sx={{ backgroundColor: '#FBF9FF', overflow: 'hidden' }}>

      <Typography sx={{
        pl: 6,
        pt: 5,
        fontSize: 30,
        fontWeight: 'bold',
        mb: 10,
      }}>Mais Procurados</Typography>

     <Box sx={GridContainerConfig}>
      <Box sx={CardConfig}><Card /></Box>
      <Box sx={CardConfig}><Card /></Box>
      <Box sx={CardConfig}><Card /></Box>
      <Box sx={CardConfig}><Card /></Box>
      <Box sx={CardConfig}><Card /></Box>
      <Box sx={CardConfig}><Card /></Box>
      <Box sx={CardConfig}><Card /></Box>
      <Box sx={CardConfig}><Card /></Box>
     </Box>

      <Navigation />
      <Footer />
      </Box>
  )
}

