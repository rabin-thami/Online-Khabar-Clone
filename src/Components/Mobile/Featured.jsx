import { FaRegClock } from "react-icons/fa6";
import { GoComment } from "react-icons/go";
import { LiaComment } from "react-icons/lia";
export default function Featured() {
  const featuredNews = [
    {
      title: "गृहमन्त्रीको प्रतिशोध र बदनियत मिसिएको एउटा गिरफ्तारी",
      author: "अनलाइनखबर",
      time: "५६ मिनेट अगाडि",
      authorImage: "./public/profile.jpg",
      comment: 0,
    },
  ];
  return (
    <div className="mt-[7em]">
      <div className="mx-auto w-screen max-w-fit p-3 border-t border-color-shadow-color">
        {/* News Components */}
        {featuredNews.map((news, index) => (
          <div className="font-Mukta text-center" key={index}>
            <a href="">
              <h1 className="text-3xl font-semibold text-color-primary-text-blue hover:text-color-primary-blue transition-all duration-200">
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
                    href=""
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
          </div>
        ))}
      </div>
    </div>
  );
}
