/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../../data/img/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from "../../components";

import { useStateContext } from "../../contexts/ContextProvider";

import { useTitle } from "react-use";

//icone u navbaru
const NavButton = ({ title, customFunction, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button onClick={customFunction} type="button" style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{ background: dotColor }} className="absoulte inline-flex rounded-full h-2 w-2 right-2 top-2" />

      {icon}
    </button>
  </TooltipComponent>
);

let counter = 0;

function Navbar() {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

  const [title, setTitle] = useState(window.location.pathname.split("/"));
  const [clickedButtons, setClickedButtons] = useState([]);

  function handleClickChangeTitle(btnName) {
    if (title === undefined) {
      setTitle(btnName);
    }

    if (clickedButtons.includes(btnName)) {
      clickedButtons.splice(clickedButtons.indexOf(btnName), 1);
      counter = 0;
      return;
    } else {
      setClickedButtons((prevValue) => {
        return [...prevValue, btnName];
      });
    }
  }
  console.log(counter);
  useEffect(
    () => {
      const interval = setInterval(() => {
        if (counter === clickedButtons.length) {
          counter = 0;

          return;
        }
        setTitle(clickedButtons[counter]);
        counter++;
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    },
    clickedButtons.length > 0 ? [clickedButtons] : [title]
  );

  useTitle(title);
  //prilagođavanje screen za mobilne uredjaje kako ne bi sidebar u potpiunosti zauzeo cijeli display
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title="Menu" customFunction={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex">
        <NavButton title="Cart" customFunction={() => handleClickChangeTitle("Cart")} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor="#03c9d7" customFunction={() => handleClickChangeTitle("Chat")} color={currentColor} icon={<BsChatLeft />} />
        <NavButton
          title="Notification"
          dotColor="#03c9d7"
          customFunction={() => handleClickChangeTitle("Notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick("userProfile")}>
            <img className="rounded-full w-8 h-8" src={avatar} alt="profileImage" />
            <p>
              <span className="text-grey-400 text-14">Hi </span> {""}
              <span className="text-grey-400 font-bold ml-1 text-14">Michael</span>
            </p>
            <MdKeyboardArrowDown className="text-grey-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
}

export default Navbar;
