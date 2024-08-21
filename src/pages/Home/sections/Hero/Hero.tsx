import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Box, Container, Grid, Typography, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Button, Snackbar } from '@mui/material';
import Avatar from '../../../../assets/imgs/foto.jpg';
import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from '../../../../components/StyledButton/StyledButton'; 
import { AnimatedBackground } from '../../../../components/AnimatedBackground/AnimatedBackground'; 

const StyledHero = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: '20px',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    height: 'auto', // Ajusta a altura para caber no conteúdo em telas menores
    padding: '70px', 
  },
}));

const BackgroundWrapper = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  overflow: 'hidden', 
});

const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledImg = styled('img')({
  width: '100%',
  maxWidth: '250px',
  borderRadius: '50%',
  border: '2px solid white',
});

const ModalContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  minWidth: '400px', // Define a largura mínima do modal
});


const HighlightText = styled(Typography)({
    fontWeight: 'bold',
    marginBottom: '16px',
  });

const ContactModal = ({ open, handleClose }) => {
  // Função para copiar o e-mail para a área de transferência
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aespalaor@gmail.com');
    // Mostrar Snackbar para informar que o e-mail foi copiado
    handleOpenSnackbar();
  };

  // Função para abrir o WhatsApp
  const handleOpenWhatsApp = () => {
    window.open('https://wa.me/5511941376712', '_blank');
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Função para abrir o Snackbar
  const handleOpenSnackbar = () => {
    setSnackbarOpen(true);
  };

  // Função para fechar o Snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
    <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Fale Comigo</DialogTitle>
        <DialogContent>
          <ModalContent>
            <HighlightText variant="h6">
              Vamos fazer algo incrível juntos!
            </HighlightText>
            <Box display="flex" alignItems="center" mb={2} onClick={handleOpenWhatsApp}>
              <WhatsAppIcon color="success" sx={{ cursor: 'pointer' }} />
              <Typography variant="body1" sx={{ ml: 1, cursor: 'pointer' }} onClick={handleOpenWhatsApp}>
                +55 11 94137-6712
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" onClick={handleCopyEmail}>
              <MailOutlineIcon color="primary" sx={{ cursor: 'pointer' }} />
              <Typography variant="body1" sx={{ ml: 1, cursor: 'pointer' }}>
                aespalaor@gmail.com
              </Typography>
            </Box>
          </ModalContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="E-mail copiado para a área de transferência"
      />
    </>
  );
};

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  // Função para abrir o modal de contato
  const handleContactClick = () => {
    setOpenModal(true);
  };

  // Função para fechar o modal de contato
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <StyledHero>
      <BackgroundWrapper>
        <AnimatedBackground />
      </BackgroundWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5} display="flex" justifyContent="center">
            <ContentWrapper>
              <StyledImg src={Avatar} alt="Aline Espalaor" />
            </ContentWrapper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color="inherit" variant="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3rem' } }}>
              Aline Espalaor
            </Typography>
            <Typography color="inherit" variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, mt: { xs: 1, sm: 2 } }}>
              Digital Experience (DX)
            </Typography>
            <Grid container spacing={3} justifyContent="center" mt={2}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton
                  startIcon={<DownloadIcon />}
                  component="a"
                  href="../../../public/files/Aline-Espalaor_-CV.pdf"
                  download
                >
                  Download CV
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton
                  startIcon={<MailOutlineIcon />}
                  onClick={handleContactClick} // Abre o modal ao clicar
                >
                  Fale Comigo
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <ContactModal open={openModal} handleClose={handleCloseModal} />
    </StyledHero>
  );
};

export default Hero;
