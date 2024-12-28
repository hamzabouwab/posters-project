import { UserRound, BriefcaseBusiness, AlignJustify, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { menuItems } from "./utilities";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { articleType, shopType } from "../../reducers/root";
import {showShop} from '../../reducers/ShopReducer'
function Header() {

  const article = useSelector((state:articleType ) => state.article);
  const shop = useSelector((state:shopType ) => state.shop);
  const [show, setShow] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const dispatch = useDispatch()
 
  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setShow(false);
    }
  };
  const toggleMenu = ()=>{
      setShow((prev) => !prev);
      console.log("New state:", !show);
    
  }
  const getMenuIcon = () => {
    return show ? (
      <X className="text-white pointer-events-none" size={20} />
    ) : (
      <AlignJustify className="text-white pointer-events-none" size={20} />
    );
  };

  const toggleShop = () => {
    console.log(shop)
    dispatch(showShop())
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="absolute z-10 w-full px-5 bg-green-700 flex items-center h-28 shadow-md border-b-2 border-white md:bg-transparent ">
      <div
        className="container h-full relative"
        ref={containerRef}
      >
        <div className="flex gap-10 h-full items-center justify-between w-full bg-green-700 md:bg-transparent">
          <a
            href="/"
            className="brand font-bold text-2xl uppercase [letter-spacing:4px] text-slate-900"
          >
            Earth Store
          </a>
          <ul
            className={`gap-9 uppercase mx-auto md:mx-0 -z-10 absolute md:flex md:static w-full md:w-auto top-28 md:top-0 py-20 md:py-0 bg-green-700 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none border-4 border-t-0 border-white md:border-none transition-transform duration-150  ${
              show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`}
            ref={menuRef}
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index} name={item} />
            ))}
          </ul>
          <ul className="flex gap-4 ms-auto">
            <li className="relative" >
              <button
                className="flex p-0"
                aria-label="View shopping cart"
                onClick={toggleShop}
              >
                <BriefcaseBusiness
                  size={32}
                  fill="black"
                  color="#ddd"
                  strokeWidth={1}
                />
              </button>
              <span className="bg-black text-white rounded-full w-[18px] aspect-square grid place-content-center text-[11px] font-extrabold absolute -top-1 left-6 border border-white">
                {article.length}
              </span>
            </li>
            <li>
              <button
                className="flex p-0"
                aria-label="View user profile"
                onClick={() => console.log("Profile clicked")}
              >
                <UserRound
                  size={32}
                  fill="black"
                  color="#ddd"
                  strokeWidth={1}
                />
              </button>
            </li>
          </ul>
          <button
            className="flex relative w-9 items-center aspect-square justify-center border-2 z-30 border-white rounded-md p-1 focus:border-green-950 md:hidden"
            onClick={toggleMenu}
          >
            {getMenuIcon()}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
