// src/components/Layout.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  // Route-based background color mapping
  const routeBgColors = {
    "/": "#26372D",            // Home
    // "/techstack": "#1C2626",   // Tech Stack
    // "/project": "#2C2F33",     // Project Page
    // "/contact": "#1F1F1F",     // Contact Page
    // "/contact": "#2C2F33",     // Contact Page
  };

  // Default color if route is not found
  const backgroundColor = routeBgColors[location.pathname] || "#26372D";

  return (
    <div
      className="pb-25 flex flex-col pt-10 h-full min-h-screen transition-colors duration-500 ease-in-out"
      style={{ backgroundColor }}
    >
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;
