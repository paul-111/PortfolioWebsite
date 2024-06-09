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
    <Container sx={{ height: '30vh' }} maxWidth={'xl'}>
      <Typography sx={{ p:{ xs: 3, sm: 2, md: 1}, color: '#248a8a' }} variant='h6'> Contact </Typography>
      <Grid container justifyContent="center">
        {contact.map((skill, index) => (
          <Grid item xs={5} sm={3} md={2} key={index}>
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