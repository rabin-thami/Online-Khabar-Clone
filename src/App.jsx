import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import NepaliDate from "nepali-date-converter";
import Tranding from "./Components/Tranding";
import FullAds from "./Components/Ads/FullAds";
import RecentNews from "./Components/News";

export default function App() {
  const [today, setToday] = useState("");

  // Getting Current Date
  useEffect(() => {
    const currentDate = new Date();
    const currentNepaliDate = new NepaliDate(currentDate).format(
      "DD ddd MMMM, YYYY",
      "np"
    );
    setToday(currentNepaliDate);
  }, []);

  return (
    <>
      <Navbar title={"Online Khabar"} date={today} />
      <Tranding className="max-w-[1148px] m-auto py-[15px] border-b-2 w-full" />
      <FullAds>
        <img src="/1230x120.gif" alt="" />
      </FullAds>
      <RecentNews />
      <FullAds>
        <img src="/1230x120.gif" alt="" />
      </FullAds>
      <div className="h-[100em]"></div>
    </>
  );
}
