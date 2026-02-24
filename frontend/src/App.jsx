import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { Button } from "./components/ui/button";
import Index from "./components/landing-page/index";

function App() {
  const [darkmode, setDarkmode] = useState(true);

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  return (
    <div className="h-screen">
      {/* This app component acts as a landing page, and all others are individual pages */}
      <Index></Index>
    </div>
  );
}

export default App;
