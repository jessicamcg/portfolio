import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function TechBlog() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
            >
                <Typography sx={{ color: 'text.secondary' }}>
                    Tech Blog
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                    align='left'
                    variant='caption'
                >
                    <p>
                        A CMS-style blog site where users can publish blogs and comments with the option to edit or delete their own posts
                    </p>
                </Typography>
                <Typography
                    align='left'
                    sx={{mt:'20px !important'}}
                >
                    Built with: JavaScript, CSS, Handlebars, Bootstrap, Express, MySQL, sequelize
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}