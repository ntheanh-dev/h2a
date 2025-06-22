import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  ContactMail as ContactIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'Trang chủ', icon: <HomeIcon />, path: '/' },
    { text: 'Giới thiệu', icon: <InfoIcon />, path: '/about' },
    { text: 'Liên hệ', icon: <ContactIcon />, path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box className="w-64">
      <Toolbar>
        <Typography variant="h6" noWrap component="div" className="text-blue-600 font-bold">
          H2A
        </Typography>
      </Toolbar>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              onClick={() => setMobileOpen(false)}
              className="hover:bg-blue-50"
            >
              <ListItemIcon className="text-blue-600">
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box className="min-h-screen bg-gray-50">
      <AppBar position="static" className="bg-white shadow-sm">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="mr-2 text-gray-800"
            >
              <MenuIcon />
            </IconButton>
          )}
          
          <Typography variant="h6" component="div" className="flex-grow text-blue-600 font-bold">
            H2A
          </Typography>
          
          {!isMobile && (
            <Box className="flex space-x-4">
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  className={`text-gray-700 hover:text-blue-600 ${
                    location.pathname === item.path ? 'text-blue-600' : ''
                  }`}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" className="flex-grow">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout; 