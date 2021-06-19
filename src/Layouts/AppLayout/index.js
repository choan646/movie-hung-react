import React from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

export default function AppLayout( {children} ) {
  return (
    <div style={{position:"relative"}}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

