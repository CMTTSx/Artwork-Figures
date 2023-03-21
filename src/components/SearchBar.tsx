import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Typography } from '@mui/material';
import Drawer from './Drawer';

const BoxConfig = {
  overflowX: 'hidden',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  ml: 'auto',
  backgroundColor: '#C5D1EB',
  p: 1,

}

const ButtonConfig = {
  color: 'white',
  borderRadius: '50%',

  '@media (min-width: 320px)': {
    ml: 6,
  },
  '@media (min-width: 1024px)': {
    ml: 30,
  },
}

const MinhaContaConfig = {
  height: 60,
  ml: 4,
  color: '#000',

}

const SearchBarConfig = {
  display: 'flex',
  flexDirection: 'row',
}

const InputConfig = {
  backgroundColor: '#fff',
  mr: -70,
  height: 55,

  '@media (min-width: 320px)': {
    width: 100,
  },
  '@media (min-width: 360px)': {
    width: 130,
  },
  '@media (min-width: 375px)': {
    width: 120,
  },
  '@media (min-width: 425px)': {
    width: 180,
  },
  '@media (min-width: 540px)': {
    width: 180,
    ml: 8,
  },
  '@media (min-width: 600px)': {
    width: 250,
    ml: 20,
  },
  '@media (min-width: 768px)': {
    width: 300,
    ml: 20,
  },
  '@media (min-width: 1024px)': {
    width: '24rem',
    ml: 25,
  },
  '@media (min-width: 1280px)': {
    width: '24rem',
    ml: 42,
  },
  '@media (min-width: 1440px)': {
    width: '25rem',
    ml: 48,
  },
  '@media (min-width: 1920px)': {
    width: '51rem',
    ml: 48,
  },
  '@media (min-width: 2560px)': {
    width: '51em',
    ml: 128,
  },
  '@media (min-width: 3840px)': {
    width: '70em',
    ml: 180,
  },
}

const MinhaContaContainerConfig = { 
  display: 'flex', 
  flexDirection: 'row',

  '@media (min-width: 320px)': {
    ml: -4.5,
  },
  '@media (min-width: 360px)': {
    ml: -4,
  },
  '@media (min-width: 375px)': {
    ml: -2,
  },
  '@media (min-width: 425px)': {
    ml: -3.5,
  },
  '@media (min-width: 600px)': {
    ml: 2,
  },
  '@media (min-width: 712px)': {
    ml: -2,
    mr: 2,
  },
  '@media (min-width: 768px)': {
    ml: -2,
  },
  '@media (min-width: 1024px)': {
    ml: 2,
  },
  '@media (min-width: 1440px)': {
    ml: 3,
  },
  '@media (min-width: 3840px)': {
    ml: 73,
  },
  
}

const PesquisarButtonConfig = { 
  ml: 55.5,
  height: 55,
  color: '#fff',
  backgroundColor: '#3C91E6',
  "&: hover" : {
    backgroundColor: '#2B3A67',

  },

  '@media (min-width: 320px)': {
    width: 10,
    ml: 70
  },
  '@media (min-width: 1440px)': {
    width: 'auto',
    ml: 70
  },
}

export default function InputWithIcon() {
  return (
    <Box sx={BoxConfig}>

      <Box sx={SearchBarConfig}>
        <TextField label="Digite seu produto..." sx={InputConfig} />
        <Button sx={PesquisarButtonConfig}>
          <h6>Pesquisar</h6>  
        </Button>
      </Box>

      <Box sx={MinhaContaContainerConfig}>

        {/*Minha Conta*/}
        <Button sx={MinhaContaConfig}>
          <AccountCircleIcon />
          Minha Conta
        </Button>


        <Box sx={{
          ml: 50,
        }}>
          <Drawer />
        </Box>


      </Box>
    </Box>
  );
}
