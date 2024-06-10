import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Icon, Typography } from '@mui/material'
import React from 'react'

// Import images correctly
const pet = require("../assets/img/projects/petme.png");
const keepPhoto = require("../assets/img/projects/keep.png");
const todoPhoto = require("../assets/img/projects/todo.png");
const drum = require("../assets/img/projects/drum.png");

const CardComponent = ({ title, photo, description, buttonText }: { title: string, photo: string, description: string, buttonText: string }) => (
  <Card sx={{ width: '100%',height:'100%', background: '#f7f0f1'}}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" margin={4} textAlign={'center'} sx={{color: 'grey', fontFamily: "'Reenie Beanie', cursive",}}>
          {title}
        </Typography>
        <CardMedia
          component="img"
          width= "100"
          image={photo}
          alt={title}
        />
        <Typography variant="body2" color="text.secondary" margin={4} >
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      {/* <Button size="small" color="primary" >
        {buttonText}
      </Button> */}
    </CardActions>
  </Card>
)

export const Project = () => {
  // Use the imported image variables
  const cards = [
    { title: 'Drummer', photo: drum, description: 'Instrumental web app that portrays different drum sound based upon the drum/key being pressed via keyboard', buttonText: 'Share' },
    { title: 'Checklist', photo: todoPhoto, description: 'Simple web application to create or remove Checklist items', buttonText: 'Link' },
    { title: 'Pet Me', photo: pet, description: 'Static online e-commerce dog adoption website where user can purchse dogs through different plans as per their need', buttonText: 'Link' },
    { title: 'Keeper', photo: keepPhoto, description: 'Web application to pen down notes/ideas along with title or delete them as per user convenience', buttonText: 'Link' },
  ];

  return (
    <Container maxWidth={'xl'}>
      <Typography sx={{ pt:{ xs: 3, sm: 2, md: 3}, color: '#248a8a' }} variant='h5'> Pet Projects </Typography>
      <Grid container sx={{padding: {sm:'5%',md: '1%',lg: '8%'}}}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={12} md={6} key={index} sx={{ p: 5, justifyContent: 'center', alighnItems: 'center' }}>
            <CardComponent title={card.title} photo={card.photo} description={card.description} buttonText={card.buttonText} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
