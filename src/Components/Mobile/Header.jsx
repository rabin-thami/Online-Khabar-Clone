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

export default function Header({ headerImage, nepaliDate }) {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <nav className="flex px-5 py-4 bg-blue-500 justify-between items-center text-color-primary-blue border-shadow-color shadow-md relative">
      <div>
        <TbUserHexagon size={25} />
      </div>
      <div className="flex flex-col space-y-1">
        <div>
          <img src={headerImage} className="max-w-[248px]" />
        </div>
        <div className="space-y-5">
          <p className="text-center font-Mukta text-color-text-black-color p-0 m-0 text-sm">
            {nepaliDate}
          </p>
        </div>
      </div>
      <div>
        <TbAlignJustified
          size={25}
          onClick={handleToggle}
          className="hover:cursor-pointer"
        />
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed h-screen right-0 top-0 bg-color-default-white drop-shadow-xl transition-all transform ${
          isToggle ? "translate-x-0 " : "translate-x-full"
        }`}
        style={{ width: "20em" }}
      >
        <span className="flex justify-end mt-5 mr-5">
          <TbX
            className="text-black text-3xl hover:text-[#2260bf] hover:cursor-pointer"
            onClick={handleToggle}
          />
        </span>
        <div className="font-Khand font-semibold text-2xl px-5 py-4">
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
