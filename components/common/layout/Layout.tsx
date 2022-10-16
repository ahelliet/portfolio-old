import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { ThemeProvider } from "next-themes";

interface ILayout {
  children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {

  return (
    <ThemeProvider defaultTheme='light' attribute='class'>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default Layout;