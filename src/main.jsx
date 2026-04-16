import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TareasProvider } from "./context/TareasContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TareasProvider>
      <App />
    </TareasProvider>
  </React.StrictMode>
);