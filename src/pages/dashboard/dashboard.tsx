import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { HeaderDrawer } from '../../components/header/headerDrawer';
import {
  ThemeProvider,
  Toolbar,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import { APP_FONT } from '../../constants/font';
import { useEffect } from 'react';
import CountriesTable from '../../components/countriesData/countriesTable';

const theme = createTheme({
  typography: {
    fontFamily: APP_FONT,
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#4c00b0',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 600,
        },
      },
    },
  },
});

export const Dashboard = () => {
  const isMobileOrTablet = useMediaQuery('(max-width: 600px)');

  useEffect(()=> {
    console.log('on dashboard', localStorage.getItem("token"))
  }, [])
  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeaderDrawer />
      </ThemeProvider>
      <Box component="main" sx={{ flexGrow: 1, p: isMobileOrTablet ? 2 : 5 }}>
        <Toolbar />
      </Box>
      <CountriesTable />
    </Box>
  );
};
