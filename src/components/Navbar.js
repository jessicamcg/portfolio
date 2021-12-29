import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

export default function MenuAppBar() {
  const styles = {
    right: 0,
    left: '88%',
    height: '100vh'
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: "#DDA15E",
      },
      secondary: {
        main: "#963A2F",
      },
      info: {
        main: "#000000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }} className="d-flex flex-column fixed-bottom align-middle justify-content-center" style={styles}>
        <React.Fragment>
          <Fab aria-label="home" className="m-2" href="#home">
            <HomeIcon color="secondary"/>
          </Fab>
          <Fab aria-label="skills" className="m-2" href="#skills">
            <FactCheckIcon color="secondary"/>
          </Fab>
          <Fab aria-label="work" className="m-2" href="#projects">
            <WorkIcon color="secondary"/>
          </Fab>
          <Fab aria-label="contact" className="m-2" href="#contact">
            <ConnectWithoutContactIcon color="secondary"/>
          </Fab>
        </React.Fragment>
      </Box>
    </ThemeProvider>
  );
}