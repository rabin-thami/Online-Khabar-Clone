import Header from "./Header";
import Footer from "./Footer";
import Featured from "./Featured";
export default function Mobile({ headerImage, nepaliDate }) {
  return (
    <>
      <Header headerImage={headerImage} nepaliDate={nepaliDate} />
      <Featured />
      <Footer headerImage={headerImage} />
    </>
  );
}
