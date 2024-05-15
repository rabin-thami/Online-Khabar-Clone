import { HiOutlineClock } from "react-icons/hi2";
export default function RecentNews() {
  return (
    <div className="max-w-[1148px] m-auto">
      <div className="grid py-5">
        <div className="border-t-2 py-5">
          <h2 className="font-Mukta font-bold p-5 text-7xl text-center leading-normal text-[#102c5] hover:text-[#2260bf] transition-all ease duration-200">
            <a href="">कर्णालीमा शपथ बहिष्कार गरेका शाह मन्त्रीबाट हटाइए</a>
          </h2>
          <div className="flex justify-center items-center gap-10 font-Mukta">
            <div className="flex gap-4 items-center">
              <img
                src="/vite.svg"
                alt=""
                className="bg-blue-500 w-10 h-10 rounded-full"
              />
              <p>अनलाइनखबर</p>
            </div>
            <div className="flex items-center gap-4 ">
              <HiOutlineClock size={30} />
              <p>२४ मिनेट अगाडि</p>
            </div>
          </div>
        </div>
        <div className="border-t-2 py-5">
          <h2 className="font-Mukta font-bold p-5 text-7xl text-center leading-normal text-[#102c5] hover:text-[#2260bf] transition-all ease duration-200">
            <a href="">कांग्रेससँग संसदमै भिड्ने मुडमा ओली</a>
          </h2>
          <div className="flex justify-center items-center gap-10 font-Mukta">
            <div className="flex gap-4 items-center">
              <img
                src="/vite.svg"
                alt=""
                className="bg-blue-500 w-10 h-10 rounded-full"
              />
              <p>अनलाइनखबर</p>
            </div>
            <div className="flex items-center gap-4 ">
              <HiOutlineClock size={30} />
              <p>२४ मिनेट अगाडि</p>
            </div>
          </div>
        </div>
        <div className="border-t-2 py-5">
          <h2 className="font-Mukta font-bold p-5 text-7xl text-center leading-normal text-[#102c5] hover:text-[#2260bf] transition-all ease duration-200">
            <a href="">पेट्रोल लिटरमै ७ रुपैयाँ घट्यो</a>
          </h2>
          <div className="flex justify-center items-center gap-10 font-Mukta">
            <div className="flex gap-4 items-center">
              <img
                src="/vite.svg"
                alt=""
                className="bg-blue-500 w-10 h-10 rounded-full"
              />
              <p>अनलाइनखबर</p>
            </div>
            <div className="flex items-center gap-4 ">
              <HiOutlineClock size={30} />
              <p>२४ मिनेट अगाडि</p>
            </div>
          </div>
        </div>
        <div className="border-t-2 py-5">
          <h2 className="font-Mukta font-bold p-5 text-7xl text-center leading-normal text-[#102c5] hover:text-[#2260bf] transition-all ease duration-200">
            <a href="">बागमतीमा भागबण्डा मिलाउन मन्त्रालय फुटाइयो</a>
          </h2>
          <div className="flex justify-center items-center gap-10 font-Mukta">
            <div className="flex gap-4 items-center">
              <img
                src="/vite.svg"
                alt=""
                className="bg-blue-500 w-10 h-10 rounded-full"
              />
              <p>अनलाइनखबर</p>
            </div>
            <div className="flex items-center gap-4 ">
              <HiOutlineClock size={30} />
              <p>२४ मिनेट अगाडि</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
