import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider
      defaultTheme="light" // Default to the system's preference (light or dark)
      attribute="class" // This will add "light" or "dark" class to <html>
    >
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ThemeProvider>
  </React.StrictMode>
);
