import { useState, useEffect, useRef } from "react";
import God_arr from "./Gods";

export default function About() {
 
  const [Skills_arr1,setSkills]=useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://127.0.0.1:8000/skills/';
        const response = await fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setSkills([...data])

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
  // const Skills_arr = [['Python', 90], ['Web Scarping', 80], ['React Js', 80], ['JavaScript', 80], ['Django', 80], ['Django Rest Framework', 70], ['C', 70], ['HTML', 95], ['CSS', 90], ['Taiwind CSS', 90], ['DSA', 60]]

  // let x=Skills_arr1.map((elem,index)=>{
  //   console.log(elem);
  //   return elem
  // })



  const details_arr = [['BirthDay', '5 March 2001'], ['Age', 22], ['Degree', 'B.Tech'], ['Phone', '+91 9649954269'], ['Email', 'rksckn123@gmail.com'], ['City', 'Jaipur'], ['Freelance', 'Available']]

  const Facts_arr = [['Project', 20], ['Clients', 100], ['Hours of Support', 1000], ['Hard Workers', 100], ['Achievments', 10]]

  //  const God_arr=[['images/ganesh.jpg','Ganesh Ji','Engineer'],['images/keshav.jpg','keshav gupta','Engineer'],['images/laxman.jpg','Lamxan Singh Saini','Pro Coder'],['images/hanumanji.jpg','hanumanji','God'],['images/Nature.jpg','Nature','Nature']]

  let skills = Skills_arr1.map((elem, index) => {
    const x = elem.profiency
    return (

      <div key={index} className="grid grid-cols-1 gap-y-2">
        <div className='flex justify-between'>
          <span className="block text-left uppercase">{elem.skill_name}</span>
          <span className="block text-right">{elem.profiency}%</span>
        </div>
        <div className="h-3 bg-slate-600 col-span-2">
          <div style={{ width: `${x}%` }} className={`bg-cyan-400 h-[100%]`}></div>
        </div>
      </div>
    )
  })

  let details = details_arr.map((elem, index) => {
    return (
      <div key={index} className="w-[20rem] text-left">
        <span className="mr-2 font-semibold text-cyan-400">{elem[0]}:</span>
        <span>{elem[1]}</span>
      </div>

    )
  })

  let Facts = Facts_arr.map((elem, index) => {
    return (
      <span key={index} className='text-sm'>{elem[0]}
        <br />
        <span className='text-4xl text-blue-700'>{elem[1]}</span>
      </span>
    )
  })

  const [animationDir, setanimationDir] = useState(true)

  let God = God_arr.map((elem, index) => {
    return (
      <div key={index} className={`${animationDir ? 'right-animation' : 'left-animation'} ml-24 mr-24 max-md:ml-5 max-md:mr-5 lg:text-lg relative flex justify-center p-3 flex-col items-center space-y-1`}>
        <img src={`${elem[0]}`} alt='img' className="h-80 w-[40vw] max-md:h-44" />
        <div className="text-xl font-medium text-red-600">{elem[1]}</div>
        <div className="text-lg">{elem[2]}</div>
      </div>
    )

  })

  const indexRef = useRef(0)

  const [isPaused, setisPaused] = useState(false)

  const currentElem2 = God[indexRef.current];

  const [buttonClass, setButtonClass] = useState({});

  let arr1 = Array(God_arr.length).fill('')

  let change_button = arr1.map((_, index) => {
    let x = 'id' + index
    return (
      <button key={index} id={x} onClick={ChangeSlide} className={`${buttonClass[x] ? 'bg-teal-400' : ''} h-3 w-3 rounded-full border-[0.5px]`}></button>
    )
  })

  function ChangeSlide(e) {
    const x = parseInt(e.target.id[2])
    if (x < indexRef.current) {
      setanimationDir(false)
    }
    else {
      setanimationDir(true)
    }
    indexRef.current = x
    updateButtonClass()
    pauseInterval()
  }

  const pausetimer = useRef(null)

  const pauseInterval = () => {
    setisPaused(true)

    clearTimeout(pausetimer.current)
    pausetimer.current = setTimeout(() => {

      setanimationDir(true)
      indexRef.current = (indexRef.current + 1) % God_arr.length
      setisPaused(false)
    }, 6000)
  }

  const updateButtonClass = () => {

    const updatedButtonClass = {};
    const currentButtonId = 'id' + indexRef.current;
    updatedButtonClass[currentButtonId] = !updatedButtonClass[currentButtonId];

    setButtonClass(updatedButtonClass);
  };

  useEffect(() => {
    updateButtonClass();
    const intervalId = setInterval(() => {
      if (!isPaused) {
        indexRef.current = (indexRef.current + 1) % God_arr.length
        updateButtonClass();
      }
    }, 6000);

    return () => {
      return clearInterval(intervalId)
    };
  }, [isPaused]);



  return (
    <div className="min-h-[100%] w-full text-white bg-slate-950 p-3 pb-14">
      <h1 className="text-2xl relative before:absolute before:w-12 before:h-0.5 before:bg-cyan-300 before:top-9 hover:before:w-20 before:transition-all before:duration-500">ABOUT</h1>


      <p className='mt-5 ml-16 mr-14 p-4 border-t-2 border-b-2 text-lg max-sm:ml-3 max-sm:mr-2 max-sm:text-base'>Hello I am Rahul Saini I am a passionate and results-driven software engineer with a strong background in Full Stack Development. My journey in the world of software development has equipped me with the skills to tackle complex problems and deliver innovative solutions. I am dedicated to continuous learning and thrive in dynamic, collaborative environments.</p>

      <div className='flex ml-20 mr-14 mt-5 space-x-10 sm:flex-col md:flex-row sm:space-x-0 md:space-x-10 max-sm:flex-col max-sm:space-y-10 max-sm:space-x-0 max-sm:ml-3 max-sm:mr-2'>
        <img src='images/myimage.jpg' alt='img' className="h-80"></img>
        <div className="">

          <h2 className='text-left text-2xl text-pretty'>SOFTWARE ENGINEER</h2>
          <p className="mt-2 text-lg text-left">I am B.Tech Graduate Software Engineer</p>

          <div className="grid grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-y-4 w-[45rem] text-lg pt-2 md:grid-cols-1 lg:grid-cols-2">
            {details}
          </div>

        </div>
      </div>


      <h2 className="text-3xl mt-10">SKILLS</h2>
      <p className="m-5 text-lg text-wrap sm:m-3 mb-5">Following are my skills and i have done many projects using these skills.</p>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-12 gap-y-6 ml-14 mr-16 max-sm:ml-2 max-sm:mr-0 border-b-2 pb-6">
        {skills}

      </div>

      <h2 className="text-3xl mt-10">FACTS</h2>
      <div className='grid grid-cols-4 justify-center max-md:grid-cols-2 border-b-2 border-t-2 ml-14 mr-10 max-md:p-0 max-md:pt-2 p-4 text-cyan-400 mt-4 gap-y-6'>
        {Facts}
      </div>
      <h2 className="text-3xl mt-10">OUR GODS</h2>
      <div className="max-md:ml-5 max-md:mr-5 mt-3 ml-24 mr-24"> <p className=" text-lg text-wrap sm:m-3">The Trimurti are the most prominent deities of contemporary Hinduism. This consists of Brahma- the Creator, Vishnu- the Preserver, and Shiva- the Destroyer. Their feminine counterparts are Saraswati- the wife of Brahma, Lakshmi- the wife of Vishnu, and Parvati (or Durga)- the wife of Shiva.</p>
      </div>
      <div className="max-sm:min-h-[70vh] max-md:min-h-[50vh] lg:min-h-[70vh]">
        {currentElem2}
      </div>
      <div className="flex mt-1 justify-center space-x-3">
        {change_button}
      </div>

    </div>

  )
}