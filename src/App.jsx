import { useState } from 'react';
import './styles/App.css';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Projects2 from './pages/Projects2';
import Projects3 from './pages/Projects3';
import Projects4 from './pages/Projects4';
import Projects5 from './pages/Projects5';
import AuroraBackground from './components/background/AuroraBackground';
import ScrollToTop from './ScrollToTop';
import { LangProvider } from "./lang/LangContext";

function Shell() {
  return (
    <>
      <AuroraBackground />
      <>
        <Sidebar />
        <Outlet />
        <Footer />
      </>
    </>);
}

function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Shell />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects2" element={<Projects2 />} />
            <Route path="/projects3" element={<Projects5 />} />
            <Route path="/projects4" element={<Projects3 />} />
            <Route path="/projects5" element={<Projects4 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}

export default App
