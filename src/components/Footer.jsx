function Footer() {
  return (
    <footer className="w-[100%]  h-[150px]  border-t py-5 ">
      <main className="w-[80%] m-auto  h-[100%]">
        <section className="flex flex-col items-center gap-5">
          <article className="grid md:flex gap-5 items-center justify-between  w-[70%] ">
            <div className="flex gap-3 items-center">
              <img
                src="/img/logito.png"
                loading="lazy"
                className="w-[30px] h-[40px] drop-shadow-[1px_1px_2px_#000000]"
              />
              <h2 className="font-fira font-medium text-[16px] text-[white]">
                Mario
              </h2>
              <p className="text-[#ABB2BF] font-fira font-medium text-[16px]">
                droidjr10@gmail.com
              </p>
            </div>

            <h4 className="font-fira font-medium text-[25px] text-[white]">
              Email
            </h4>
          </article>

          <article className="grid gap-5 md:flex md:justify-between w-[70%]">
            <h3 className="font-fira font-medium text-[16px] text-[white]">
              Front End Developer
            </h3>

            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/mario-carbajal-39160a24b/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin [font-size:_clamp(1.2em,2vw,2em)] text-[#ffffff] duration-[400ms] ease-in-out hover:text-[#C778DD]  "></i>
              </a>

              <a
                href="https://www.linkedin.com/in/mario-carbajal-39160a24b/"
                target="_blank"
              >
                <i class="fa-brands fa-github [font-size:_clamp(1.2em,2vw,2em)] text-[#ffffff] duration-[400ms] ease-in-out hover:text-[#C778DD]"></i>
              </a>

              <a href="mailto:droidjr10@gmail.com" target="_blank">
                <i class="fa-solid fa-envelope [font-size:_clamp(1.2em,2vw,2em)] text-[#ffffff] duration-[400ms] ease-in-out hover:text-[#C778DD]"></i>
              </a>

              <a
                href="https://www.facebook.com/joseph.carvajal.7393/"
                target="_blank"
              >
                <i class="fa-brands fa-facebook [font-size:_clamp(1.2em,2vw,2em)] text-[#ffffff] duration-[400ms] ease-in-out hover:text-[#C778DD]"></i>
              </a>
            </div>
          </article>
        </section>

        <section className="text-center py-5 md:py-0">
          <h2 className="font-fira font-medium text-[16px] text-[#ABB2BF]">
            © Copyright 2023. Made by Mario
          </h2>
        </section>
      </main>
    </footer>
  );
}

export default Footer;
