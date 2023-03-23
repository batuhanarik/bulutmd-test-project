import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NaviBar from "../components/Navi";

const Homescreen = (props) => {
  const navigate = useNavigate();
  useEffect(()=>{
    console.log(props);
  })
  return (
    <div className="overflow-x-hidden">
      <NaviBar />
      <div className="md:max-2xl:flex">
        <Card naviUrl={'movies'} subText={"Film"} />
        <Card naviUrl={'series'} subText={"Dizi"} />
      </div>
      <Footer />
    </div>
  );
};

export default Homescreen;
