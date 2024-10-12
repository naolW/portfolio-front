import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-darkBlue1 h-full">
      <Navbar />
      {children}
    </div>
  );
}
