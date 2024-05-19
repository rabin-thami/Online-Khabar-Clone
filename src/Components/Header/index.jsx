import { useEffect, useState } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

export default function Header() {
  // Mobile Screen
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Log screen type on mount
  useEffect(() => {
    console.log(isMobile ? "Mobile" : "Desktop");
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>{isMobile ? <Mobile /> : <Desktop />}</div>;
}
