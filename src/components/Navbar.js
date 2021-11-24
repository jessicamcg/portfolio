import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function MenuAppBar() {
  const styles = {
    right: 0,
    bottom: 0,
    left: '85%',
  }
  return (
    <Box sx={{ flexGrow: 1 }} className="m-2 d-flex flex-column fixed-bottom" style={styles}>
      <React.Fragment>
        <Fab aria-label="home" className="m-2" href="#home">
          <HomeIcon />
        </Fab>
        <Fab aria-label="work" className="m-2" href="#projects">
          <WorkIcon />
        </Fab>
        <Fab aria-label="contact" className="m-2" href="#contact">
          <ConnectWithoutContactIcon />
        </Fab>
      </React.Fragment>
    </Box>
  );
}