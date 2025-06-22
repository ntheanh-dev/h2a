import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { Home as HomeIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" className="py-16">
      <Paper elevation={3} className="p-12 text-center">
        <Box className="mb-8">
          <Typography variant="h1" component="h1" className="text-9xl font-bold text-gray-300 mb-4">
            404
          </Typography>
          <Typography variant="h3" component="h2" gutterBottom className="text-gray-800 mb-4">
            Trang không tìm thấy
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph className="text-gray-600 mb-8">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          </Typography>
        </Box>
        
        <Box className="space-x-4">
          <Button
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
            component={Link}
            to="/"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Về trang chủ
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Quay lại
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default NotFound; 