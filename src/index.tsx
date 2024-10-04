import "./index.css";
import "./global.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router basename="/asms-analytics">
      <App />
    </Router>
  </React.StrictMode>
);

if (window.location.pathname === "/") {
  window.location.replace("/asms-analytics");
}
