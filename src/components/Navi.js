import { Navbar, Button } from "react-daisyui";
import PopularTitles from "./PopularTitles";
const NaviBar = () => {
  return (
    <div>
      <div className="bg-black w-full component-preview items-center justify-center gap-2 font-sans">
        <Navbar className="justify-between shadow-xl ml-3">
          <Button
            className="bg-black border-none text-2xl normal-case"
            color="white"
          >
            <a href="https://www.bulutmd.com" target={"_blank"}>
              BulutMD
            </a>
          </Button>

          <div>
            <Button className="bg-black border-none rounded-none text-xl normal-case max-sm:hidden mr-4">
              Giriş
            </Button>

            <Button className="bg-red-800 rounded-none text-xl normal-case mr-4">
              Deneme Başlat
            </Button>
          </div>
        </Navbar>
      </div>
   <PopularTitles/>
    </div>
  );
};

export default NaviBar;
