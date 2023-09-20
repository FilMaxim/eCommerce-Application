import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const TemporaryDrawer = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor, children: React.ReactNode | React.ReactNode[]) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={(event: React.MouseEvent) => {
        if (event.currentTarget === event.target) {
          toggleDrawer(anchor, false);
        }
      }}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {children}
    </Box>
  );

  return (
    <>
      <Button
        color="secondary"
        onClick={toggleDrawer('left', true)}
      >
        Filter
      </Button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {list('left', children)}
      </Drawer>
    </>
  );
};
