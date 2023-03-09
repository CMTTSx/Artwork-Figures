import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import shoppingCartIcon from '../assets/carrinho.png';
import { Typography } from '@mui/material';
import Image from 'next/image';

type Anchor = 'right';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      LISTA ITENS
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
            <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{
              mr: 10,
              ml: -50,
              mt: 0,
            }}>
              <Image src={shoppingCartIcon} alt='shoppingCartIcon' />
              <Typography sx={{
                mt: 0,
                ml: -2.7,
                color: 'red',
                borderRadius: 10,
                fontWeight: 600,

              }}>0</Typography>
            </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
