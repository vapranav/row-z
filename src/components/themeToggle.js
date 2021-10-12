import React from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { ThemeContext } from "./themeContext";
const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <div className=' absolute inset-y-0 right-12 md:right-8 transition duration-500 ease-in-out rounded-full'>
      {theme === "dark" ? (
        <HiSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className='text-yellow-500 text-2xl cursor-pointer'
        />
      ) : (
        <HiMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className='text-dark-moon text-2xl cursor-pointer'
        />
      )}
    </div>
  );
};
export default Toggle;
