import Filter from "../components/Filter";
import Footer from "../components/Footer";
import NaviBar from "../components/Navi";

const Homescreen = () => {
  return (
    <div className="overflow-x-hidden">
      <NaviBar/>
      <Filter/>
      <Footer/>
    </div>
  );
};

export default Homescreen;
