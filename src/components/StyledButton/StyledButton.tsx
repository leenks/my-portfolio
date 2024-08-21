import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent', 
  color: theme.palette.primary.contrastText,
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: '3px', 
  padding: '5px 15px', 
  width: '100%', 
  maxWidth: '200px', 
  textAlign: 'center', 
  fontWeight: 'bold',
  textTransform: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
 
  '&:hover':{
    backgroundColor: theme.palette.secondary.light
  }
}));

export default StyledButton;
