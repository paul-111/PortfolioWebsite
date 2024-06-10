import { Grid, Typography, Box, Container, useTheme, useMediaQuery } from '@mui/material'
import { interests } from '../constant/interest-constant';

export const Interest = () => {
  const theme = useTheme();
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isXLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  
  return (
    <Container sx={{bgcolor: '#e9eef7' }} maxWidth={'xl'} >
      <Typography sx={{ pt:{ xs: 3, sm: 2, md: 3}, mt: 7, color: '#248a8a' }} variant='h5'> Interest </Typography>
      <Grid container justifyContent="center" sx={{ p: { xs: '5% 5% 10% 5%',sm: '5% 5% 10% 5%',md: '0 10% 5% 10%'}}}>
        {interests.map((skill, index) => (
          <Grid item xs={5} sm={3} md={2} key={index} sx={{ p: {xs: 1}} } >
            <Box sx={{ textAlign: 'center', p: {xs: 2}}} >
              <img
                src={skill.icon}
                alt={skill.name}
                style={{
                  width: '35px', 
                  height: '35px', 
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