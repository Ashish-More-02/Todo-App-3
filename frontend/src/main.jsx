import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";

// pages import
import LoginPage from "./pages/login-page.jsx";
import RegisterPage from "./pages/register-page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* homepage route */}
        <Route path="/" element={<App />} />

        {/* Auth routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
