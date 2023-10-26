import lengua from "../Lenguaje/changeLenguaje.json";

function About({ idioma }) {
  return (
    <section
      id="about"
      className="w-[80%]    grid gap-8  md:w-[90%] md:h-[100%]  m-auto "
    >
      <article
        className="flex items-center  gap-2"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <h3 className="text-[#C778DD] font-fira font-medium [font-size:_clamp(1.4em,3vw,4em)]">
          #
        </h3>
        <h2 className="[font-size:_clamp(2em,3vw,4em)] text-[white]">
          {idioma ? lengua.navbar.About : "About"}
        </h2>
        <div className="w-[40%] h-[3px] bg-[#9a5aac]"></div>
      </article>

      <article className="grid md:flex  w-[100%]">
        <div className="flex flex-col justify-around gap-5 md:gap-0 h-[100%] w-[100%] md:w-[90%]">
          <h2
            className="font-fira font-medium [font-size:_clamp(1em,2vw,1em)] text-[#ABB2BF]"
            data-aos="zoom-in-left"
          >
            {idioma ? lengua.Aboute.h2 : "Hello, I´m Mario"}
          </h2>
          <p
            className="font-fira font-medium [font-size:_clamp(1em,2vw,1em)] text-[#ABB2BF]"
            data-aos="zoom-in-left"
          >
             {idioma ? lengua.Aboute.pAbout : "Hello, I´m Mario Carbajal I am very passionate and dedicated to my work. With the commitment that characterizes me, I seek to improve my knowledge every day. I am currently looking to improve my skills through many projects"}
          </p>
          <p
            className="font-fira font-medium [font-size:_clamp(1em,2vw,1em)] text-[#ABB2BF]"
            data-aos="zoom-in-left"
          >
          {idioma ? lengua.Aboute.pAbout2 : "I am a passionate Full Stack web developer, with a strong focus on the front-end. My goal is to create exceptional web applications, taking on constant challenges to improve my skills. I am motivated by an unwavering desire for continuous learning. My unwavering motivation is to continue acquiring knowledge and experiences to deliver high-quality, innovative web solutions."}
          </p>
          <div className="flex " data-aos="zoom-in-left">
            <a
              href="/cv/cv.pdf"
              download={"cv.pdf"}
              className="border cursor-pointer border-[#C778DD] px-5 py-1 [font-size:_clamp(1em,2vw,1em)] text-[white] font-medium duration-500 ease-in-out hover:bg-[#7b408b]"
            >
              {idioma ? lengua.Aboute.btn : "Download CV"}
            </a>
          </div>
        </div>

        <div
          className=" h-[600px] w-[100%] grid place-content-center relative"
          data-aos="zoom-in-right"
        >
          <img src="/img/marioxD3.png" loading="lazy" className="z-10" alt="logo"/>
          <img
            src="/img/linea.png"
            loading="lazy"
            alt="logo"
            className="absolute bottom-[20%] md:left-[20%] w-[150px] z-20"
          />
          <img
            src="/img/linea.png"
            loading="lazy"
            alt="logo"
            className="absolute top-[20%] right-[5%] md:right-[20%] w-[150px]"
          />
        </div>
      </article>
    </section>
  );
}

export default About;
