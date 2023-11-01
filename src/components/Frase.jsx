import lengua from '../Lenguaje/changeLenguaje.json';
import { motion } from "framer-motion";
import useHomeAnimation from '../framerMotion/useHomeAnimation.js';

function Frase( {idioma} ) {

 const { animation3} = useHomeAnimation();

  return (
    <section className="w-[90%] h-[250px]   md:min-w-[70%] md:h-[350px]   flex justify-center items-center  m-auto">
      <motion.article 
      initial = {animation3.initial}
      animate={animation3.animate}
      transition={animation3.transition}
      className="flex flex-col   md:w-[40%] ">
        <div className="border border-[white] relative animate__animated animate__zoomInDown">
          <h2 className="font-fira font-medium [font-size:_clamp(1.2em,2vw,1.5em)] text-center text-[white] py-3 md:py-7">
          {idioma ? lengua.frase.fra : "First solve the problem, then write the code"}
          </h2>
          <img
            src="/img/comillas.png"
            loading="lazy"
            alt='comillas'
            className="absolute -top-3 left-5"
          />
        </div>

        <motion.div 
        
        className="flex justify-end px-10 ">
          <div className="border-[white] border relative animate__animated animate__zoomInDown">
            <h3 className="font-fira font-medium [font-size:_clamp(1.2em,2vw,1.5em)] text-center text-[white] py-3 md:py-5 px-5">
            - John Johnson
            </h3>
            <img
              src="/img/comillas.png"
              loading="lazy"
              alt='comillas'
              className="absolute -top-3 left-5"
            />
          </div>
        </motion.div>
      </motion.article>
    </section>
  );
}

export default Frase;
