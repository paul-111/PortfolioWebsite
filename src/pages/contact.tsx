import { Grid, Typography, Box, Container, useTheme, useMediaQuery } from '@mui/material'
import { contact } from '../constant/contact-constant';

export const Contact = () => {
  const theme = useTheme();
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isXLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  
  return (
    <Container sx={{ height: '35vh' }} maxWidth={'xl'}>
      <Typography  sx={{ pt:{ xs: 3, sm: 2, md: 3}, color: '#248a8a' }} variant='h5'> Contact </Typography>
      <Grid container justifyContent="center" sx={{ p: { xs: '10% 10% 10% 10%',sm: '5% 5% 10% 5%', md: '2% 5% 5% 5%'}}}>
        {contact.map((skill, index) => (
          <Grid item xs={6} sm={2} md={1} key={index} sx={{ p: {xs: 2}} }>
            <Box sx={{ textAlign: 'center' }}>
              <img
                src={skill.icon}
                alt={skill.name}
                style={{
                  width: '30px', 
                  height: '28px', 
                  marginTop: isXSmallScreen ? '10px' :
                  isSmallScreen ? '15px' :
                  isMediumScreen ? '20px' :
                  isLargeScreen ? '30px' :
                  isXLargeScreen ? '40px' : '0',
                 }}
              />
              <Typography sx={{ pt: 1, color: 'grey' }} >{skill.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};