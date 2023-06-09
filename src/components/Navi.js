import { Navbar, Button } from "react-daisyui";
import PopularTitles from "./PopularTitles";
import { useNavigate } from "react-router-dom";

const NaviBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-black w-full component-preview items-center justify-center gap-2 font-sans">
        <Navbar className="justify-between shadow-xl ml-3">
          <Button
            className="bg-black border-none text-2xl normal-case"
            color="white"
            onClick={() => {
              navigate(`/`);
            }}
          >
            BulutMD
          </Button>

          <div>
            <Button className="bg-black border-none rounded-none text-xl normal-case max-sm:hidden mr-4">
              <a href="https://www.bulutmd.com" target={"_blank"}>
                Giriş
              </a>
            </Button>

            <Button className="bg-red-800 rounded-none text-xl normal-case mr-4">
              Deneme Başlat
            </Button>
          </div>
        </Navbar>
      </div>
      <PopularTitles />
    </div>
  );
};

export default NaviBar;
