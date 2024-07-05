import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Backdrop,
  Button,
  CircularProgress,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { APP_FONT } from '../../constants/font';

interface DecodedToken {
  email: string;
}

const drawerWidth = 240;

const drawerTab = {
  marginY: '6px',
  color: '#fff',
  '&:hover': {
    color: '#fff',
  },
};

export const HeaderDrawer = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const [isLoading, setLoading] = useState<boolean>(false);
  const [focusedItem, setFocusedItem] = useState(-1);
  const token = localStorage.getItem('token');
  let user: DecodedToken | null = null;
 

  useEffect(() => {
    if (currentPath === '/dashboard') {
      setFocusedItem(0);
    }
  }, [currentPath]);

  const handleLogout = async () => {
    try {
      localStorage.removeItem('user');
      navigate('/');
    } catch (error: any) {
      setLoading(false);
    }
  };

  const drawerContent = (
    <Box sx={{ marginTop: '30px' }}>
      <List>
        <Box sx={{ marginBottom: '10px' }}>
          <ListItem
            key={'Dashboard'}
            onClick={() => navigate('/dashboard')}
            disablePadding
          >
            <ListItemButton
              selected={focusedItem === 0}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: '#4c00b0',
                  '&:hover': {
                    backgroundColor: '#4c00b0',
                  },
                },
              }}
            >
              <ListItemText sx={drawerTab} primary={'Dashboard'} />
            </ListItemButton>
          </ListItem>
        </Box>
        <Box sx={{ marginTop: 'auto', marginBottom: '10px', paddingX: '16px' }}>
          <Button onClick={handleLogout} fullWidth>
            <Typography
              sx={{
                fontFamily: APP_FONT,
                fontWeight: '600',
                fontSize: '18px',
                color: '#fff',
                textTransform: 'none',
              }}
            >
              Logout
            </Typography>
          </Button>
        </Box>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#4c00b0',
        }}
      >
        <Toolbar>
          <MenuIcon sx={{ mr: 2 }} />
          <Typography variant="h6" noWrap>
            Talha  Shabbir Task
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#B39DDB',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>
      {isLoading && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
          onClick={() => {}}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </Box>
  );
};
