import { useState } from 'react';
import './styles/App.css';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation, Outlet } from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home';
import Projects from './pages/Projects';

function Shell() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>);
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
