import React from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import ScrollToTop from "src/components/ScrollToTop";


export default function AppLayout({ children }) {
  return (
    <div>
      <Header />
      <ScrollToTop />
      {children}
      <Footer />
    </div>
  );
}
