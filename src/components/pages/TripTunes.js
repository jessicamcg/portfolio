import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    IMG
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    Trip Tunes
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    description
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}