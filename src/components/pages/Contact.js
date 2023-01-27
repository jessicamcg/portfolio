import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

function Contact() {
    const theme = createTheme({
        palette: {
          primary: {
            main: "#4c5d49",
          },
          secondary: {
            main: "#4c5d49",
          },
          info: {
            main: "#000000",
          },
        },
      });
    return (
        
    <ThemeProvider theme={theme}>
        <div>
            <h4 id="contact">contact me</h4>
            <a href="https://github.com/jessicamcg" target="_blank"><GitHubIcon color="secondary"/></a>
            <a href="https://www.linkedin.com/in/jessica-guico-833862222/" target="_blank"><LinkedInIcon color="secondary"/></a>
            <a href="https://docs.google.com/document/d/1cLpCixquGUS_2y4p8lZQ49vDviO3sdaHgpwgFUz787s/export?format=pdf"><AssignmentIndIcon color="secondary"/></a>
            {/* <a href="mailto:jessicamcguico@gmail.com">jessicamcguico@gmail.com</a> */}

        </div>
    </ThemeProvider>
    )
}

export default Contact;