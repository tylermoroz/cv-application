import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Personal from "./Personal.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Personal />
  </StrictMode>
);
