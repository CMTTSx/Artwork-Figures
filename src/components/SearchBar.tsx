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

export default function InputWithIcon() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      ml: 'auto',
      backgroundColor: '#C5D1EB',
      p: 1,
    }}>

      <Box sx={{ '& > :not(style)': { m: 2 }, display: 'flex', mx: 'auto', backgroundColor: 'white', borderRadius: 10,}}>
        <FormControl variant="standard">
          <Input
            fullWidth={true}
            disableUnderline={true}
            placeholder='Digite o que você procura...'
            endAdornment={
              <InputAdornment position='end' >
                <Button sx={{ml: 20, color: 'white', borderRadius: '50%'}}>
                <SearchIcon sx={{cursor: 'pointer', backgroundColor: '#00d0ff',  borderRadius: 5,  }} />
                </Button>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      {/*Minha Conta*/}
      <Button sx={{
        height: 60,
        ml: -50,
        color: '#000',

      }}>
        <AccountCircleIcon sx={{pr: 0.1}} />
        Minha Conta
      </Button>

     
      <Box sx={{
        ml: 50,
      }}>
        <Drawer />
      </Box>

     


    </Box>
  );
}
