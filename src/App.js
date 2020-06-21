import React from "react";
import "./styles.css";
import HomeComponent from "./homeComponent";
import TopNavBar from "./TopNavBar";

export default function App() {
  return (
    <div className="outer">
      <TopNavBar />
      <HomeComponent />
    </div>
  );
}
