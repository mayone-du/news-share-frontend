import { useTheme } from "next-themes";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const handleLight = () => {
    setTheme("light");
  };
  const handleDark = () => {
    return setTheme("dark");
  };
  return (
    <div>
      <p>The current theme is: {theme}</p>

      <div>
        <button className="border" onClick={handleLight}>
          Light
        </button>
        <button className="border" onClick={handleDark}>
          Dark
        </button>
      </div>
    </div>
  );
};
