import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";

function App() {
  // grabs mode from state/index.js
  const mode = useSelector((state) => state.global.mode);

  // passes theme.js into createTheme function
  const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode])

  return <div className="app">
    <ThemeProvider theme={theme}>
      {/* resets all css */}
      <CssBaseline />
    </ThemeProvider>
  </div>;
}

export default App;
