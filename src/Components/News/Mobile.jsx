import { HiOutlineClock } from "react-icons/hi2";
export default function Mobile() {
  return (
    <div className="grid font-Mukta">
      <div className="border-t-2 pb-5">
        <div className="p-9 text-4xl font-bold text-center">
          <h2>
            <a href="">कर्णालीमा शपथ बहिष्कार गरेका शाह मन्त्रीबाट हटाइए</a>
          </h2>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="flex gap-3">
            <img src="/vite.svg" alt="logo" className="w-6 h-6 " />
            <p>अनलाइनखबर</p>
          </div>
          <div className="flex items-center gap-2 ">
            <HiOutlineClock size={20} />
            <p>२४ मिनेट अगाडि</p>
          </div>
        </div>
      </div>

      <div className="border-t-2 pb-5">
        <div className="p-9 text-4xl font-bold text-center">
          <h2>
            <a href="">कांग्रेससँग संसदमै भिड्ने मुडमा ओली</a>
          </h2>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="flex gap-3">
            <img src="/vite.svg" alt="logo" className="w-6 h-6 " />
            <p>अनलाइनखबर</p>
          </div>
          <div className="flex items-center gap-2 ">
            <HiOutlineClock size={20} />
            <p>२४ मिनेट अगाडि</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 pb-5">
        <div className="p-9 text-4xl font-bold text-center">
          <h2>
            <a href="">पेट्रोल लिटरमै ७ रुपैयाँ घट्यो</a>
          </h2>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="flex gap-3">
            <img src="/vite.svg" alt="logo" className="w-6 h-6 " />
            <p>अनलाइनखबर</p>
          </div>
          <div className="flex items-center gap-2 ">
            <HiOutlineClock size={20} />
            <p>२४ मिनेट अगाडि</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 pb-5">
        <div className="p-9 text-4xl font-bold text-center">
          <h2>
            <a href="">बागमतीमा भागबण्डा मिलाउन मन्त्रालय फुटाइयो</a>
          </h2>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="flex gap-3">
            <img src="/vite.svg" alt="logo" className="w-6 h-6 " />
            <p>अनलाइनखबर</p>
          </div>
          <div className="flex items-center gap-2 ">
            <HiOutlineClock size={20} />
            <p>२४ मिनेट अगाडि</p>
          </div>
        </div>
      </div>
    </div>
  );
}
