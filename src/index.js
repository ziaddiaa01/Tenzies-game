import React from "react"
import App from "./App"
import { createRoot } from "react-dom/client";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);