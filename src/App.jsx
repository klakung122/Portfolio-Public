import { useState } from 'react';
import './styles/App.css';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Projects2 from './pages/Projects2';
import Projects3 from './pages/Projects3';
import AuroraBackground from './components/background/AuroraBackground';
import ScrollToTop from './ScrollToTop';

function Shell() {
  return (
    <>
      <AuroraBackground />
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </>);
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects2" element={<Projects2 />} />
          <Route path="/projects3" element={<Projects3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
