import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

// Estilizando o AppBar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyContent: "center", // Centraliza o Toolbar dentro do AppBar
}));

// Estilizando o Toolbar para centralizar os itens
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  width: '100%', // Garante que o Toolbar ocupe toda a largura disponível
  display: 'flex',
  justifyContent: 'space-evenly', // Centraliza os itens dentro do Toolbar

}));

const NavBar = () => {
  return (
    <StyledAppBar position="absolute">
      <StyledToolbar>
        <Button color="inherit">Sobre mim</Button>
        <Button color="inherit">Skills</Button>
        <Button color="inherit">Projetos</Button>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;
