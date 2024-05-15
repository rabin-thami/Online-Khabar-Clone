import DesktopNews from "./Desktop";
import MobileNews from "./Mobile";

export default function RecentNews() {
  return (
    <div>
      <div className="md:hidden pt-8">
        <MobileNews />
      </div>
      <div className="hidden md:block">
        <DesktopNews />
      </div>
    </div>
  );
}
