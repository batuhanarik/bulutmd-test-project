import Card from "../components/Card";
import Footer from "../components/Footer";
import NaviBar from "../components/Navi";

const HomeScreen = ({ data }) => {
  //Anasayfadaki kartların resimlerin dinamik ve program tipine göre olması için filtreleme
  const movieData = data.entries.filter((entry) => {
    return entry.programType === "movie";
  });
  const seriesData = data.entries.filter((entry) => {
    return entry.programType === "series";
  });
  //Anasayfadaki kartların içini doldurmak için kullanılan değişkenler
  const filmCard = {
    type: "Film",
    image:
      movieData[Math.floor(Math.random() * 10) + 1].images["Poster Art"].url,
  };
  const seriesCard = {
    type: "Dizi",
    image:
      seriesData[Math.floor(Math.random() * 10) + 1].images["Poster Art"].url,
  };
  return (
    <div className="overflow-x-hidden mb-16">
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
