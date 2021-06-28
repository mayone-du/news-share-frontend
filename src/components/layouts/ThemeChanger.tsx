import { useTheme } from "next-themes";
import { useCallback } from "react";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = useCallback(() => {
    theme === "light" && setTheme("dark");
    theme === "dark" && setTheme("light");
  }, [theme, setTheme]);
  return <button onClick={handleChangeTheme}>切り替える</button>;
};
