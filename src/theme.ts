import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors'; // Importa as cores

let theme = createTheme({
  palette: {
    primary: {
      main:'#111111', // Cor primária
    },
    secondary: {
      main: green[500], // Cor secundária
    },
  },
  typography: {
    fontFamily: 'Lato, Arial, sans-serif', // Exemplo de configuração de fontes
  },
});

theme = responsiveFontSizes(theme);
export default theme;
