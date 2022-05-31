import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { customTheme } from "./constants/customTheme";
import { ThemeProvider, styled } from "@mui/material/styles";
import { SpeedDialTooltipOpen } from "./components/layout/Footer";
import { NavigateButtonGroup, Logo } from "./components/layout/Header";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import CssBaseline from "@mui/material/CssBaseline";

const PageLayout = styled("div")({
  position: "relative",
});

const Main = styled("div")({
  overflow: "auto",
  height: "100vh",
});

function Layout() {
  return (
    <PageLayout>
      <Logo />
      <NavigateButtonGroup />
      <Main>
        <Outlet />
      </Main>
      <SpeedDialTooltipOpen />
    </PageLayout>
  );
}
function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<h1>about</h1>} />
            <Route path="skill" element={<h1>skill</h1>} />
            <Route path="experience" element={<h1>experience</h1>} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
          <Route path="/404" element={<div>Page NotFound</div>} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
