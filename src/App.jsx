import "./style.css";
import { useState } from "react";
import AuthPage from "./components/auth/AuthPage.jsx";
import HomePage from "./components/home/HomePage.jsx";

function App() {
  const [page, setPage] = useState("home");
  const [authMode, setAuthMode] = useState("login");

  const openAuthPage = (mode = "login") => {
    setAuthMode(mode);
    setPage("auth");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (page === "auth") {
    return (
      <AuthPage initialMode={authMode} onBackHome={() => setPage("home")} />
    );
  }

  return <HomePage onLoginClick={() => openAuthPage("login")} />;
}

export default App;
