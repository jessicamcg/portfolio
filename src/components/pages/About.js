import { Box } from '@mui/system';
import React from 'react';
import ProfilePic from '../../images/profilepic.JPG'

function About() {
    
    const styles = {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: "8px solid #FFCCBC"
      };
    return (
        <Box 
            id="about" 
            sx={{ display: 'flex', flexDirection: 'row', width:4/5, justifyContent: 'space-evenly', alignContent: 'center', height:'100vh' }} 
            className="mx-auto my-3"
        >
            <img 
                src = {`${ProfilePic}`}
                style = {styles}    
                className="my-auto"
            />            
            <Box
                sx={{width:3/5, flexGrow: 1}}
                className="my-auto"
            >
                <h4>Jessica Guico</h4>
                <p>Full Stack Web Developer</p>
                <p>Houston, Texas</p>
            </Box>
            

        </Box>
    )
}

export default About;