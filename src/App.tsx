import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Navigate, Route } from "react-router-dom";

import { theme } from "./theme";
import store from "./redux/store";
import Dashboard from "./components/Dashboard/Dashboard";
import Auth from "./components/Auth/Auth";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router>{loggedIn ? <Dashboard /> : <Auth />}</Router>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
