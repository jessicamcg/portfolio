import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';


export default function TripTunes() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
            >
                <Typography sx={{ color: 'text.secondary' }}>
                    Trip Tunes
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography
                    align='left'
                    variant='caption'
                >
                    <p>
                        Generates a playlist based off of the user’s preferred artist and trip duration. 
                    </p>
                    <p> 
                        Allows you to save the generated playlist in Spotify to save the playlist.
                    </p>
                </Typography>
                <Typography
                    align='left'
                    sx={{mt:'20px !important'}}
                >
                    Built with: JavaScript, JQuery, CSS, HTML, Foundation
                </Typography>
                <Link 
                    href="https://github.com/jessicamcg/trip-tunes"
                    sx={{ p:'10px' }}
                >
                    GitHub Repo
                </Link>
                <Link 
                    href="https://jessicamcg.github.io/trip-tunes/"
                    sx={{ p:'10px' }}
                >
                    Live Website
                </Link>
            </AccordionDetails>
        </Accordion>
    );
}