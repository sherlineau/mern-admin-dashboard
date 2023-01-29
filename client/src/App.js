import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "theme";
import Dashboard  from 'scenes/dashboard'
import Layout from 'scenes/layout'

function App() {
  // grabs mode from state/index.js
  const mode = useSelector((state) => state.global.mode);

  // passes theme.js into createTheme function
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* resets all css */}
          <CssBaseline />
          <Routes>
            {/* default element for all routes is Layout component.  Everyone route will have a layout (with a navbar/footer) and the children inside it */}
            <Route element={<Layout />}> 
              <Route path="/" element={<Navigate to="/dashboard" replace/>} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
