import lengua from '../Lenguaje/changeLenguaje.json'

function Contac( {idioma} ) {
  return (
    <div id="contac" className="w-[80%]    grid gap-8  md:w-[90%] md:h-[100%]  m-auto ">
      <article className="flex items-center  gap-2" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
        <h3 className="text-[#C778DD] font-fira font-medium [font-size:_clamp(1.4em,3vw,4em)]">
          #
        </h3>
        <h2 className="[font-size:_clamp(2em,3vw,4em)] text-[white]">
          {idioma ? lengua.navbar.Contac : "Contacts"}
        </h2>
        <div className="w-[40%] h-[3px] bg-[#9a5aac]"></div>
      </article>

      <article className="grid md:flex  w-[100%]">
        <div className="flex flex-col  h-[100%] w-[100%] md:w-[90%]">
          <p className="font-fira font-medium [font-size:_clamp(1em,2vw,1em)] text-[#ABB2BF]" data-aos="zoom-out">
          {idioma ? lengua.Contac.p : "I'm Mario, a passionate web developer with solid experience in key technologies such as JavaScript, Vue.js, Redux, HTML5, React.js and Node.js. My focus is on creating attractive and effective web solutions. What drives me is team collaboration and solving technical challenges. I am eager to contribute to innovative projects. If you are looking for a passionate and committed professional for your team, contact me and let's explore how I can add value to your organization!"}
          </p>
        </div>

        <div className=" h-[600px] w-[100%] grid place-content-center">
          <div className="border w-[300px] md:w-[400px] h-[300px]"  data-aos="zoom-out-up">
            <h2 className="text-[#C778DD] font-fira font-medium [font-size:_clamp(1.4em,2vw,2em)] text-center py-2">
              { idioma ? lengua.Contac.message : "Message me here"}
            </h2>

            <ul className="w-[80%]  m-auto grid h-[85%] ">
              <a
                href="https://www.linkedin.com/in/mario-carbajal-39160a24b/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin [font-size:_clamp(1.2em,2vw,2em)] text-[#ffffff] hover:drop-shadow-md "></i>{" "}
                <span className="text-[#C778DD] font-fira font-medium [font-size:_clamp(1.2em,2vw,1.3em)] px-5">
                  Linkedin
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/mario-carbajal-39160a24b/"
                target="_blank"
              >
                <i className="fa-brands fa-github [font-size:_clamp(1.2em,2vw,2em)] text-[#ffffff]"></i>
                <span className="text-[#C778DD] font-fira font-medium [font-size:_clamp(1.2em,2vw,1.4em)] px-5">
                  GitHub
                </span>
              </a>

              <a href="mailto:droidjr10@gmail.com" target="_blank">
                <i className="fa-solid fa-envelope [font-size:_clamp(1.2em,2vw,2em)] text-[#ffffff]"></i>
                <span className="text-[#C778DD] font-fira font-medium [font-size:_clamp(1.2em,2vw,1.4em)] px-5">
                  Email
                </span>
              </a>

              <a
                href="https://www.facebook.com/joseph.carvajal.7393/"
                target="_blank"
              >
                <i className="fa-brands fa-facebook [font-size:_clamp(1.2em,2vw,2em)] text-[#ffffff]"></i>
                <span className="text-[#C778DD] font-fira font-medium [font-size:_clamp(1.2em,2vw,1.4em)] px-5">
                  Facebook
                </span>
              </a>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Contac;
