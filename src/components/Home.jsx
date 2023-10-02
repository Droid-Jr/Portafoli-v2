function Home() {
  return (
    <main id="home" className="w-[95%] py-5  md:w-[80%] md:h-[423px] grid place-items-center  md:flex m-auto  ">
      <article className=" w-[80%] md:h-[80%] flex flex-col gap-10 justify-center">
        <h1 className="animate__animated animate__fadeInLeft font-fira font-semibold [font-size:_clamp(1.4em,3vw,2em)] text-[white]">
          I'm <span className="text-[#C778DD]">Mario Carbajal,</span> front-end
          developer
        </h1>

        <p className="animate__animated animate__fadeInLeft text-[16px] font-fira font-medium text-[#ABB2BF]">
          Web Developer passionate about technology and programming
        </p>

        <div className="animate__animated animate__fadeInLeft">
          <button className="border-[#C778DD] border px-3 py-1 text-[white] font-fira font-medium">
            Contact me!!
          </button>
        </div>
      </article>

      <article className="w-[80%] animate__animated animate__fadeInRight md:h-[100%] grid place-items-center md:w-[100%] relative ">
        <img src="/img/marioxD3.png" className="w-[500px] z-10" />
        <img src="/img/linea.png" loading="lazy" className="absolute top-[5%] left-0  sm:left-[10%] md:left-[20%] md:w-[150px] " />
          <img src="/img/linea.png" loading="lazy" className="absolute  md:w-[150px] z-20 right-0 bottom-0 sm:right-[20%] " />
      </article>
    </main>
  );
}

export default Home;
