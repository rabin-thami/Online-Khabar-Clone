import MobileNav from "./MobileMenu/MobileNav";
import DesktopNav from "./DesktopMenu/DesktopNav";
import "./style.css";
export default function Navbar({ title, date }) {
  return (
    <>
      <div className="md:hidden pb-20">
        <MobileNav title={title} date={date} />
      </div>
      <div className="hidden md:block z-50 relative">
        <DesktopNav title={title} date={date} />
      </div>
    </>
  );
}
