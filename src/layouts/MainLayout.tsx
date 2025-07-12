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
  useMediaQuery,
  Avatar,
  Menu,
  MenuItem,
  Divider
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  ContactMail as ContactIcon,
  Login as LoginIcon,
  PersonAdd as RegisterIcon,
  AccountCircle,
  Logout
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Simulate user authentication state
  const isAuthenticated = false; // Change this to true to test authenticated state

  const menuItems = [
    { text: 'Trang chủ', icon: <HomeIcon />, path: '/' },
    { text: 'Giới thiệu', icon: <InfoIcon />, path: '/about' },
    { text: 'Liên hệ', icon: <ContactIcon />, path: '/contact' },
  ];

  const authItems = [
    { text: 'Đăng nhập', icon: <LoginIcon />, path: '/login' },
    { text: 'Đăng ký', icon: <RegisterIcon />, path: '/register' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logout clicked');
    handleProfileMenuClose();
  };

  const drawer = (
    <Box className="w-64 bg-gradient-to-b from-primary-50 to-white">
      <Toolbar>
        <Typography variant="h6" noWrap component="div" className="text-primary-600 font-bold">
          Writing App FE
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
              className="hover:bg-primary-100"
            >
              <ListItemIcon className="text-primary-500">
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} className="text-primary-700" />
            </ListItemButton>
          </ListItem>
        ))}
        
        <Divider className="my-2" />
        
        {!isAuthenticated ? (
          authItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
                onClick={() => setMobileOpen(false)}
                className="hover:bg-primary-100"
              >
                <ListItemIcon className="text-primary-500">
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} className="text-primary-700" />
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout} className="hover:bg-primary-100">
              <ListItemIcon className="text-primary-500">
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Đăng xuất" className="text-primary-700" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Box className="min-h-screen bg-primary-50">
      <AppBar position="static" className="bg-white shadow-sm border-b border-primary-200">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="mr-2 text-primary-600"
            >
              <MenuIcon />
            </IconButton>
          )}
          
          <Typography variant="h6" component="div" className="flex-grow text-primary-600 font-bold">
            Writing App FE
          </Typography>
          
          {!isMobile && (
            <Box className="flex items-center space-x-4">
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  className={`text-primary-700 hover:text-primary-500 hover:bg-primary-50 ${
                    location.pathname === item.path ? 'text-primary-500 bg-primary-50' : ''
                  }`}
                >
                  {item.text}
                </Button>
              ))}
              
              {!isAuthenticated ? (
                <>
                  <Button
                    component={Link}
                    to="/login"
                    variant="outlined"
                    size="small"
                    className="border-primary-500 text-primary-500 hover:bg-primary-50"
                  >
                    Đăng nhập
                  </Button>
                  <Button
                    component={Link}
                    to="/register"
                    variant="contained"
                    size="small"
                    className="bg-primary-500 hover:bg-primary-600 text-white"
                  >
                    Đăng ký
                  </Button>
                </>
              ) : (
                <IconButton
                  onClick={handleProfileMenuOpen}
                  className="text-primary-600"
                >
                  <Avatar className="w-8 h-8 bg-primary-500">
                    <AccountCircle />
                  </Avatar>
                </IconButton>
              )}
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

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
        className="mt-2"
      >
        <MenuItem onClick={handleProfileMenuClose} className="text-primary-700">
          <AccountCircle className="mr-2 text-primary-500" />
          Hồ sơ
        </MenuItem>
        <MenuItem onClick={handleLogout} className="text-primary-700">
          <Logout className="mr-2 text-primary-500" />
          Đăng xuất
        </MenuItem>
      </Menu>

      <Box component="main" className="flex-grow">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout; 