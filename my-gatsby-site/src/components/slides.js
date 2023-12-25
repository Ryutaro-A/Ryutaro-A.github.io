import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Image from '../pages/image'
import { Link } from "gatsby";
import Grid from '@mui/material/Grid';

const BasicCard = (props) => {

    return (
        // <Card sx={{ width: 320 }} >
        <Card sx>
        <div>
            <Typography level="title-lg">{ props.title }</Typography>
            <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
            >
            </IconButton>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
            <Image filename={props.image_path} alt="Gatsbyスペースマン" />
        </AspectRatio>
        <CardContent orientation="horizontal">
            <div>
            <Typography level="body-sm">
                { props.description }
            </Typography>
            </div>
            <Button
            variant="secondary"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
            component={Link}
            to={props.slide_url}
            target="_blank"
            >
            more
            </Button>
        </CardContent>
        </Card>
    );
}


const BasicCardGrid = (props) => {
    const cards = [
    ];

    for (let i = 0; i < props.items.length; i++) {
        cards.push(
            <Grid item xs={15} md={6} sm={7} lg={3}>
                <BasicCard
                title={props.items[i]["title"]}
                image_path={props.items[i]["image_path"]}
                slide_url={props.items[i].slide_url}
                description={props.items[i].description}/>
            </Grid>
        )
    }
    return(
        <Grid container spacing={1} justifyContent="left">
            {cards}
        </Grid>
    )
}

export default BasicCardGrid;