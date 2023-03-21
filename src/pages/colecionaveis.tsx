import React from 'react'
import Link from 'next/link'

//Components
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar'
import Adsbar from '../components/Adsbar'
import Main from '../components/MainColecionaveis'


function Vestuario() {
  return (
   <>
    <Navbar />
    <SearchBar />
    <Adsbar />
    <Main />
   </>
  )
}

export default Vestuario