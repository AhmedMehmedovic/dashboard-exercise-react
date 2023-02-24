import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

function ThemeOptions() {
  const { setMode, currentMode } = useStateContext();

  return (
    <div className="flex-col border-t-1 border-color p-4 ml-4">
      <p className="font-semibold text-lg">Theme options</p>
      <div className="mt-4">
        <input type="radio" id="light" name="theme" value="Light" className="cursor-pointer" onChange={setMode} checked={currentMode === "Light"} />
        <label htmlFor="light" className="ml-2 text-md cursor-pointer">
          Light
        </label>
      </div>
      <div className="mt-4">
        <input type="radio" id="dark" name="theme" value="Dark" className="cursor-pointer" onChange={setMode} checked={currentMode === "Dark"} />
        <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
          Dark
        </label>
      </div>
    </div>
  );
}

export default ThemeOptions;
