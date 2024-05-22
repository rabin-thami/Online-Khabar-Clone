import { FaRegClock } from "react-icons/fa6";
import { GoComment } from "react-icons/go";

const newsData = [
  {
    id: 1,
    title: "गृहमन्त्रीको प्रतिशोध र बदनियत मिसिएको एउटा गिरफ्तारी",
    author: "अनलाइनखबर",
    time: "५६ मिनेट अगाडि",
    authorImage: "./profile.jpg",
    comment: 0,
    featuredImage: "./profile.jpg",
    category: "featured",
  },
  {
    id: 4,
    title: "आंशिक प्राध्यापकले ताला लगाएका कारण",
    author: "अनलाइनखबर",
    time: "५६ मिनेट अगाडि",
    authorImage: "./profile.jpg",
    comment: 0,
    featuredImage: null,
    category: "featured",
  },
  {
    id: 2,
    title: "आंशिक प्राध्यापकले ताला लगाएका कारण त्रिचन्द्रमा पठनपाठन ठप्प",
    author: "अनलाइनखबर",
    time: "१० घण्टा अगाडि",
    authorImage: "/profile.jpg",
    comment: 0,
    featuredImage: "/profile.jpg",
    category: "main",
  },

  {
    id: 3,
    title: "मन्त्रीहरुसँग उपहार र दाइजोका सुनचाँदी",
    author: "अनलाइनखबर",
    time: "१० घण्टा अगाडि",
    authorImage: "/profile.jpg",
    comment: 2,
    featuredImage: "/profile.jpg",
    category: "other",
  },
  // Add more news items as needed
];

export default function Featured() {
  const featuredNews = newsData.filter((news) => news.category === "featured");
  const mainNews = newsData.filter((news) => news.category === "main");
  const otherNews = newsData.filter((news) => news.category === "other");

  return (
    <section className="mt-[7em]">
      <div className="mx-auto w-screen max-w-fit">
        {featuredNews.map((news) => (
          <div
            className="font-Mukta text-center py-5 border-t border-color-shadow-color"
            key={news.id}
          >
            <a href="#">
              <h1 className="text-3xl font-semibold text-color-primary-text-blue hover:text-color-primary-blue transition-all duration-200 px-3">
                {news.title}
              </h1>
            </a>
            <div className="flex justify-center p-3">
              <ul className="flex gap-5">
                <li className="flex gap-2 items-center">
                  <img
                    src={news.authorImage}
                    alt={news.author}
                    className="w-6 h-6 rounded-full"
                  />
                  <a
                    href="#"
                    className="hover:text-color-primary-blue transition-all duration-200"
                  >
                    <p>{news.author}</p>
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <FaRegClock />
                  <p>{news.time}</p>
                </li>
                <li className="flex gap-2 items-center">
                  <GoComment />
                  <p>{news.comment}</p>
                </li>
              </ul>
            </div>
            {news.featuredImage && (
              <a href="#">
                <img
                  src={news.featuredImage}
                  alt="Featured"
                  className="w-screen object-cover"
                />
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="font-Mukta border-t border-color-shadow-color">
        <div className="py-3 flex flex-col gap-5 font-Mukta">
          {mainNews.map((news) => (
            <a
              href="#"
              className="relative block overflow-hidden text-color-default-white"
              key={news.id}
            >
              <img
                src={news.featuredImage}
                alt={news.title}
                className="w-full h-auto transform transition-transform duration-300 hover:scale-110 z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.88)] via-[rgba(0,0,0,0.35)] to-transparent z-20 pointer-events-none"></div>
              <div className="absolute bottom-8 left-0 px-5 bg-opacity-75 bg-black text-white z-30">
                <h2 className="text-2xl font-bold">{news.title}</h2>
                <div className="flex items-center gap-2">
                  <FaRegClock />
                  <p>{news.time}</p>
                </div>
              </div>
            </a>
          ))}
          <div className="border-t border-color-shadow-color">
            <ul>
              {otherNews.map((news) => (
                <a href="#" key={news.id}>
                  <li className="flex gap-2 border-b border-color-shadow-color px-3 py-4">
                    <div className="w-28 h-20 rounded-md overflow-hidden">
                      <img src={news.featuredImage} alt={news.title} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{news.title}</h2>
                      <div className="flex gap-2 items-center">
                        <FaRegClock />
                        <p>{news.time}</p>
                      </div>
                    </div>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="px-3 py-5 font-Mukta text-color-default-white">
        <a href="#" className="flex justify-center">
          <span className="flex bg-color-primary-blue w-full px-10 py-4 rounded-lg items-center gap-4 hover:bg-[rgba(34,96,191,0.11)] hover:text-color-primary-blue transition-all duration-200 justify-center">
            <FaRegClock />
            २४ घण्टाका ताजा अपडेट
          </span>
        </a>
      </div>
    </section>
  );
}
