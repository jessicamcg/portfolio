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
            HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, MySQL, NoSQL, 
            <br /><br />
            Express.js, Progressive Web Applications, React, MongoDB, MERN
            <br /><br />
            </Typography>
            <Typography>
            Git, GitHub, Visual Studio Code, Insomnia, Responsive Design, UX/UI, Object-Oriented Programming, 
            <br /><br />
            Heroku, RESTful Routes/APIs, Object-Relational Mapping, Model-View-Controller, 
            <br /><br />
            CRUD, Progressive Web Applications, GraphQL, Apollo GraphQL
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
            <h4 >Skills</h4>
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