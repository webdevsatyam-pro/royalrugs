import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Aise hona chahiye (Bina curly braces ke)
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
