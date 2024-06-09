import { Stack, Typography , Box, Container} from '@mui/material'
import React from 'react'

const avatar =  require("../assets/img/photo.png");

const name = 'Barsha Paul';
const colors = ['red', '#0077b6', 'orange', 'green', 'blue', 'indigo', '#a2d2ff'];

const ColoredName = () => {
  return (
    <>
      {name.split('').map((char, index) => (
        <span style={{ color: colors[index % colors.length] }}>{char}</span>
      ))}
    </>
  );
};

export const About = () => {
  return (
    <Stack >
      <Typography sx={{p: 3, color: '#248a8a' }} variant='h6'> Hello there !!! </Typography>
      <Container  maxWidth={'sm'} >
        <Box 
            component="img" 
            src={avatar} 
            alt="mountain" 
            sx={{ 
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '10%'
              }} 
        />
        <Typography sx={{p: 3, color: '#248a8a', textAlign: 'center', mb: {sm: 15} }} variant='h6'> 
          My name is <ColoredName /> and i'm currently working as a Junior Engineer in Frontend. <br/>
          I aspire to be a problem solver who crafts scalable product that makes your server breath a little and <br/> also a passionate photographer who captures lil tribes playing in the corner of the mountain <br/> or the ocean breeze that makes people smile for holding their hair together with a cute coconut in hand
        </Typography>
      </Container>
    </Stack>
  )
}