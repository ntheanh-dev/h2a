import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import TestComponent from '../components/TestComponent';

const Home = () => {
  return (
    <Container maxWidth="lg" className="py-8">
      <Paper elevation={3} className="p-8 text-center bg-gradient-to-br from-primary-50 to-primary-100">
        <Box className="mb-6">
          <HomeIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        </Box>
        
        <Typography variant="h2" component="h1" gutterBottom className="text-primary-800">
          Chào mừng đến với Writing App FE
        </Typography>
        
        <Typography variant="h5" color="text.secondary" paragraph className="mb-8 text-primary-600">
          Một ứng dụng React hiện đại với TypeScript, Material UI và Tailwind CSS
        </Typography>
        
        <Box className="space-x-4 mb-8">
          <Button 
            variant="contained" 
            size="large"
            className="bg-primary-500 hover:bg-primary-600 text-white"
          >
            Bắt đầu
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            className="border-primary-500 text-primary-500 hover:bg-primary-50"
          >
            Tìm hiểu thêm
          </Button>
        </Box>

        <TestComponent />
      </Paper>
    </Container>
  );
};

export default Home; 