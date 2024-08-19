import React from 'react';
import { styled } from '@mui/system';
import { Container, Grid, Paper, Typography } from '@mui/material'; // Importa Grid e Paper do Material-UI
import Avatar from '../../../../assets/imgs/foto.jpg';
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

// Define o componente estilizado StyledHero
const StyledHero = styled('div')({
  backgroundColor: 'black',
  color: 'white',
  padding: '20px',
  height: '100vh'
});

// Define o componente estilizado StyledImg
const StyledImg = styled('img')({
  width: '100%',
  borderRadius: '50%'
});

// Define o componente estilizado Item (usando Paper do MUI para estilização)
const Item = styled(Paper)({
  padding: '16px',
  textAlign: 'center',
  color: 'black',
  backgroundColor: 'white'
});

const Hero = () => {
  return (
    <StyledHero>

     <Container maxWidth="lg">

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <StyledImg src={Avatar} alt="Aline Espalaor" />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography color="primary" variant="h1" textAlign="center">Aline Espalaor</Typography>
          <Typography color="secondary" variant="h2" textAlign="center">Digital Experience (DX)</Typography>
          <Grid container  display="flex" justifyContent="center">
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <button>
                <DownloadIcon/>
                Download CV
            </button>

            </Grid>
            <Grid item xs={12} md={4}  display="flex" justifyContent="center">
            <button>
                <MailOutlineIcon/>
                Fale Comigo
            </button>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
      </Container>

      
    </StyledHero>
  );
};

export default Hero;
