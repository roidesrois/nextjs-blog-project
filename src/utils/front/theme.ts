'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA500',
      contrastText: '#2B2B2B'
    },
    secondary: {
      main:'#1E90FF',
      contrastText:'#3a3b3d'
    },
    background: {
      default: '#F4F4F4',
    },
    text: {
      primary: '#2B2B2B', 
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: '36px',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '16px',
      color: '#2B2B2B', 
    },
    button: {
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'none',
    },
  },
  spacing: 8, 
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 20px', 
          borderRadius: '4px', 
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF', 
          padding: '20px', 
          marginBottom: '20px', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          padding: '10px 20px', 
          borderRadius: '4px', 
        },
      },
    },
  },
});

export default theme;
