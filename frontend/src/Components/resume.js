import {useEffect, useState} from 'react';
export default function Resume(){

  console.log('hello from resume')
  
  const [myprojects,setMyprojects]=useState([])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const url = 'http://127.0.0.1:8000/myprojects/';
    
        const response = await fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });

        console.log(response.status,'i am my projects')

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setMyprojects([...data])

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[])
   


    return(
        <div className="min-h-[100%]  text-white bg-slate-950 p-3 relative">
            <h1 className="text-2xl relative before:absolute before:w-12 before:h-0.5 before:bg-cyan-300 before:top-9 hover:before:w-[5.5rem] before:transition-all before:duration-500">RESUME</h1>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 ml-8 mr-8 mt-10 max-md:ml-0 max-md:mr-0 text-left ">

               <div className="flex flex-col items-start p-4 max-md:p-2">
                 <div className="min-h-40 ">
                    <h2 className="text-xl text-red-600">SUMMARY</h2>
                    <div className="hover:dark:bg-slate-900 mt-2 pl-3 mb-5 border-l-2 min-h-32 border-green-600 relative before:absolute before:-left-2 before:border-2 before:border-green-600 before:h-4 before:w-4 before:bg-slate-950  before:rounded-full text-left">
                        <h4 className="text-xl text-cyan-400 ">Rahul Saini</h4>
                        <p className="mt-2 text-[17px] indent-5 hyphens-auto">I am a passionate and results-driven software engineer with a strong background in Full Stack Development. My journey in the world of software development has equipped me with the skills to tackle complex problems and deliver innovative solutions. I am dedicated to continuous learning and thrive in dynamic, collaborative environments.</p>
                        <ul className="flex flex-col space-y-3 mt-4 list-disc list-inside list-color">
                          <li className="">Jaipur,Rajasthan,India-302017</li>
                          <li>+91 9649954269</li>
                          <li>rksckn123@gmail.com</li>
                        </ul>
                    </div>
                  </div>
                  <div className="min-h-36 uppercase max-sm:text-sm">

                    <h2 className="text-xl text-red-600">EDUCATION</h2>

                    <div className="mt-2 mb-5  min-h-32 lg:w-[42vw] relative before:absolute before:-left-[6.65px] before:border-2 before:border-green-600 before:h-4 before:w-4 before:bg-slate-950  before:rounded-full">
                     <div className="border-l-2 w-[100%] border-green-600 pl-3 hover:dark:bg-slate-900">
                      <h5 className="text-cyan-400 text-lg">Tenth</h5>
                      <div>
                       <div className="block w-40 mt-1 bg-slate-500 pl-3 text-left">Percentage-93.67</div>
                       <div className="block w-24 mt-1 bg-slate-500 text-center">2016-2017</div>
                       <div className="mt-1">Saraswati Adarsh Senior Secondary School Kailadevi Karauli</div>
                      </div>
                     </div>
                    <div className="border-l-2 border-green-600 pl-3 hover:dark:bg-slate-900 relative before:absolute before:-left-[7.7px] before:border-2 before:border-green-600 before:h-4 before:w-4 before:bg-slate-950  before:rounded-full">
                       <h5 className="text-cyan-400 text-lg mt-4">Twelfth</h5>
                       <div className="block w-40 mt-1 bg-slate-500 pl-3 text-left">Percentage-90.20</div>
                        <div className="block w-24 mt-1 bg-slate-500 text-center">2018-2019</div>
                        <div className="mt-1">Gurukul Science Academy Gangapur City</div>
                     </div>
                     <div className="border-l-2 border-green-600 pl-3 hover:dark:bg-slate-900 relative before:absolute before:-left-[7.7px] before:border-2 before:border-green-600 before:h-4 before:w-4 before:bg-slate-950  before:rounded-full">
                       <h5 className="text-cyan-400 text-lg mt-4">B.tech</h5>
                       <div className="block mt-1 text-left">Stream- Computer Science And Engineering</div>
                       <div className="block w-28 mt-1 bg-slate-500 pl-3 text-left">CGPA-6.42</div>
                        <div className="block w-24 mt-1 bg-slate-500 text-center">2020-2024</div>
                        <div className="mt-1">Malaviya National Institute Of Technology Jaipur</div>
                     </div>
                    </div>
                 </div>
                </div>

             <div className=" text-start p-2 max-md:p-2">
                    <h2 className="text-xl uppercase text-red-600">My Project</h2>
                    <div  className="p-0 pl-3 mt-2 mb-5 border-l-2 min-h-96 border-green-600 relative ">   
                    {/* <ul className="list-disc list-inside text-blue-600 ">
                    <li className="text-blue-600 text-lg"> Personal Portfolio</li>
                    <p className="ml-7 text-white"><span className="text-[17px]">Discription</span></p>
                    <li className="text-blue-600 text-lg">Text-Summarization</li>
                     </ul> */}

                    
            
                 {   myprojects.map((elem)=>{
                        // console.log('i ma resume')
                        // if(myprojects.length){
                        //   console.log('Data Not loaded! Server Failure')
                        //   return (
                        //   <>
                        //   <div className='animate-round w-6 h-6 rounded-full border-t-2 border-l-2 border-r-2 inline-block relative left-[50%] -translate-x-[50%]                    '></div>
                        //   <div className='text-xl text-center text-red-500'>Data Not loaded! Server Failure!!!!!</div>
                        //   </>
                        //   )
                        // }
                        return(
                          <div className="mb-6 pb-3 px-4 before:absolute before:-left-[8.5px] before:border-2 before:border-green-600 before:h-4 before:w-4 before:bg-slate-950  before:rounded-full hover:dark:bg-slate-900" key={elem.id}>
                          <h5 className="relative ml-1 mb-1 text-base text-cyan-400 before:absolute before:-left-1 before:top-2.5 2 pl-2 before:h-2 before:w-2 before:rounded-full before:bg-blue-500 uppercase">{elem.project_name}</h5>
                          <div className="ml-3 mb-2 text-wrap"><span className="text-[17px] mr-2">Description-</span>{elem.project_description}</div>
                          <div className="ml-3 mb-2 max-sm:text-sm tracking-wider "><span className="text-[17px] mr-2">Tech Used-</span>{elem.tech_used}</div>
                          <div className="ml-3 mb-2"><span className="mr-3">Github Link-</span><a className="text-blue-600 underline" href='http://localhost:3000' target="_blank" rel="noopener noreferrer">{elem.link_url}</a></div>
                         </div>
                        )
                       })
                      }
                    </div> 
                </div>

            </div>
        </div>
    )
    
}                                       