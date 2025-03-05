import React, { useState } from "react";
import ThemeContext from "./context/theamContext";
import ThemeSwitcher from "./components/theamSwitch";
import "./theam.css";
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>
        <h1>React Drak & light mode</h1>
        <ThemeSwitcher />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
