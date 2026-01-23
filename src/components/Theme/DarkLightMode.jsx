import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState("system");

  const applyTheme = (themeChoice) => {
    if (themeChoice === "light") {
      document.documentElement.classList.remove("dark-mode");
    } else if (themeChoice === "dark") {
      document.documentElement.classList.add("dark-mode");
    } else if (themeChoice === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark-mode", isDark);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (localStorage.getItem("theme") === "system") {
        applyTheme("system");
      }
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleChange = (e) => {
    const selected = e.target.value;
    setTheme(selected);
    localStorage.setItem("theme", selected);
    applyTheme(selected);
  };

  return (
    <select
      value={theme}
      onChange={handleChange}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 15px",
        background: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        zIndex: 9999,
      }}
    >
      <option value="light">Light Mode</option>
      <option value="dark">Dark Mode</option>
      <option value="system">System</option>
    </select>
  );
};

export default DarkModeToggle;
