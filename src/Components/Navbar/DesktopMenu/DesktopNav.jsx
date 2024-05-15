import StickyNavbar from "./StickyNavbar";
export default function DesktopMenu({ title, date }) {
  return (
    <>
      <div className="">
        <header className="flex justify-between max-w-[1148px] w-full mx-auto py-[15px]">
          <div className="flex flex-col w-fit">
            <div className="font-khand text-4xl font-semibold uppercase m-0 p-0">
              {title}
            </div>
            <div className="font-Mukta text-gray-400 text-right">{date}</div>
          </div>
          <div>
            <div className="w-auto h-auto bg-gray-300 rounded-md flex justify-center items-center">
              <img src="/ads.jpg" alt="" />
            </div>
          </div>
        </header>
        <StickyNavbar className="z-50">
          <nav className="bg-[#2260bf] w-full drop-shadow-md">
            <div className="max-w-[1148px] mx-auto py-5 z-50">
              <ul className="flex space-x-6 font-khand font-semibold text-white text-2xl z-50">
                <li>
                  <a href="">होमपेज</a>
                </li>
                <li>
                  <a href="">समाचार</a>
                </li>
                <li>
                  <a href="">बिजनेस</a>
                </li>
                <li>
                  <a href="">जीवनशैली</a>
                </li>
                <li>
                  <a href="">मनोरञ्जन</a>
                </li>
                <li>
                  <a href="">विचार</a>
                </li>
                <li>
                  <a href="">खेलकुद</a>
                </li>
                <li>
                  <a href="">अन्य</a>
                </li>
              </ul>
            </div>
          </nav>
        </StickyNavbar>
      </div>
    </>
  );
}
