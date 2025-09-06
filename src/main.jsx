import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css"; // your original CSS (moved to src/styles.css)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
