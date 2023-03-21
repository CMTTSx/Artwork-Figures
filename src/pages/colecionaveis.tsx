import React from 'react'
import Link from 'next/link'

//Components
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar'
import Adsbar from '../components/Adsbar'
import Main from '../components/MainColecionaveis'
import { Box } from '@mui/material';


function Vestuario() {
  return (
    <Box sx={{overflow: 'hidden', width: '100%' }}>

    <Navbar />
    <SearchBar />
    <Adsbar />
    <Main />
   </Box>
  )
}

export default Vestuario