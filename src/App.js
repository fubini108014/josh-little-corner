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
import About from "./components/pages/About/About";
import Experience from "./components/pages/Experience/Experience";
import CssBaseline from "@mui/material/CssBaseline";
import ThreeCanvas from "./components/three/ThreeCanvas";

const CanvasWrapper = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

const PageLayout = styled("div")({
  position: "relative",
});

const Main = styled("div")({
  overflow: "overlay",
  //overflow: "auto",
  height: "100vh",
  //scrollbarGutter: "stable both-edges",
});

function Layout() {
  return (
    <PageLayout>
      <CanvasWrapper>
        <ThreeCanvas />
      </CanvasWrapper>
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
            <Route path="about" element={<About />} />
            <Route path="skill" element={<h1>skill</h1>} />
            <Route path="experience" element={<Experience />} />
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
