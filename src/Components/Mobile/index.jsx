import Header from "./Header";
import Footer from "./Footer";

export default function Mobile({ headerImage, nepaliDate }) {
  return (
    <>
      <Header headerImage={headerImage} nepaliDate={nepaliDate} />
      <Footer headerImage={headerImage} />
    </>
  );
}
