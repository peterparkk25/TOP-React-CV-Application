import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Personal from "./Components/Personal.jsx";
import Education from "./Components/Education.jsx";
import Experience from "./Components/Experience.jsx";
import Button from "./Components/Footer.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Personal />
    <Education />
    <Experience />
    <Button />
  </StrictMode>
);
