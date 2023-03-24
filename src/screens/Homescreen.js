import { useEffect } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NaviBar from "../components/Navi";

const HomeScreen = ({ data }) => {
  useEffect(() => {
  });
  const filmCard = {
    type: "Film",
    image: data.entries[0].images["Poster Art"].url,
  };
  const seriesCard = {
    type: "Dizi",
    image: data.entries[1].images["Poster Art"].url,
  };
  return (
    <div className="overflow-x-hidden">
      <NaviBar />
      <div className="md:max-2xl:flex lg:flex xl:flex">
        <Card naviUrl={"movies"} cardInfo={filmCard} />
        <Card naviUrl={"series"} cardInfo={seriesCard} />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
