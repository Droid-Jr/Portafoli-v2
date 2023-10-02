function About() {
  return (
    <section className="w-[80%]    grid gap-8  md:w-[90%] md:h-[100%]  m-auto ">
      <article className="flex items-center  gap-2">
        <h3 className="text-[#C778DD] font-fira font-medium [font-size:_clamp(1.4em,3vw,4em)]">
          #
        </h3>
        <h2 className="[font-size:_clamp(2em,3vw,4em)] text-[white]">About</h2>
        <div className="w-[40%] h-[3px] bg-[#9a5aac]"></div>
      </article>

      <article className="grid md:flex  w-[100%]">
        <div className="flex flex-col justify-around gap-5 md:gap-0 h-[100%] w-[100%] md:w-[90%]">
          <h2 className="font-fira font-medium [font-size:_clamp(1em,2vw,1em)] text-[#ABB2BF]">
            Hello, I´m Mario
          </h2>
          <p className="font-fira font-medium [font-size:_clamp(1em,2vw,1em)] text-[#ABB2BF]">
            ¡Hola! Mi nombre es Mario Carbajal I am very passionate and
            dedicated to my work. With the commitment that characterizes me, I
            seek to improve my knowledge every day. I am currently looking to
            improve my skills through many projects
          </p>
          <p className="font-fira font-medium [font-size:_clamp(1em,2vw,1em)] text-[#ABB2BF]">
            I am a Full Stack web developer focused on the front-end of
            developing applications and web platforms, in which I am always
            willing to improve my skills, creating projects, taking on
            challenges and with the motivation to continue learning.
          </p>
          <div className="flex ">
            <a
              href="/cv/cv.pdf"
              download={"cv.pdf"}
              className="border cursor-pointer border-[#C778DD] px-5 py-1 [font-size:_clamp(1em,2vw,1em)] text-[white] font-medium"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className=" h-[600px] w-[100%] grid place-content-center relative">
          <img src="/img/marioxD3.png" loading="lazy" className="z-10" />
          <img src="/img/linea.png" loading="lazy" className="absolute bottom-[20%] md:left-[20%] w-[150px] z-20" />
          <img src="/img/linea.png" loading="lazy" className="absolute top-[20%] right-[5%] md:right-[20%] w-[150px]" />
        </div>
      </article>
    </section>
  );
}

export default About;
