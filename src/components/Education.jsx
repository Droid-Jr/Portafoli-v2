

function Education() {
  return (
    <section className="  md:mt-0 w-[90%]  m-auto justify-center md:h-[90%]  md:min-w-[70%]  flex flex-col ">
        <section className="  ">
        <article className="px-5  flex items-center gap-2">
            <h2 className="[font-size:_clamp(1.6em,3vw,3em)] text-[#C778DD]">#</h2>
            <h2 className={`[font-size:_clamp(1.6em,3vw,3em)] py-2 font-medium drop-shadow-[2px_3px_2px_#444444] font-fira  text-[#ffffff]`}>Education</h2>
            <div className="w-[20%] h-[3px] bg-[#C778DD]"></div>
        </article>

        <article className={`grid gap-7  md:gap-10 md:grid-cols-2 `}>

            <div className=" flex">

                <div className=" w-[50px] flex flex-col items-center">
                    <div className={`w-[25px] h-[25px]  rounded-full  bg-[#ffffff]`}></div>
                    <div className={`w-[5px] h-[320px]   bg-[#ffffff]`}></div>
                </div>
                
                <div className={` w-[87%] grid `}>
                    <h2 className={`[font-size:_clamp(1.2em,2vw,1.7em)] font-medium font-fira text-[#ffffff]`}>
                     "SUMMARY"</h2>
                    <h3 className={`[font-size:_clamp(1.5em,2vw,1.9em)] font-medium font-fira text-[#C778DD] `}>MARIO CARBAJAL</h3>
                    <p className={`[font-size:_clamp(.9em,1vw,1.2em)]   font-fira text-[#ABB2BF] `}> from Academlo with socialization skills, planning strategies to achieve a good objective and leadership. I like to learn new things, to be able to achieve the proposed objectives, I am interested in developing in very advanced areas such as programming, web design, I am motivated by teamwork, progress and good appearance.</p>
                </div>
            </div>

            <div className={` flex`}>

            <div className={`w-[50px] flex flex-col items-center`}>
                    <div className={`w-[25px] h-[25px] bg-[#ffffff] rounded-full`}></div>
                    <div className={`w-[5px] h-[320px] bg-[#ffffff]`}></div>
                </div>
                
                <div className={`w-[87%] grid `}>
                    <h2 className={`[font-size:_clamp(1.4em,3vw,1.8em)] font-medium font-fira text-[#C778DD]`}>Academlo</h2>
                    
                    <a href="https://certificates.academlo.com/en/verify/68843221295831" target="_blank" className={`[font-size:_clamp(1.2em,2vw,1.2em)] font-medium font-fira text-[#ffffff]  border border-[#C778DD] w-[140px] text-center h-[35px] rounded-lg`}>Certificate</a>
                    
                    <h3 className={`[font-size:_clamp(1.5em,2vw,1.9em)] font-medium font-fira text-[#C778DD]`}>Web Development Fundamentals</h3>
                    <p className={`[font-size:_clamp(.85em,1vw,1.2em)]  font-medium font-fira text-[#ABB2BF]`}>In fundamentals we obtained the necessary skills to correctly develop the visual part of a responsive website without using libraries/frameworks, as well as add dynamic content with javascript, work collaboratively with git.</p>
                </div>
            </div>

            <div className={` flex`}>

            <div className={` w-[50px] flex flex-col items-center`}>
                    <div className={`w-[25px] h-[25px] bg-[#ffffff] rounded-full`}></div>
                    <div className={`w-[5px] h-[320px] bg-[#ffffff]`}></div>
                </div>
                
                <div className={` w-[87%] grid gap-4`}>
                    <h2 className={`[font-size:_clamp(1.4em,3vw,1.8em)] font-medium font-fira text-[#C778DD]`}>Academlo</h2>
                    
                    <a href="https://certificates.academlo.com/en/verify/46649045672705" target="_blank" className={`[font-size:_clamp(1.2em,2vw,1.2em)] border border-[#C778DD]  font-medium font-fira text-[#ffffff] w-[140px] text-center h-[35px] rounded-lg`}>Certificate</a>
                    
                    <h3 className={`[font-size:_clamp(1.5em,2vw,1.9em)] font-medium font-fira text-[#C778DD]`}>Web Application Development with React</h3>
                    <p className={`[font-size:_clamp(.85em,1vw,1.2em)]  font-fira text-[#ABB2BF]`}>In React We learned to create web applications with React JS, achieving great interaction with the user using previous knowledge of HTML, CSS and Javascript.</p>
                </div>

            </div>

            <div className={` flex`}>

            <div className={` w-[50px] flex flex-col items-center`}>
                    <div className={`w-[25px] h-[25px] bg-[#ffffff] rounded-full`}></div>
                    <div className={`w-[5px] h-[325px] bg-[#ffffff]`}></div>
                </div>
                
                <div className={` w-[87%] grid gap-4`}>
                    <h2 className={`[font-size:_clamp(1.4em,3vw,1.8em)] font-medium font-fira text-[#C778DD]`}>Academlo</h2>
                    
                    <a href="https://certificates.academlo.com/en/verify/16931248160449" target="_blank" className={`[font-size:_clamp(1.2em,2vw,1.2em)] font-medium font-fira text-[#ffffff] w-[140px] text-center border border-[#C778DD] h-[35px] rounded-lg`}>Certificate</a>
                    
                    <h3 className={`[font-size:_clamp(1.5em,2vw,1.9em)] font-medium font-fira text-[#C778DD]`}>Back-End Node</h3>
                    <p className={`[font-size:_clamp(.85em,1vw,1.2em)]  font-medium font-fira text-[#ffffff]`}>In Back we learned how to build an application from the server with Node and Express from 0 to deployment on a server and make a Rest API using a relational database, user authentication, security against XSS and CSRF attacks, you will be able to validate the data you receive the server and can build custom middlewares with Express</p>
                </div>

            </div>

        </article>
    </section>
    </section>
  )
}

export default Education