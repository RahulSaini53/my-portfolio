// alt-z for word wrap
import { useState, useEffect } from 'react';

export default function Home(props) {

  let arr = ['Full Stack Developer', 'B.tech Graduate', 'Python Developer', 'AI Developer']

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [arr.length]);

  function renderabout() {
    props.setcomponentids('About')
  }

  return (
    <div className='min-h-[100%] -z-10'>

      {/* <div style={{backgroundImage:'url(images/nature2.jpg)',backgroundAttachment:'fixed',backgroundBlendMode:'multiply',backgroundSize: '100% 100%',backgroundColor:'lighten'}} className='bg-no-repeat  bg-opacity-5 resize-x min-h-[540px] -z-10 '> */}
      {/* <img src='./images/shreekrishna.jpg' alt='img' className="h-screen"></img> */}
      <img src='images/myphoto.jpg' alt='img' className='h-48 rounded-full m-auto relative top-5'></img>
      <div>
        <span className="text-4xl  text-red-600 text-pretty relative top-10 font-semibold">Rahul Saini</span>
        <div className="text-3xl relative top-10 mt-2 text-lime-500 flex text-pretty font-semibold ml-12 mr-12 md:ml-20 md:mr-20 justify-center space-x-2 max-md:flex-col max-md:space-y-2 items-center">
          <span className='relative w-28 text-right max-md:text-center'>I am </span>
          <span className='ani-bounce relative w-72 inline-block text-left max-md:text-center'>{arr[index]}</span>
        </div>
      </div>
      <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-16 me-2 mb-2 dark:focus:ring-yellow-900" onClick={renderabout}>About Me</button>
    </div>
  )
}