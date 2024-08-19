import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme.ts';

// Cria a raiz do aplicativo React
const root = createRoot(document.getElementById('root')!);

// Renderiza o aplicativo dentro do StrictMode, com ThemeProvider e CssBaseline
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
