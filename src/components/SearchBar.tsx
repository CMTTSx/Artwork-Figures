import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import shoppingCartIcon from '../assets/carrinho.png';
import { Button, Typography } from '@mui/material';


export default function InputWithIcon() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      ml: 'auto',
      backgroundColor: '#C5D1EB',
      p: 1,
    }}>

      <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', mx: 'auto', backgroundColor: 'white', borderRadius: 10,}}>
        <FormControl variant="standard">
          <Input
            placeholder='Digite o que você procura...'
            endAdornment={
              <InputAdornment position='start' >
                <Button sx={{ ml: 25, color: 'white',}}>
                <SearchIcon sx={{cursor: 'pointer', backgroundColor: '#00d0ff',  borderRadius: 5,  }} />
                </Button>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      <Button sx={{
        mr: '22rem',
        ml: '-30rem',
        color: '#000',
        borderRadius: 4,
        backgroundColor: '#276FBF',

      }} variant='contained'>
        <AccountCircleIcon sx={{pr: 0.1}} />
        Minha Conta
      </Button>

      <Button sx={{
        mr: 50,
        ml: -40,
        mt: 0,
      }}>
      <Image src={shoppingCartIcon} alt='shoppingCartIcon'  />
      <Typography sx={{
        mt: 0,
        ml: -2.7,
        color: 'red',
        borderRadius: 10,
        fontWeight: 600,

      }}>0</Typography>
      </Button>



    </Box>
  );
}
