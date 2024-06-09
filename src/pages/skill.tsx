import { Grid, Typography, Box, Container, useTheme, useMediaQuery } from '@mui/material'
import { skillList } from '../constant/skill-constant';

export const Skill = () => {
  const theme = useTheme();
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isXLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  
  return (
    <Container sx={{ height: {sm: '100vh', md: '70vh'}, bgcolor: '#e1f1f2' }} maxWidth={'xl'}>
      <Typography sx={{ p:{ xs: 3, sm: 2, md: 1}, color: '#248a8a' }} variant='h6'> Skills </Typography>
      <Grid container justifyContent="center" padding={1}>
        {skillList.map((skill, index) => (
          <Grid item xs={5} sm={3} md={2} key={index}>
            <Box sx={{ textAlign: 'center',  p: {xs: 2} }}>
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