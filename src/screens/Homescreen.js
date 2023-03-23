import { useEffect } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import NaviBar from "../components/Navi";

const HomeScreen = (props) => {
  useEffect(()=>{
    console.warn(window.location.pathname)
  })
  return (
    <div className="overflow-x-hidden">
      <NaviBar />
    {window.location.pathname==='/' && <Filter/>}
      <div className="md:max-2xl:flex lg:flex xl:flex">
        <Card naviUrl={'movies'} subText={"Film"} />
        <Card naviUrl={'series'} subText={"Dizi"} />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
