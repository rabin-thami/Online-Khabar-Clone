import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
export default function Footer({ headerImage }) {
  return (
    <footer className="bg-[rgba(34,96,191,.04)] my-2 border-t border-[rgba(34,96,191,.08)] font-Mukta text-color-text-black-color">
      <div className="flex justify-center  items-center flex-col py-5">
        <h1 className="font-Khand text-2xl font-semibold text-color-primary-blue">
          अनलाइनखबर
        </h1>
        <ul className=" text-center font-medium">
          <li>हाम्रो टिम</li>
          <li>प्रयोगका सर्त</li>
          <li>विज्ञापन</li>
          <li>प्राइभेसी पोलिसी</li>
          <li>सम्पर्क</li>
        </ul>
      </div>
      <div className="flex bg-[rgba(34,96,191,.14)] px-6 flex-wrap justify-center items-center py-5 flex-col">
        <img src={headerImage} alt="footer Image" className="max-w-[240px]" />
        <div>
          <ul className="flex gap-4 my-5">
            <li>
              <h5 className="text-center font-semibold">
                <span className="block text-sm">
                  अध्यक्ष तथा प्रबन्ध निर्देशक:
                </span>
                धर्मराज भुसाल
              </h5>
            </li>
            <li>
              <h5 className="text-center font-semibold">
                <span className="block text-sm">प्रधान सम्पादक:</span>
                शिव गाउँले
              </h5>
            </li>
            <li>
              <h5 className="text-center font-semibold">
                <span className="block text-sm">सूचना विभाग दर्ता नं.</span>
                २१४ / ०७३–७४
              </h5>
            </li>
          </ul>
        </div>
        <div className="text-center font-semibold">
          <p>+977-1-4790176, +977-1-4796489</p>
          <p>news@onlinekhabar.com</p>
        </div>
        <div className="p-5">
          <ul className="flex gap-5">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
        <p className="text-[#000] text-sm">
          © २००६-२०२३ Onlinekhabar.com सर्वाधिकार सुरक्षित
        </p>
      </div>
    </footer>
  );
}
