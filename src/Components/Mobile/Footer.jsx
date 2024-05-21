import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaClockRotateLeft,
  FaArrowTrendUp,
  FaRegCircleUser,
  FaMagnifyingGlass,
} from "react-icons/fa6";

const footerMenuItems = [
  "हाम्रो टिम",
  "प्रयोगका सर्त",
  "विज्ञापन",
  "प्राइभेसी पोलिसी",
  "सम्पर्क",
];

const footerContacts = [
  {
    title: "अध्यक्ष तथा प्रबन्ध निर्देशक:",
    name: "धर्मराज भुसाल",
  },
  {
    title: "प्रधान सम्पादक:",
    name: "शिव गाउँले",
  },
  {
    title: "सूचना विभाग दर्ता नं.",
    name: "२१४ / ०७३–७४",
  },
];

const footerIcons = [
  { icon: <FaClockRotateLeft className="scale-x-[-1]" />, label: "ताजा अपडेट" },
  { icon: <FaArrowTrendUp />, label: "ट्रेन्डिङ" },
  { icon: <FaRegCircleUser />, label: "प्रोफाइल" },
  { icon: <FaMagnifyingGlass />, label: "सर्च" },
];

const socialMediaIcons = [
  { icon: <FaFacebookF /> },
  { icon: <FaTwitter /> },
  { icon: <FaYoutube /> },
];

export default function Footer({ headerImage }) {
  return (
    <footer className="bg-[rgba(34,96,191,.04)] my-2 border-t border-[rgba(34,96,191,.08)] font-Mukta text-color-text-black-color relative">
      <div className="flex flex-col items-center py-5">
        <h1 className="font-Khand text-2xl font-semibold text-color-primary-blue">
          अनलाइनखबर
        </h1>
        <ul className="text-center font-medium space-y-1">
          {footerMenuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center bg-[rgba(34,96,191,.14)] px-6 py-5">
        <img src={headerImage} alt="Footer Image" className="max-w-[240px]" />
        <div>
          <ul className="flex gap-4 my-5">
            {footerContacts.map((contact, index) => (
              <li key={index}>
                <h5 className="text-center font-semibold">
                  <span className="block text-sm">{contact.title}</span>
                  {contact.name}
                </h5>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center font-semibold">
          <p>+977-1-4790176, +977-1-4796489</p>
          <p>news@onlinekhabar.com</p>
        </div>
        <div className="p-5">
          <ul className="flex gap-5">
            {socialMediaIcons.map((icon, index) => (
              <li key={index}>{icon.icon}</li>
            ))}
          </ul>
        </div>
        <p className="text-[#000] text-sm">
          © २००६-२०२३ Onlinekhabar.com सर्वाधिकार सुरक्षित
        </p>
      </div>
      <div className="fixed z-10 px-10 py-4 bg-color-default-white bottom-0 w-screen text-color-primary-blue flex justify-center flex-wrap">
        <ul className="flex gap-10">
          {footerIcons.map((item, index) => (
            <li key={index} className="flex flex-col items-center space-y-3">
              {item.icon}
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
