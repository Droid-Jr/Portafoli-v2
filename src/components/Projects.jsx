import dts from '../data/projectsData.json'

function Projects() {





  return (
    <section className="w-[87%] mt-20  md:mt-28  grid place-items-center  md:flex m-auto  "  >

        <main className='w-[100%] flex flex-col gap-7'>


        <article className='flex items-center  gap-2'>
            <h3 className='text-[#C778DD] font-fira font-medium [font-size:_clamp(1.4em,3vw,4em)]'>#</h3>
            <h2 className='[font-size:_clamp(2em,3vw,4em)] text-[white]'>Projects</h2>
            <div className='w-[40%] h-[3px] bg-[#C778DD]'></div>
        </article>

        <article className='grid w-[100%] place-content-center md:grid-cols-2 lg:grid-cols-3  py-3 gap-5 '>
            
                {
                    dts?.map((xd, index) => 
                    <div className='w-[300px]  grid pb-2 min-h-[250px] border cursor-pointer duration-[400ms] shadow-[1px_1px_5px_#C778DD] hover:bg-[rgb(199,120,221,.2)]' key={index}>
                        <picture>
                            <img src={xd.imagen} loading='lazy' />
                        </picture>

                        <div className='flex flex-col gap-4 '>
                        <h2 className='border text-center font-fira font-medium [font-size:_clamp(1em,2vw,1.1em)] md:py-1 text-[white]'>{xd.lenguajes}</h2>
                        <h3 className='font-fira font-medium [font-size:_clamp(1.4em,1vw,2.4em)] px-4 text-[#C778DD]'>{xd.title}</h3>
                        <p className='font-fira font-medium [font-size:_clamp(1em,2vw,1.1em)] px-4 text-[white]'>{xd.descri}</p>
                        <div className='flex justify-around '>
                            <button className='border px-7 py-1 duration-[400ms] ease-in-out hover:border-[#C778DD] text-[white] hover:text-[#C778DD]'><i class="fa-regular fa-eye"></i></button>
                            <button className='border px-7 py-1 duration-[400ms] ease-in-out hover:border-[#C778DD] text-[white] hover:text-[#C778DD]'><i className="fa-brands fa-github"></i></button>
                        </div>
                        </div>

                        
                    </div>)
                }

        </article>

        </main>
    </section>
  )
}

export default Projects