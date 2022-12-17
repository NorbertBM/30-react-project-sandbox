import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import { ThemeContext, themes } from "./context/theme-context";

export default function LightAndDarkMode() {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme() {
    // console.log(theme);
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  let docBody = document.body.classList;
  useEffect(() => {
    switch (theme) {
      case themes.light:
        docBody.remove("bg-dark");
        docBody.remove("text-light");
        docBody.add("bg-light");
        docBody.add("text-dark");
        break;
      case themes.dark:
        docBody.remove("bg-light");
        docBody.remove("text-dark");
        docBody.add("bg-dark");
        docBody.add("text-light");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Blog />
    </ThemeContext.Provider>
  );
}
