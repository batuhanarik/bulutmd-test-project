import Card from "../components/Card";
import Footer from "../components/Footer";
import NaviBar from "../components/Navi";

const Homescreen = () => {
  return (
    <div className="overflow-x-hidden">
      <NaviBar />
      <div className="md:max-2xl:flex">
        <Card subText={"Film"} />
        <Card subText={"Dizi"} />
      </div>
      <Footer />
    </div>
  );
};

export default Homescreen;
