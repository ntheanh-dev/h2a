import { Box, Typography, Container, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle, Code, Palette, Router } from '@mui/icons-material';

const About = () => {
  const technologies = [
    { icon: <Code />, text: 'React 18 với TypeScript' },
    { icon: <Router />, text: 'React Router DOM cho navigation' },
    { icon: <Palette />, text: 'Material UI cho UI components' },
    { icon: <CheckCircle />, text: 'Tailwind CSS cho styling' },
  ];

  return (
    <Container maxWidth="lg" className="py-8">
      <Paper elevation={3} className="p-8 bg-gradient-to-br from-primary-50 to-white">
        <Typography variant="h3" component="h1" gutterBottom className="text-primary-800 mb-6">
          Về dự án Writing App FE
        </Typography>
        
        <Typography variant="body1" paragraph className="text-primary-700 mb-6">
          Đây là một ứng dụng React hiện đại được xây dựng với các công nghệ tiên tiến nhất.
          Dự án sử dụng Vite làm build tool để có tốc độ phát triển nhanh chóng.
        </Typography>
        
        <Typography variant="h5" gutterBottom className="text-primary-700 mb-4">
          Công nghệ sử dụng:
        </Typography>
        
        <List>
          {technologies.map((tech, index) => (
            <ListItem key={index} className="py-2">
              <ListItemIcon className="text-primary-500">
                {tech.icon}
              </ListItemIcon>
              <ListItemText 
                primary={tech.text} 
                className="text-primary-700"
              />
            </ListItem>
          ))}
        </List>
        
        <Box className="mt-8 p-4 bg-primary-100 rounded-lg border border-primary-200">
          <Typography variant="h6" gutterBottom className="text-primary-800">
            Tính năng chính:
          </Typography>
          <Typography variant="body2" className="text-primary-700">
            • Routing với React Router DOM<br/>
            • UI components từ Material UI<br/>
            • Styling với Tailwind CSS<br/>
            • Type safety với TypeScript<br/>
            • Hot reload với Vite
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About; 