

function Frase() {

  return (

    <section className="w-[95%] h-[250px]   md:min-w-[70%]  flex justify-center     m-auto">
       
       <article className="flex flex-col justify-around   w-[70%] ">

       <div className="border border-[white] relative">
        <h2 className="font-fira font-medium [font-size:_clamp(1.2em,2vw,1.5em)] text-center text-[white] py-2">With great power comes great electricity bill</h2>
        <img src="/img/comillas.png" loading="lazy" className="absolute -top-3 left-5" />
       </div>

       <div className="flex justify-end px-10 ">

       <div className="border-[white] border relative">
       <h3 className="font-fira font-medium [font-size:_clamp(1.2em,2vw,1.5em)] text-center text-[white] py-2 px-5">- Dr. Who</h3>
       <img src="/img/comillas.png" loading="lazy" className="absolute -top-3 left-5" />
       </div>
       
       </div>
       </article>

    </section>

  )
}

export default Frase