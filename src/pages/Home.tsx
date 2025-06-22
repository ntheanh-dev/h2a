import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import TestComponent from '../components/TestComponent';

const Home = () => {
  return (
    <Container maxWidth="lg" className="py-8">
      <Paper elevation={3} className="p-8 text-center">
        <Box className="mb-6">
          <HomeIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        </Box>
        
        <Typography variant="h2" component="h1" gutterBottom className="text-gray-800">
          Chào mừng đến với H2A
        </Typography>
        
        <Typography variant="h5" color="text.secondary" paragraph className="mb-8">
          Một ứng dụng React hiện đại với TypeScript, Material UI và Tailwind CSS
        </Typography>
        
        <Box className="space-x-4 mb-8">
          <Button 
            variant="contained" 
            size="large"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Bắt đầu
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
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