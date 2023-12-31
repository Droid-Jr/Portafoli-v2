import dts from "../data/projectsData.json";
import lengua from '../Lenguaje/changeLenguaje.json'

function Projects( {idioma} ) {
  return (
    <section id="project" className="w-[90%] mt-20  md:mt-28  grid place-items-center   md:flex m-auto  ">
      <main className="w-[100%] flex flex-col gap-7 ">
        <article className="flex items-center  gap-2 " data-aos="zoom-in">
          <h3 className="text-[#C778DD] font-fira font-medium [font-size:_clamp(1.4em,3vw,4em)]">
            #
          </h3>
          <h2 className="[font-size:_clamp(2em,3vw,4em)] text-[white]">
            { idioma ? lengua.navbar.Project : "Proyects"}
          </h2>
          <div className="w-[40%] h-[3px] bg-[#C778DD]"></div>
        </article>

        <article className="grid w-[100%] place-content-center place-items-center md:grid-cols-2 lg:grid-cols-3  py-3 gap-5 ">
          {dts?.map((xd, index) => (
            <div   data-aos="fade-up"
            data-aos-duration="3000"
              className="w-[300px]  grid pb-2 min-h-[250px] border cursor-pointer duration-[400ms] shadow-[1px_1px_5px_#C778DD] hover:bg-[rgb(199,120,221,.2)]"
              key={index}
            >
              <picture>
                <img src={xd.imagen} loading="true" alt="logo" />
              </picture>

              <div className="flex flex-col gap-4 ">
                <h2 className="border text-center font-fira font-medium [font-size:_clamp(1em,2vw,1.1em)] md:py-1 text-[#ABB2BF]">
                  {xd.lenguajes}
                </h2>
                <h3 className="font-fira font-medium [font-size:_clamp(1.4em,1vw,2.4em)] px-4 text-[#C778DD]">
                  {idioma ? xd.title : xd.title2}
                </h3>
                <p className="font-fira font-medium [font-size:_clamp(1em,2vw,1.1em)] px-4 text-[#ABB2BF]">
                  {xd.descri}
                </p>
                <div className="flex justify-around ">
                  <a
                    href={xd.link}
                    target="_blank"
                    className="border px-7 py-1 duration-[400ms] ease-in-out hover:border-[#C778DD] text-[white] hover:text-[#C778DD]"
                  >
                    <i className="fa-regular fa-eye"></i>
                  </a>
                  <a
                    href={xd.git}
                    target="_blank"
                    className="border px-7 py-1 duration-[400ms] ease-in-out hover:border-[#C778DD] text-[white] hover:text-[#C778DD]"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </article>
      </main>
    </section>
  );
}

export default Projects;
