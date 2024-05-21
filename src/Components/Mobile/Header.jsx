import { useState } from "react";
import { TbUserHexagon, TbAlignJustified, TbX } from "react-icons/tb";
import {
  FcHome,
  FcLink,
  FcSportsMode,
  FcComments,
  FcCamcorderPro,
  FcCloseUpMode,
  FcBusiness,
  FcGlobe,
} from "react-icons/fc";

const menuItems = [
  { icon: <FcHome />, text: "होमपेज", link: "" },
  { icon: <FcGlobe />, text: "समाचार", link: "" },
  { icon: <FcBusiness />, text: "बिजनेस", link: "" },
  { icon: <FcCloseUpMode />, text: "जीवनशैली", link: "" },
  { icon: <FcCamcorderPro />, text: "मनोरञ्जन", link: "" },
  { icon: <FcComments />, text: "विचार", link: "" },
  { icon: <FcSportsMode />, text: "खेलकुद", link: "" },
  { icon: <FcLink />, text: "अन्य", link: "" },
];

export default function Header({ headerImage, nepaliDate }) {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => setIsToggle(!isToggle);

  return (
    <nav className="fixed z-50 w-screen px-5 py-4 bg-blue-500 flex justify-between items-start shadow-md bg-color-default-white top-0 text-color-primary-blue">
      <TbUserHexagon size={25} />

      <div className="flex flex-col items-center space-y-1">
        <img src={headerImage} className="max-w-[248px]" alt="Header" />
        <p className="text-center font-Mukta text-color-text-black-color p-0 m-0 text-sm">
          {nepaliDate}
        </p>
      </div>

      <TbAlignJustified
        size={25}
        onClick={handleToggle}
        className="hover:cursor-pointer"
      />

      {/* Mobile Menu */}
      <div
        className={`fixed h-screen right-0 top-0 bg-color-default-white drop-shadow-xl transition-transform transform ${
          isToggle ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "20em" }}
      >
        <span className="flex justify-end mt-5 mr-5">
          <TbX
            size={30}
            onClick={handleToggle}
            className="text-black hover:text-[#2260bf] hover:cursor-pointer"
          />
        </span>
        <div className="font-Khand font-semibold text-2xl px-5 py-4 relative">
          <ul className="space-y-2 text-[rgba(0,0,0,.68)] animationClass ">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="px-2 py-3 flex items-center gap-4 hover:text-[#2260bf] relative"
              >
                {item.icon}
                <a href={item.link} className="w-full z-50">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
