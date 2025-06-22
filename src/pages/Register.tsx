import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  TextField, 
  Button, 
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff, 
  Email, 
  Lock,
  PersonAdd as RegisterIcon,
  Login as LoginIcon,
  Translate,
  Spellcheck,
  Star,
  VpnKey,
  BarChart,
  Language,
  Group
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    referralEmail: '',
    rememberLogin: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const features = [
    { icon: <Translate sx={{ color: '#0077b6' }} />, text: 'Dịch thuật đa ngôn ngữ với AI' },
    { icon: <Spellcheck sx={{ color: '#0077b6' }} />, text: 'Luyện tập viết và từ vựng' },
    { icon: <Star sx={{ color: '#0077b6' }} />, text: '200 điểm miễn phí khi đăng ký' },
    { icon: <VpnKey sx={{ color: '#0077b6' }} />, text: 'Quản lý API key cá nhân' },
    { icon: <BarChart sx={{ color: '#0077b6' }} />, text: 'Thống kê sử dụng chi tiết' },
  ];

  return (
    <Container maxWidth="lg" className="py-8">
      <Paper elevation={4} sx={{ borderRadius: '16px', overflow: 'hidden' }}>
        <Box className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Form */}
          <Box className="md:col-span-7 p-8">
            <Box>
              <Box display="flex" alignItems="center" mb={1}>
                <Language sx={{ color: '#d9534f', fontSize: 32, mr: 1 }} />
                <Typography variant="h4" component="h1" className="font-bold text-red-500">
                  Vi-Translator
                </Typography>
              </Box>
              <Typography variant="body2" className="text-gray-500 mb-4">
                Dịch thuật và luyện tập ngôn ngữ thông minh
              </Typography>

              <ToggleButtonGroup
                value="register"
                exclusive
                fullWidth
                sx={{ mb: 4 }}
              >
                <ToggleButton onClick={() => navigate('/login')} value="login">
                  <LoginIcon sx={{ mr: 1 }} />
                  Đăng nhập
                </ToggleButton>
                <ToggleButton value="register" sx={{ bgcolor: 'primary.main', color: 'white', '&.Mui-selected': { bgcolor: 'primary.dark', color: 'white' } }}>
                  <RegisterIcon sx={{ mr: 1 }}/>
                  Đăng ký
                </ToggleButton>
              </ToggleButtonGroup>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Typography variant="subtitle2" className="font-semibold text-gray-600">Email</Typography>
                <TextField
                  fullWidth
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{ startAdornment: <InputAdornment position="start"><Email /></InputAdornment> }}
                />
                
                <Typography variant="subtitle2" className="font-semibold text-gray-600">Mật khẩu</Typography>
                <TextField
                  fullWidth
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Ít nhất 6 ký tự"
                  value={formData.password}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{ 
                    startAdornment: <InputAdornment position="start"><Lock /></InputAdornment>,
                    endAdornment: <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }}
                />

                <Typography variant="subtitle2" className="font-semibold text-gray-600">Xác nhận mật khẩu</Typography>
                <TextField
                  fullWidth
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Nhập lại mật khẩu"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{ 
                    startAdornment: <InputAdornment position="start"><Lock /></InputAdornment>,
                    endAdornment: <InputAdornment position="end">
                      <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }}
                />

                <Typography variant="subtitle2" className="font-semibold text-gray-600">Email người giới thiệu (tùy chọn)</Typography>
                <TextField
                  fullWidth
                  name="referralEmail"
                  placeholder="email@example.com"
                  value={formData.referralEmail}
                  onChange={handleChange}
                  variant="outlined"
                  InputProps={{ startAdornment: <InputAdornment position="start"><Group /></InputAdornment> }}
                />
                <Typography variant="caption" className="text-gray-500">
                  Nhập email người giới thiệu để mỗi người dùng nhận thêm 100 điểm
                </Typography>

                <FormControlLabel
                  control={<Checkbox name="rememberLogin" checked={formData.rememberLogin} onChange={handleChange} />}
                  label="Ghi nhớ đăng nhập sau khi đăng ký"
                  className="text-gray-600"
                />
                
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={isSubmitting}
                  startIcon={<RegisterIcon />}
                  sx={{ bgcolor: '#d9534f', '&:hover': { bgcolor: '#c9302c' }, py: 1.5, textTransform: 'none', fontSize: '1rem' }}
                >
                  {isSubmitting ? 'Đang tạo...' : 'Tạo tài khoản'}
                </Button>
              </form>
            </Box>
          </Box>

          {/* Right Column: Features */}
          <Box className="md:col-span-5 p-8" sx={{ bgcolor: 'primary.50' }}>
            <Box>
              <Box display="flex" alignItems="center" mb={2}>
                <Star sx={{ color: 'primary.main', mr: 1, fontSize: 28 }} />
                <Typography variant="h5" component="h2" className="text-primary-700 font-bold">
                  Tính năng nổi bật
                </Typography>
              </Box>
              <List>
                {features.map((feature, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      {feature.icon}
                    </ListItemIcon>
                    <ListItemText primary={feature.text} className="text-primary-600" />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register; 