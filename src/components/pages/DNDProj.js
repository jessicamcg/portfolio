import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';


export default function DNDProj() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography sx={{ color: 'text.secondary' }}>
                    DND Character Tracker
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                    align='left'
                    variant='caption'
                >
                    <p>
                        Character Tracker for dungeon masters playing Dungeons & Dragons.
                    </p>
                    <p>
                        This application lets you log in and store an assortment of basic
                    </p>
                    <p>
                        NPC info that you can quickly access during a game.
                    </p>
                    <p>
                        You can also quickly auto generate and update old characters at the press of a button.
                    </p>
                </Typography>
                <Typography
                    align='left'
                    sx={{ mt: '20px !important' }}
                >
                    Built with: JavaScript, CSS, Handlebars, Bootstrap, Express, MySQL, sequelize
                </Typography>
                <Link 
                    href="https://github.com/jasonluxie/8-1-project-2"
                    sx={{ p:'10px' }}
                    underline="hover"
                >
                    GitHub Repo
                </Link>
                <Link 
                    href="https://dnd-dm-character-tracker.herokuapp.com/"
                    sx={{ p:'10px' }}
                    underline="hover"
                >
                    Live Website
                </Link>
            </AccordionDetails>
        </Accordion>
    );
}