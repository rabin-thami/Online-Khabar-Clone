import { useState, useEffect } from "react";
import { getNepaliCurrentDate } from "../Lib/utils";
import "./style.css";

import Mobile from "./Mobile";
import Desktop from "./Desktop";
import HeaderImage from "/image/headerImage.png";

export default function MobileComponents() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nepaliDate = getNepaliCurrentDate();
  return (
    <div>
      {screenWidth ? (
        <Mobile headerImage={HeaderImage} nepaliDate={nepaliDate} />
      ) : (
        <Desktop headerImage={HeaderImage} nepaliDate={nepaliDate} />
      )}
    </div>
  );
}

// Some Things for the future
// import getAPIData from "../../Lib";
// // Getting header image from API
// const url = `${import.meta.env.VITE_API_LINK}/header_image`;
// const { data, error } = getAPIData(url);
