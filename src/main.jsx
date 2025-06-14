import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HolaMundo from "./components/HolaMundo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <HolaMundo />
  </StrictMode>
);
