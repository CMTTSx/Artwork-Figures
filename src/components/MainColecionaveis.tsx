import { Box, Grid, Paper, Typography, styled } from '@mui/material'
import React from 'react'

//Components
import Card from './Card'
import Navigation from './NavigationColecionaveis'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: '5em',
  color: theme.palette.text.secondary,
}));

const itemConfig = {
  width: '80%',
  boxShadow: 10,
  cursor: 'pointer',

  "&:hover": {
    boxShadow: 20,
  }
}


export default function Main() {
  return (
    <Box sx={{ backgroundColor: '#FBF9FF', overflow: 'hidden' }}>

      <Typography sx={{
        pl: 11,
        pt: 5,
        fontSize: 30,
        fontWeight: 'bold',
        mb: 15,
      }}>Mais Procurados</Typography>


      <Box sx={{ width: '100%', height: '50rem' }}>
        <Grid sx={{ml: 0, mr: 'auto'}} container spacing={5} columns={32}>
          <Grid item xs={8}>
            <Item sx={itemConfig}><Card /></Item>
          </Grid>
          <Grid item xs={8}>
            <Item sx={itemConfig}><Card /></Item>
          </Grid>
          <Grid item xs={8}>
            <Item sx={itemConfig}><Card /></Item>
          </Grid>
          <Grid item xs={8}>
            <Item sx={itemConfig}><Card /></Item>
          </Grid>
          <Grid item xs={8}>
            <Item sx={itemConfig}><Card /></Item>
          </Grid>
          <Grid item xs={8}>
            <Item sx={itemConfig}><Card /></Item>
          </Grid>
          <Grid item xs={8}>
            <Item sx={itemConfig}><Card /></Item>
          </Grid>
          <Grid item xs={8}>
            <Item sx={itemConfig}><Card /></Item>
          </Grid>
        </Grid>
      </Box>
      
      <Navigation />

      </Box>
  )
}

