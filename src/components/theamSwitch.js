import React, { useContext } from "react";
import ThemeContext from "../context/theamContext";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext); // Access context

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theam
      </button>
    </div>
  );
}

export default ThemeSwitcher;
