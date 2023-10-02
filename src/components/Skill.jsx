import skills from "../skill/Skill.json";

function Skill() {
  return (
    <section id="skill" className="w-[80%] mt-5 py-5 flex flex-col gap-8  md:w-[90%] md:h-[80%]  m-auto  ">
      <article className="flex items-center gap-5 " data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h2 className="[font-size:_clamp(1.4em,3vw,1.8em)] font-medium font-fira text-[#C778DD]">
          #
        </h2>
        <h2 className="[font-size:_clamp(1.8em,3vw,5em)] font-medium font-fira text-[white]">
          Skills
        </h2>
        <div className="w-[30%] h-[3px] bg-[#a05bb3]"></div>
      </article>

      <article className="   grid sm:grid-cols-2 justify-center gap-5 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((items, index) => (
          <div
          data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
            key={index}
            className="border w-[200px] gap-5 h-[200px] grid justify-center cursor-pointer text-center duration-[400ms] hover:scale-90 hover:border-[#C778DD] shadow-[2px_2px_6px_#4F1F5C] hover:shadow-[1px_1px_5px_white]"
          >
            <img src={items.img} loading="lazy" className="m-auto" />
            <h3 className="[font-size:_clamp(1.4em,3vw,1.2em)] font-medium font-fira text-[#C778DD] ">
              {items.tiele}
            </h3>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Skill;

// "","","/tecno/3.png","/tecno/4.png","/tecno/5.png","/tecno/6.png","/tecno/7.png", "/tecno/8.png","/tecno/9.png","/tecno/10.png","/tecno/11.png"
