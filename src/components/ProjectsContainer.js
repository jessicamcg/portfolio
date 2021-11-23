import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import TechBlog from './pages/TechBlog';
import DNDProj from './pages/DNDProj';
import Placeholder from './pages/Placeholder';
import TripTunes from './pages/TripTunes';
import TechBlogImg from '../images/homepage.png';
import DNDImg from '../images/project-2-dnd-char-tracker (1).gif';
import TripTunesImg from '../images/project-one-full-functionality.gif';
import PlaceholderImg from '../images/greetings.png';
import Stack from '@mui/material/Stack';


export default function TitlebarBelowImageList() {
    return (
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        className="mx-auto my-3"
            sx={{ flexShrink: 0, display: 'grid', width: '60%' }}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}`}
                        // srcSet={`${item.img}`}
                        alt={`${item.title}`}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.card}
                        position="below"
                    />
                </ImageListItem>
            ))}
        </Stack>
    );
}

const itemData = [
    {
        img: DNDImg,
        card: <DNDProj />,
        title: 'DND Character Tracker'
    },
    {
        img: PlaceholderImg,
        card: <Placeholder />,
        title: 'Placeholder'
    },
    {
        img: TripTunesImg,
        card: <TripTunes />,
        title: 'Trip Tunes'
    },
    {
        img: TechBlogImg,
        card: <TechBlog />,
        title: 'Tech Blog'
    },
];
