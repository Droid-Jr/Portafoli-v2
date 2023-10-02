import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [Menu, setMenu] = useState(false);

  const OpenMenu = () => {
    setMenu(!Menu);
  };

  return (
    <header
      className={`w-[90%]  m-auto rounded-md shadow-md h-[50px] flex justify-between px-10 items-center duration-700 bg-[#3f3f3f]`}
    >
      <div className="flex gap-2 text-[white] ">
        <img src="/img/logito.png" className="w-[25px]" />
        <h2 className="text-[20px] font-fira font-bold ">Mario</h2>
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
          className={`bg-[rgb(5,5,5,.9)]  md:bg-transparent mt-2 rounded-r-md absolute -left-[80%]  border  w-[90%] h-[90%] md:static md:grid md:grid-cols-5 md:border-none gap-10  duration-[500ms] opacity-0 md:opacity-[1] md:text-[17px] ease-in-out flex flex-col justify-center items-center text-[30px] font-fira md:font-medium text-[white] ${
            Menu && "left-0 opacity-[1] z-30"
          }  `}
        >
          <Link to="home" onClick={OpenMenu}>
            <span className="text-[#C778DD] text-[18px]">#</span>Home
          </Link>
          <Link to="about" onClick={OpenMenu}>
            <span className="text-[#C778DD] text-[18px]">#</span>About
          </Link>
          <Link to="education" onClick={OpenMenu}>
            <span className="text-[#C778DD] text-[18px]">#</span>Education
          </Link>
          <Link to="project" onClick={OpenMenu}>
            <span className="text-[#C778DD] text-[18px]">#</span>Projects
          </Link>
          <Link to="contac" onClick={OpenMenu}>
            <span className="text-[#C778DD] text-[18px]">#</span>Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
