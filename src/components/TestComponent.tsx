import { Box, Typography } from '@mui/material';

const TestComponent = () => {
  return (
    <Box className="p-4 bg-blue-100 rounded-lg">
      <Typography variant="h6" className="text-blue-800">
        Test Component - Tailwind + Material UI
      </Typography>
      <Typography variant="body2" className="text-blue-600 mt-2">
        Nếu bạn thấy component này với styling, mọi thứ đang hoạt động tốt!
      </Typography>
    </Box>
  );
};

export default TestComponent; 