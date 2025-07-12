import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton
} from '@mui/material';
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Google,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/image/hero.png';

const TESTIMONIALS = [
  {
    text: 'App makes it easy to invest in real estate using cryptocurrency. Whether I\'m buying luxury villas or fractional shares in commercial properties, every transaction is seamless, secure, and transparent.',
    name: 'Isabella Garcia',
    company: 'Layers Capital',
    title: 'Global Real Estate Investment Firm',
    image: heroImage,
  },
];

const Login = () => {
  const navigate = useNavigate();
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const handleTestimonialNav = (dir: 'prev' | 'next') => {
    setTestimonialIdx(idx => {
      if (dir === 'prev') return idx === 0 ? TESTIMONIALS.length - 1 : idx - 1;
      return idx === TESTIMONIALS.length - 1 ? 0 : idx + 1;
    });
  };

  const testimonial = TESTIMONIALS[testimonialIdx];

  return (
    <Box className="min-h-screen flex font-inter">
      {/* Left: Image */}
      <Box className="hidden md:flex w-3/5 relative">
        <img src={heroImage} alt="hero" className="w-full h-full object-contain" />
        <Box className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.08)' }} />
      </Box>

      {/* Right: Login Form */}
      <Box className="flex flex-col w-2/5 md:w-2/5 items-center justify-center bg-white min-h-screen px-4 py-8 relative">
        
        <Box className="w-full max-w-md mx-auto flex flex-col items-center">
          <Typography variant="h4" className="font-bold mb-2 text-center text-black">Đăng nhập</Typography>

          <Box className="flex flex-col gap-3 mb-4 w-full">
            <Button 
              startIcon={<Google />} 
              variant="outlined" 
              size="large"
              className="normal-case transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-100 hover:border-black"
              sx={{
                borderColor: '#000000',
                color: '#000000',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  borderColor: '#000000',
                  backgroundColor: '#f3f4f6',
                }
              }}
            >
              Đăng nhập với Google
            </Button>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Login; 