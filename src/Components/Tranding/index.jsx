import { HiMagnifyingGlass } from "react-icons/hi2";
export default function Tranding({}) {
  return (
    <div className="w-full border-b-2 drop-shadow-md hidden md:block">
      <div className="max-w-[1148px] mx-auto py-5 flex justify-between">
        <div>
          <ul className="flex space-x-8 font-Mukta">
            <li className="flex space-x-4 items-center">
              <img
                src="/vite.svg"
                alt="logo"
                className="w-8 h-8 rounded-full bg-blue-500"
              />
              <p>Rabin</p>
            </li>
            <li className="flex space-x-4 items-center">
              <img
                src="/vite.svg"
                alt="logo"
                className="w-8 h-8 rounded-full bg-blue-500"
              />
              <p>Thami</p>
            </li>
            <li className="flex space-x-4 items-center">
              <img
                src="/vite.svg"
                alt="logo"
                className="w-8 h-8 rounded-full bg-blue-500"
              />
              <p>Front-End</p>
            </li>
          </ul>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Keywords"
            className="w-full h-auto px-5 py-2 bg-[rgba(34,96,191,.08);] rounded-full outline-none "
          />
          <HiMagnifyingGlass
            className="absolute top-1/2 -translate-y-1/2 right-5 text-blue-500"
            size={20}
          />
        </div>
      </div>
    </div>
  );
}
