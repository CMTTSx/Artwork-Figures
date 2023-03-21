import React from 'react'

//Import Components
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar'
import Adsbar from '../components/Adsbar'
import Main from '../components/Main'
import { Box } from '@mui/material';

function HomePage() {
  return (
   <Box sx={{overflow: 'hidden', width: '100%' }}>
   <Navbar />
   <SearchBar />
   <Adsbar />
   <Main />
   </Box>
  )
}

export default HomePage