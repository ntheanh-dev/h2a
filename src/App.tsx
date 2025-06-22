import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Tạo theme tùy chỉnh với bảng màu mới
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0096c7', // primary-500
      light: '#00b4d8', // primary-400
      dark: '#0077b6', // primary-600
      50: '#caf0f8',
      100: '#ade8f4',
      200: '#90e0ef',
      300: '#48cae4',
      400: '#00b4d8',
      500: '#0096c7',
      600: '#0077b6',
      700: '#023e8a',
      800: '#03045e',
      900: '#03045e',
    },
    secondary: {
      main: '#48cae4', // primary-300
      light: '#90e0ef', // primary-200
      dark: '#00b4d8', // primary-400
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#03045e', // primary-800
      secondary: '#0077b6', // primary-600
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
