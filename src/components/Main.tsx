import { Box, Grid, Paper, Typography, styled } from '@mui/material'
import React from 'react'

//Components
import Card from '../components/Card'
import Navigation from '@/components/Navigation'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: '5em',
  color: theme.palette.text.secondary,
}));

const itemConfig = {
  boxShadow: 10,
  cursor: 'pointer',

  "&:hover": {
    boxShadow: 20,
  }
}


export default function Main() {
  return (
    <Box sx={{ backgroundColor: '#FBF9FF' }}>

      <Typography sx={{
        pl: 11,
        pt: 5,
        fontSize: 30,
        fontWeight: 'bold',
        mb: 15,
      }}>Mais Procurados</Typography>


      <Box sx={{ width: '100%', height: '50rem' }}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          <Grid item xs={2} sx={{ mx: 'auto' }}>
            <Item sx={itemConfig}>
              <Card />
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Navigation />

    </Box>
  )
}

