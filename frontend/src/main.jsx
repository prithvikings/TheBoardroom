import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { IdeaProvider } from "./context/IdeaContext";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IdeaProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </IdeaProvider>
  </StrictMode>
);
