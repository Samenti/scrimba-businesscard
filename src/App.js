import React from "react";
import Header from "./components/Header.js"
import Info from "./components/Info.js"
import Socials from "./components/Socials.js"
import VersionNav from "./components/VersionNav.js";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <Header />
        <Info />
        <Socials />
      </div>
      <VersionNav />
    </div>
  );
};