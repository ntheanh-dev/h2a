import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { MainLayout } from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Writing from "./pages/Writing";
import VocabularyPractice from "./pages/VocabularyPractice";
import SentenceWriting from "./pages/SentenceWriting";
import BilingualPassage from "./pages/BilingualPassage";
import ListeningPractice from "./pages/ListeningPractice";
import SpeakingPractice from "./pages/SpeakingPractice";
import RequiredAuth from "./components/RequiredAuth";
import "./index.css";
import Authenticate from "./pages/Authenticated";

function App() {
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
    </Router>
  );
}

const publicRoutes = [
  // { path: '/login', component: Login, isNotDefault: true },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

export default App;
