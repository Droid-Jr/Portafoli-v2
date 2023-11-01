import lengua from '../Lenguaje/changeLenguaje.json'
import { motion } from "framer-motion";
import useHomeAnimation from '../framerMotion/useHomeAnimation';


function Home( {idioma} ) {

  const { animation1, animation2 } = useHomeAnimation();
  

  return (
    <main id="home" className="w-[95%] py-5  md:w-[80%] md:h-[430px] grid place-items-center  md:flex m-auto ">
      <motion.article 
     initial = {animation1.initial}
     animate = {animation1.animate}
     transition={animation1.transition}
      className=" w-[80%] md:h-[100%] flex flex-col gap-4 justify-center ">
        <h1  className=" font-fira font-semibold [font-size:_clamp(1.4em,3vw,2em)] text-[white]">
          {idioma ? lengua.home.h1 : "I'm"} <span className="text-[#C778DD]">Mario Carbajal,</span> {idioma ? lengua.home.h12 : "front-end developer"}
        </h1>

        <p className=" text-[16px] font-fira font-medium text-[#ABB2BF]">
          {idioma ? lengua.home.p : "Web Developer with experience in cutting-edge technologies, specialized in web application architecture, performance optimization and innovative technical solutions for complex challenges"}
        </p>

        <div className="">
          <a href="https://api.whatsapp.com/send?phone=943064117" className="border-[#C778DD] border px-4 py-2 text-[white] font-fira font-medium duration-300 ease-in-out hover:bg-[#7b408b]">
            {idioma ? lengua.home.btn : "Contact me!!"}
          </a>
        </div>
      </motion.article>

      <motion.article 
       initial = {animation2.initial}
       animate = {animation2.animate}
       transition={animation2.transition}
      className="w-[80%]  md:h-[100%] grid place-items-center md:w-[100%] relative ">
        <img src="/img/marioxD3.png" className="w-[500px] z-10"  alt='foto de mario' loading='true'/>
        <img src="/img/linea.png" loading="lazy" className="absolute top-[5%] left-0  sm:left-[10%] md:left-[20%] md:w-[150px] " alt='logo' />
          <img src="/img/linea.png" loading="lazy" className="absolute  md:w-[150px] z-20 right-0 bottom-0 sm:right-[20%] " alt='logo' />
      </motion.article>
    </main>
  );
}

export default Home;
