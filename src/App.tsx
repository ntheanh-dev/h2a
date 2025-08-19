import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// removed unused ThemeProvider/createTheme
import { Snackbar, Alert, Backdrop, CircularProgress, Box } from "@mui/material";
import { MainLayout } from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Writing from "./pages/Writing";
import VocabularyPractice from "./pages/VocabularyPractice";
// removed unused direct import of SentenceWriting
import BilingualPassage from "./pages/BilingualPassage";
import ListeningPractice from "./pages/ListeningPractice";
import SpeakingPractice from "./pages/SpeakingPractice";
import RequiredAuth from "./components/RequiredAuth";
import "./index.css";
import Authenticate from "./pages/Authenticated";
import { useEffect, useState } from "react";
import { setNotifyHandler, type NotifySeverity } from "./utils/notify";
import { setOverlayHandler } from "./utils/overlay";

function App() {
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: NotifySeverity }>(
    { open: false, message: "", severity: "info" }
  );
  const [overlay, setOverlay] = useState<{ open: boolean; message?: string }>({ open: false });

  useEffect(() => {
    setNotifyHandler((message, severity = "info") => {
      setSnackbar({ open: true, message, severity });
    });
    setOverlayHandler((open, options) => {
      setOverlay({ open, message: options?.message });
    });
  }, []);

  const handleCloseSnackbar = () => setSnackbar((s) => ({ ...s, open: false }));

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/writing"
          element={
            <MainLayout>
              <Writing />
            </MainLayout>
          }
        />

        <Route
          path="/vocabulary-practice"
          element={
            <MainLayout>
              <VocabularyPractice />
            </MainLayout>
          }
        />

        <Route
          path="/sentence-writing"
          element={
            <MainLayout>
              <BilingualPassage />
            </MainLayout>
          }
        />

        <Route
          path="/listening-practice"
          element={
            <MainLayout>
              <ListeningPractice />
            </MainLayout>
          }
        />

        <Route
          path="/speaking-practice"
          element={
            <MainLayout>
              <SpeakingPractice />
            </MainLayout>
          }
        />

        <Route path="/oauth/authenticate" element={<Authenticate />} />

        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <RequiredAuth>
                  <MainLayout>
                    <Page />
                  </MainLayout>
                </RequiredAuth>
              }
            />
          );
        })}

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />

        <Route path="/login" element={<Login />} />
      </Routes>
      <Backdrop open={overlay.open} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 2000 }}>
        <Box display="flex" alignItems="center" gap={2}>
          <CircularProgress color="inherit" size={24} />
          <span>{overlay.message || 'Đang xử lý...'}</span>
        </Box>
      </Backdrop>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant="filled" sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Router>
  );
}

const publicRoutes = [
  // { path: '/login', component: Login, isNotDefault: true },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

export default App;
