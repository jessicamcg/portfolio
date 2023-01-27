import React from 'react';
import { FormControlLabel, Switch, Grow } from '@mui/material';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Skills() {

    const card = (
        <React.Fragment>
          <CardContent>
            <Typography>
            JavaScript, jQuery, Node.js, Express.js, MERN
            <br /><br />
            React, HTML, CSS, Bootstrap,
            <br /><br />
            Java, Linux, Maven, Apache Tomcat, JDBC
            <br /><br />
            MySQL, NoSQL, MongoDB, 
            <br /><br />
            </Typography>
            <Typography>
            Git, GitHub, Visual Studio Code, IntelliJ, Object-Oriented Programming, 
            <br /><br />
            RESTful Routes/APIs, Object-Relational Mapping, Model-View-Controller,  Responsive Design, UX/UI
            <br /><br />
            Progressive Web Applications, GraphQL, Apollo GraphQL, Insomnia, Heroku
            </Typography>
          </CardContent>
        </React.Fragment>
      );

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };
    return (
        <div id="skills">
            <h4 >skills</h4>
            <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="Show"
            />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grow in={checked}>
                <Card variant="outlined">{card}</Card>
                </Grow>
            </Box>
        </div>
    )

}

export default Skills;