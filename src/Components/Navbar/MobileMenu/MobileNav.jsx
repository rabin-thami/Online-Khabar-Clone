import { useState } from "react";
import {
  HiBars3BottomLeft,
  HiOutlineUserCircle,
  HiMiniXMark,
} from "react-icons/hi2";

import {
  FcHome,
  FcGlobe,
  FcBusiness,
  FcCloseUpMode,
  FcCamcorderPro,
  FcComments,
  FcSportsMode,
  FcLink,
} from "react-icons/fc";
export default function MobileMenu({ title, date }) {
  const [toggle, setToggle] = useState(false);

  //Toggle mobile menu function
  function menuToggle() {
    setToggle((prevToggle) => !prevToggle);
  }
  return (
    <nav className="flex fixed w-screen justify-between p-5 bg-[#2260bf] text-white items-center h-fit drop-shadow-md">
      <div>
        <HiOutlineUserCircle size="2rem" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-khand font-semibold">{title}</h1>
        <p className="font-Mukta">{date}</p>
      </div>
      <div>
        <HiBars3BottomLeft
          size="2rem"
          className="hover:cursor-pointer"
          onClick={menuToggle}
        />
      </div>
      {/* Side Menu */}
      <div
        className={`absolute h-screen right-0 top-0 bg-[#f4f6f8] drop-shadow-xl transition-all transform ${
          toggle ? "translate-x-0 " : "translate-x-full"
        }`}
        style={{ width: "20em" }}
      >
        <span className="flex justify-end mt-5 mr-5">
          <HiMiniXMark
            className="text-black text-3xl hover:text-[#2260bf] hover:cursor-pointer"
            onClick={menuToggle}
          />
        </span>
        <div className="font-khand font-semibold text-2xl px-5 py-4">
          <ul className="space-y-2 animationClass text-[rgba(0,0,0,.68);]">
            <li className="px-2 py-3 flex items-center gap-4 h-auto relative hover:text-[#2260bf]">
              <FcHome />
              <a href="" className="w-full z-10">
                होमपेज
              </a>
            </li>
            <li className="px-2 py-3 flex items-center gap-4 h-auto relative hover:text-[#2260bf]">
              <FcGlobe />
              <a href="" className="w-full z-10">
                समाचार
              </a>
            </li>
            <li className="px-2 py-3 flex items-center gap-4 h-auto relative hover:text-[#2260bf]">
              <FcBusiness />
              <a href="" className="w-full z-10">
                बिजनेस
              </a>
            </li>
            <li className="px-2 py-3 flex items-center gap-4 h-auto relative hover:text-[#2260bf]">
              <FcCloseUpMode />
              <a href="" className="w-full z-10">
                जीवनशैली
              </a>
            </li>
            <li className="px-2 py-3 flex items-center gap-4 h-auto relative hover:text-[#2260bf]">
              <FcCamcorderPro />
              <a href="" className="w-full z-10">
                मनोरञ्जन
              </a>
            </li>
            <li className="px-2 py-3 flex items-center gap-4 h-auto relative hover:text-[#2260bf]">
              <FcComments />
              <a href="" className="w-full z-10">
                विचार
              </a>
            </li>
            <li className="px-2 py-3 flex items-center gap-4 h-auto relative hover:text-[#2260bf]">
              <FcSportsMode />
              <a href="" className="w-full z-10">
                खेलकुद
              </a>
            </li>
            <li className="px-2 py-3 flex items-center gap-4 h-auto relative hover:text-[#2260bf]">
              <FcLink />
              <a href="" className="w-full z-10">
                अन्य
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
