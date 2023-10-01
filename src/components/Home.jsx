

function Home() {
  return (
    <main className="w-[95%] py-5  md:w-[80%] md:h-[423px] grid place-items-center  md:flex m-auto  ">

        <article className=" w-[80%] md:h-[80%] flex flex-col gap-10 justify-center">
            <h1 className="font-fira font-semibold [font-size:_clamp(1.4em,3vw,2em)] text-[white]">I'm <span className="text-[#C778DD]">Mario Carbajal,</span> front-end developer</h1>

            <p className="text-[16px] font-fira font-medium text-[#ABB2BF]">Web Developer passionate about technology and programming</p>

            <div className="">
            <button className="border-[#C778DD] border px-3 py-1 text-[white] font-fira font-medium">Contact me!!</button>
            </div>
        </article>
        
        <article className="w-[80%]  md:h-[100%] grid place-items-center md:w-[100%]">
            <img src="/img/marioxD3.png" className="w-[450px]"/>
        </article>
    </main>
  )
}

export default Home