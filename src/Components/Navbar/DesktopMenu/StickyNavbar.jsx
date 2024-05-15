import { useEffect, useRef } from "react";

export default function StickyNavbar({ children }) {
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const sticky = navbar.offsetTop;

    function handleScroll() {
      if (window.scrollY >= sticky) {
        navbar.classList.add("fixed", "top-0", "w-full");
      } else {
        navbar.classList.remove("fixed", "top-0", "w-full");
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="desktopNavBar" ref={navbarRef} className="w-screen">
      <div>{children}</div>
    </div>
  );
}
