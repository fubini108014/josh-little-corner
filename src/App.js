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
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import CssBaseline from "@mui/material/CssBaseline";

const PageLayout = styled("div")({
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr auto",
  gridTemplateAreas: ` 'header' 'main' 'footer'`,
});

const Main = styled("div")({
  gridArea: "main",
  overflow: "auto",
});

function Layout() {
  return (
    <PageLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
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
          </Route>
          <Route path="/404" element={<div>Page NotFound</div>} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
