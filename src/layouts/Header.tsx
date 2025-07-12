import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Avatar, Box, Menu, MenuItem, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { CgProfile } from 'react-icons/cg';
import { CiLogout } from 'react-icons/ci';

const menuItems = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Giới thiệu', path: '/about' },
  { label: 'Liên hệ', path: '/contact' },
  { label: 'Đăng nhập', path: '/login' },
];

const Header = () => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const menuRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = menuItems.findIndex(item => location.pathname === item.path);
    const activeElement = menuRefs.current[activeIndex];
    
    if (activeElement) {
      const rect = activeElement.getBoundingClientRect();
      const parentRect = activeElement.parentElement?.getBoundingClientRect();
      
      if (parentRect) {
        setIndicatorStyle({
          left: rect.left - parentRect.left,
          width: rect.width
        });
      }
    }
  }, [location.pathname]);

  return (
    <div className="h-16 fixed top-0 left-0 right-0 z-50 bg-[#eaf6fa] flex items-center border-b border-gray-100">
      <Toolbar className="w-full flex justify-between min-h-0 px-6">
        {/* Logo */}
        <Box className="flex items-center gap-2">
          <Box className="bg-black rounded-md w-12 h-12 flex items-center justify-center">
            <Typography variant="h6" className="text-white font-bold">GP</Typography>
          </Box>
          <Typography variant="h6" className="font-bold tracking-wide">GOLF PRO</Typography>
        </Box>

        {/* Menu */}
        <Box className="flex gap-8 ml-12 relative">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                ref={(el) => { menuRefs.current[index] = el; }}
                className={`text-lg transition-all duration-300 ease-in-out relative ${
                  isActive 
                    ? 'text-black font-semibold' 
                    : 'text-gray-600 hover:text-black hover:scale-105'
                }`}
                style={{ paddingBottom: 4 }}
              >
                {item.label}
              </Link>
            );
          })}
          
          {/* Animated indicator line */}
          <div 
            className="absolute bottom-0 h-0.5 bg-black transition-all duration-300 ease-in-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`
            }}
          />
        </Box>

        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <IconButton color="inherit" {...bindTrigger(popupState)} size="large">
                                        <Avatar  alt="A" />
                                    </IconButton>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem>
                                            {' '}
                                            <Link
                                                to="/profile"
                                                className="flex items-center gap-1.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                                            >
                                                <CgProfile />
                                                Trang Cá Nhấn
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link
                                                to="/login"
                                                className="flex items-center gap-1.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                                            >
                                                <CiLogout />
                                                Đăng Xuất
                                            </Link>
                                        </MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>

        
      </Toolbar>
    </div>
  );
};

export default Header;