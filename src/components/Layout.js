import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "./themeContext";

export default function Layout({ children }) {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
