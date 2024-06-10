import {Box, Stack, Typography} from '@mui/material';

const mountain =  require("../assets/img/mountain.png");
const cloud =  require("../assets/img/cloud.png");
export const Hero = () => {
  return (
     <Stack sx={{height: {sm: '90vh',md: '100vh'}, bgcolor: '#c7cfed', width: '100%'}} alignItems={'center'}>
      <Stack  
      sx={{ 
      width: { xs: '90%', sm: '80%', md: '70%',  lg:' 60%', xl:' 50%' },
      height: '100%',
      pt: {  xs: '8%', sm: '1%', lg: '5%'}
      }} >
      <Box 
          component="img" 
          src={cloud} 
          alt="mountain" 
          sx={{ 
            width: { xs: '30%', sm: '30%', md: '25%' , lg:' 20%', xl:' 20%'}, 
            height: '10%'
            }} 
          
      />
      <Typography sx={{pt: {xs:'15%', sm:'3%',lg:'4%'}, textAlign: 'center', fontFamily: "'Reenie Beanie', cursive", color: '#248a8a' }} variant='h4'> I'm Barsha </Typography>
      <Typography  sx={{pt: {sm:'1%'}, textAlign: 'center', color: 'grey'}} variant='h6'> Software Engineer</Typography>
      <Box 
          component="img"
          src={cloud} 
          alt="mountain" 
          
          sx={{ 
            width: { xs: '30%', sm: '30%', md: '25%' , lg:' 20%', xl:' 20%'}, 
            height: '10%',
            marginLeft: 'auto',
            pt: {xs:'5%', sm:'3%', lg:'3%'}
              }} 
        />
       <Box 
          component="img" 
          src={mountain} 
          alt="mountain" 
          width= '80%'
          sx={{marginTop: 'auto', 
            marginLeft: 'auto', 
            marginRight: 'auto' }}
        />
        </Stack>
    </Stack>
  )
}