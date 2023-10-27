import lengua from '../Lenguaje/changeLenguaje.json'
import { Link } from "react-scroll";
import useMenu from "../hook/useMenu";

function Navbar( {idioma , cambio} ) {
  

  const [Menu, OpenMenu] = useMenu();
 

  return (
    <header
      className={`w-[90%]  m-auto rounded-md  h-[50px] flex justify-around  items-center gap-5 duration-700 `}
    >
      <div className="flex gap-2 text-[white] ">
        <img src="/img/logito.png" className="w-[25px]" alt='logo' />
        <h2 className="text-[20px] font-fira font-bold ">Mario</h2>
      </div>
      <div className="w-[70px] h-[30px] font-fira border rounded-lg text-[15px] flex justify-around items-center text-[white]">
        <div
          onClick={cambio}
          className={` grid place-items-center w-[50%] h-[100%] rounded-l-md  cursor-pointer duration-500 ease-in-out ${
            idioma && " bg-[#d779f3]"
          } `}
        >
          ES
        </div>
        <div className="bg-[white] w-[2px] h-[30px]"></div>
        <div
          onClick={cambio}
          className={`bg-[#d779f3] w-[50%] h-[100%] rounded-r-md  grid place-items-center cursor-pointer duration-500 ease-in-out ${
            idioma && "bg-transparent"
          } `}
        >
          IN
        </div>
      </div>
      <nav className="realtive">
        <div onClick={OpenMenu} className="md:hidden ">
          {Menu ? (
            <i className={`fa-solid fa-xmark text-[20px] text-[#C778DD]`}></i>
          ) : (
            <i className="fa-solid fa-bars text-[20px] text-[#C778DD]"></i>
          )}
        </div>

        <ul
          className={`bg-[rgb(5,5,5,.9)]  md:bg-transparent mt-2 rounded-r-md absolute -left-[100%]   w-[100%] h-[95%] md:static md:grid md:grid-cols-5 md:border-none gap-10  duration-[500ms]  md:text-[15px] lg:text-[18px] ease-in-out flex flex-col justify-center items-center text-[30px] font-fira md:font-medium text-[white] ${
            Menu && "left-[1px]  z-30"
          }  `}
        >
          <Link to="home" onClick={OpenMenu} className={`cursor-pointer duration-300 ease-in-out hover:text-[#C778DD] `}>
            <span className="text-[#C778DD] text-[18px]">#</span>{idioma ? lengua.navbar.Home : "Home"}
          </Link>
          <Link to="about" onClick={OpenMenu} className="cursor-pointer duration-300 ease-in-out hover:text-[#C778DD]">
            <span className="text-[#C778DD] text-[18px]">#</span>{idioma ? lengua.navbar.About : "About"}
          </Link>
          <Link to="education" onClick={OpenMenu} className="cursor-pointer duration-300 ease-in-out hover:text-[#C778DD]">
            <span className="text-[#C778DD] text-[18px]">#</span>{idioma ? lengua.navbar.Education : "Education"}
          </Link>
          <Link to="project" onClick={OpenMenu} className="cursor-pointer duration-300 ease-in-out hover:text-[#C778DD]">
            <span className="text-[#C778DD] text-[18px]">#</span>{idioma ? lengua.navbar.Project : "Proyects"}
          </Link>
          <Link to="contac" onClick={OpenMenu} className="cursor-pointer duration-300 ease-in-out hover:text-[#C778DD]">
            <span className="text-[#C778DD] text-[18px]">#</span>{idioma ? lengua.navbar.Contac : "Contact"}
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
