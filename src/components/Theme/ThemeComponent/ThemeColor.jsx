import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors } from "../../../data/dummy";

function ThemeColor() {
  const { setColor, currentColor } = useStateContext();

  return (
    <div className="flex-col border-t-1 border-color p-4 ml-4">
      <p className="font-semibold text-lg">Theme Colors</p>
      <div className="flex gap-3">
        {themeColors.map((item, index) => (
          <TooltipComponent key={index} content={item.name} position="TopCenter">
            <div className="relative mt-2 cursor-pointer flex gap-5 items-center" key={item.name}>
              <button
                type="button"
                className="h-10 w-10 rounded-full cursor-pointer"
                style={{ backgroundColor: item.color }}
                onClick={() => setColor(item.color)}
              >
                <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? "block" : "hidden"}`} />
              </button>
            </div>
          </TooltipComponent>
        ))}
      </div>
    </div>
  );
}

export default ThemeColor;
