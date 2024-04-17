import { useState } from "react"

export default function Services(){
   
    const [lineclamp,setlineclamp] = useState({})
    // const [stop,setStop]=useState(false)

    function setheight(e){
        setlineclamp({[e.target.id]:true})
    }

    return(
        <div className="min-h-[100%] text-white bg-slate-950 py-3 pr-4">
           <h1 className="text-2xl relative before:absolute before:w-12 before:h-0.5 before:bg-cyan-300 before:top-9 hover:before:w-24 before:transition-all before:duration-500">SERVICES</h1>
           {/* <div className={`${stop?'marquee-animate-state':''} marquee-animate mt-20 w-[50vw] overflow-y-hidden h-[80vh] relative left-[50vw] border-2 -translate-x-[50%] flex flex-col space-y-4 p-5 justify-center items-center`} onMouseOver={()=>setStop(true)} onMouseLeave={()=>setStop(false)}>
            <div className='h-24 w-96 border-2'>hello1</div>
            <div className='h-24 w-96 border-2'>hello2</div>
            <div className='h-24 w-96 border-2'>hello3</div>
            <div className='h-24 w-96 border-2'>hello4</div>
            <div className='h-24 w-96 border-2'>hello5</div>
            <div className='h-24 w-96 border-2'>hello6</div>
            <div className='h-24 w-96 border-2'>hello7</div>
            <div className='h-24 w-96 border-2'>hello8</div> */}
            <span className="block mt-8 w-fit ml-3 max-sm:text-[10px] text-[12px] text-slate-500">** Click on content to see</span>
            <div className="grid overflow-hidden grid-cols-3 w-[70vw] relative left-[49vw] -translate-x-[50%] mt-2 max-xl:w-[90vw] min-h-40  max-lg:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-4">

              <div  className="w-72 h-fit overflow-hidden m-4 pb-10 flex flex-col items-center px-3 bg-slate-900 shadow-sm hover:shadow-md hover:shadow-white shadow-white ">
                <img src='images/web1.png' alt='img' className="h-20 select-none"></img>
               <h5 className="text-xl -mt-2">Web Development</h5>
               <p id='div1' className={`text-slate-400 hover:text-slate-300 mt-2 ${lineclamp['div1']?'':'line-clamp-4'}`} onClick={setheight} onMouseLeave={()=>setlineclamp({})}>As a proficient web developer, I possess a comprehensive skill set encompassing both front-end and back-end technologies. My expertise enables me to create dynamic, responsive, and visually appealing web applications tailored to meet various client requirements.</p>
              </div>

              <div className="overflow-hidden w-72 h-fit pb-10 flex flex-col items-center m-4 text-left p-3 bg-slate-900 shadow-sm hover:shadow-md hover:shadow-white shadow-white">
              <img src='images/websecurity1.png' alt='img' className="h-14 select-none"></img>
               <h5 className="text-xl mt-1">Web Security</h5>
               <p className={`text-slate-400 hover:text-slate-300 mt-2 ${lineclamp['div2']?'':'line-clamp-4'} `} id='div2' onClick={setheight} onMouseLeave={()=>setlineclamp({})}>I possess a strong understanding of web security principles and best practices, including secure coding techniques, data encryption, and protection against common vulnerabilities such as XSS and CSRF. With experience in implementing authentication mechanisms and conducting security audits, I prioritize the confidentiality, integrity, and availability of web applications.</p>
              </div>


              <div className="w-72 h-fit pb-10 flex flex-col items-center m-4 text-left p-3 bg-slate-900 shadow-sm hover:shadow-md hover:shadow-white shadow-white" >
              <img src='images/webscraping.png' alt='img' className="h-14 select-none"></img>
               <h5 className="text-xl mt-1">Web Scraping</h5>
               <p id='div3' className={`text-slate-400 hover:text-slate-300 mt-2 ${lineclamp['div3']?'':'line-clamp-4'}`} onClick={setheight} onMouseLeave={()=>setlineclamp({})}>I am proficient in web scraping techniques using Python libraries such as BeautifulSoup and Scrapy. With expertise in parsing HTML and extracting relevant data from websites efficiently, I can automate data extraction tasks and gather valuable insights from web sources.</p>
              </div>

              <div className="w-72 h-fit pb-10 flex flex-col items-center m-4  p-3 bg-slate-900 shadow-sm hover:shadow-md hover:shadow-white shadow-white" >
              <img src='images/appdevelopment.png' alt='img' className="h-14 select-none"></img>
               <h5 className="text-xl mt-1">App Development</h5>
               <p id='div4' className={`text-slate-400 hover:text-slate-300 mt-2 ${lineclamp['div4']?'':'line-clamp-4'}`} onClick={setheight} onMouseLeave={()=>setlineclamp({})}>I am proficient in web scraping techniques using Python libraries such as BeautifulSoup and Scrapy. With expertise in parsing HTML and extracting relevant data from websites efficiently, I can automate data extraction tasks and gather valuable insights from web sources.</p>
              </div>

              <div className="w-72 h-fit pb-10 m-4 flex flex-col items-center p-3 bg-slate-900 shadow-sm hover:shadow-md hover:shadow-white shadow-white" >
              <img src='images/cybersecurity.png' alt='img' className="h-14 select-none"></img>
               <h5 className="text-xl mt-1">Cyber Security</h5>
               <p id='div5' className={`text-slate-400 hover:text-slate-300 mt-2 ${lineclamp['div5']?'':'line-clamp-4'}`} onClick={setheight} onMouseLeave={()=>setlineclamp({})}>I am proficient in web scraping techniques using Python libraries such as BeautifulSoup and Scrapy. With expertise in parsing HTML and extracting relevant data from websites efficiently, I can automate data extraction tasks and gather valuable insights from web sources.</p>
              </div>

              <div  className="w-72 h-fit pb-10 m-4 flex flex-col items-center p-3 bg-slate-900 shadow-sm hover:shadow-md hover:shadow-white shadow-white" >
              <img src='images/pythondeveloper1.png' alt='img' className="h-14 select-none"></img>
               <h5 className="text-xl mt-1">Python Developer</h5>
               <p id='div6' className={`text-slate-400 hover:text-slate-300 mt-2 ${lineclamp['div6']?'':'line-clamp-4'}`} onClick={setheight} onMouseLeave={()=>setlineclamp({})}>I am proficient in web scraping techniques using Python libraries such as BeautifulSoup and Scrapy. With expertise in parsing HTML and extracting relevant data from websites efficiently, I can automate data extraction tasks and gather valuable insights from web sources.</p>
              </div>

           </div>
        </div>
    )
    
}