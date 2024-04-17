// import { useState } from "react"

import { useState, useEffect, useRef } from "react";

import audio from './alarmsound.mp3'
import breathin from './breath_in.mp3'
import breathout from './breath_out.mp3'

export default function Portfolio() {
  const [time, settime] = useState(new Date())

  const Time = { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }
  // sessionStorage.setItem('time',JSON.stringify(Time))
  const [stopwatch, setStopwatch] = useState(Time)
  const [isPaused, setisPaused] = useState(true)
  const [exisPaused, setexisPaused] = useState(true)
  const [exercise, setExercise] = useState(Time)
  const myaudio = useRef(null)
  const myaudio1 = useRef(null)
  const myaudio2 = useRef(null)
  // const intervalId=useRef()

  // const [Time,setSeconds]=useState(0)

  // setInterval(()=>{
  //     settime(new Date())
  // },1000);

  // setInterval(() => {
  //     setSeconds(prev=>(prev+1)%60)
  // }, 1000);


  // function fun(){
  //   console.log(isPaused,'1')

  //   console.log(isPaused,'2')
  //   newValue=isPaused ? 'start':'stop'
  //   setValue(newValue)
  // }

  const leavepage = useRef(0)
  const mytime = useRef(Time)

  useEffect(() => {
    let x = sessionStorage.getItem('time')
    if (x) {
      setStopwatch(JSON.parse(x))
      mytime.current = JSON.parse(x)
    }

    return (() => {
      if (leavepage.current === 1) {
        let x = window.confirm('restore current time?')
        if (x) {
          sessionStorage.setItem("time", JSON.stringify(mytime.current))
          mytime.current = Time
        }
        else sessionStorage.setItem("time", JSON.stringify(Time))
      }
      leavepage.current = 1
    }
    )
  }, [])



  useEffect(() => {
    const id1 = setInterval(() => {
      settime(new Date())
    }, 50);
    const intervalid = setInterval(() => {

      if (!isPaused) {
        setStopwatch(prev => {

          const newTime = { ...prev }
          newTime.milliseconds += 5
          if (newTime.milliseconds >= 100) {
            newTime.seconds = (newTime.seconds + 1)
            newTime.milliseconds = 0
          }

          if (newTime.seconds >= 60) {
            newTime.minutes = newTime.minutes + 1
            newTime.seconds = 0
          }
          if (newTime.minutes % 2 === 0 && newTime.minutes !== 0 && newTime.seconds === 0) {
            myaudio.current.play()
          }

          mytime.current = newTime
          return newTime
        });
      }


      else {
        myaudio.current.pause()
        myaudio.current.currentTime = 0;
      }
    }, 50);


    const intervalid1 = setInterval(() => {

      if (!exisPaused) {
        setExercise(prev => {

          const newTime = { ...prev }
          newTime.milliseconds += 5
          if (newTime.milliseconds >= 100) {
            newTime.seconds = (newTime.seconds + 1)
            newTime.milliseconds = 0
          }

          if (newTime.seconds >= 60) {
            newTime.minutes = newTime.minutes + 1
            newTime.seconds = 0
          }
          if (newTime.seconds % 10 === 0) {
            myaudio1.current.play()
          }
          // if (newTime.seconds % 10 === 1) {
          //   myaudio1.current.pause()
          //   myaudio1.current.currentTime = 0;
          // }

          if (newTime.seconds % 10 === 5) {
            myaudio2.current.play()
          }
          // if (newTime.seconds % 10 === 6) {
          //   myaudio2.current.pause()
          //   myaudio2.current.currentTime = 0;
          // }

          mytime.current = newTime
          return newTime
        });
      }

      else {
        myaudio1.current.pause()
        myaudio1.current.currentTime = 0;
        myaudio2.current.pause()
        myaudio2.current.currentTime = 0;
      }
    }, 50);



    return () => {
      clearInterval(intervalid);
      clearInterval(intervalid1);
      clearInterval(id1);
    };
  }, [isPaused,exisPaused]);

  return (
    <div className="min-h-[100%] text-white bg-slate-950 p-3">
      <h1 className="text-2xl relative before:absolute before:w-12 before:h-0.5 before:bg-cyan-300 before:top-9 hover:before:w-28 before:transition-all before:duration-500">PORTFOLIO</h1>
      <div className="mt-5 bg-slate-800 text-2xl w-80 h-20 p-1 relative left-[50%] -translate-x-[50%]">
        <span className="w-fit text-center mr-2 inline-block">{time.getHours().toString().padStart(2, '0')} : </span>
        <span className="w-fit text-center mr-2 inline-block">{time.getMinutes().toString().padStart(2, '0')} : </span>
        <span className="w-fit text-center mr-2 inline-block">{time.getSeconds().toString().padStart(2, '0')} : </span>
        <span className="w-20 text-left -mr-2 inline-block">{time.getMilliseconds()}</span>
      </div>

      <div className="mt-5 bg-slate-800 text-2xl w-80 p-1 relative left-[50%] -translate-x-[50%]">
        <div className="w-fit text-center mr-2 inline-block">{stopwatch.minutes.toString().padStart(2, '0')} : </div>
        <div className="w-fit text-center mr-2 inline-block">{stopwatch.seconds.toString().padStart(2, '0')} : </div>
        <div className="w-20 text-left -mr-2 inline-block">{stopwatch.milliseconds.toString().padStart(2, '0')} </div>
        <br />

        <button className="w-20 text-black bg-blue-700 rounded-lg p-1 mt-5 mb-4 px-5 hover:bg-blue-500  uppercase text-base font-medium mr-4" onClick={() => setisPaused(prev => !prev)}>{isPaused ? 'start' : 'stop'}</button>
        <button className="text-black bg-blue-700 rounded-lg p-1 mt-5 mb-4 px-5 hover:bg-blue-500 active:scale-95 uppercase text-base font-medium" onClick={() => { setStopwatch(() => Time); setisPaused(true) }}>reset</button>
        <audio ref={myaudio} src={audio}></audio>

      </div>

      <div className="mt-5 bg-slate-800 text-2xl w-80 p-1 relative left-[50%] -translate-x-[50%]">
        <div className="w-fit text-center mr-2 inline-block">{exercise.minutes.toString().padStart(2, '0')} : </div>
        <div className="w-fit text-center mr-2 inline-block">{exercise.seconds.toString().padStart(2, '0')} : </div>
        <div className="w-20 text-left -mr-2 inline-block">{exercise.milliseconds.toString().padStart(2, '0')} </div>
        <br />

        <button className="w-20 text-black bg-blue-700 rounded-lg p-1 mt-5 mb-4 px-5 hover:bg-blue-500  uppercase text-base font-medium mr-4" onClick={() => setexisPaused(prev => !prev)}>{exisPaused ? 'start' : 'stop'}</button>
        <button className="text-black bg-blue-700 rounded-lg p-1 mt-5 mb-4 px-5 hover:bg-blue-500 active:scale-95 uppercase text-base font-medium" onClick={() => { setExercise(() => Time); setexisPaused(true) }}>reset</button>
        <audio ref={myaudio1} src={breathin}></audio>
        <audio ref={myaudio2} src={breathout}></audio>

      </div>
      {/* <audio controls>
                <source src="horse.ogg" type="audio/ogg" />
         </audio> */}

      {/* <div className="mt-5 bg-slate-800 text-2xl w-80 h-20 p-1 ml-60">
            <div className="w-16 text-center border-2 inline-block">{stopwatch.hours.toString().padStart(2,'0')} : </div>
            <div className="w-16 text-center border-2 inline-block">{stopwatch.minutes.toString().padStart(2,'0')} : </div>
            <div className="w-16 text-center border-2 inline-block">{stopwatch.seconds.toString().padStart(2,'0')} : </div>
             <div className="w-20 text-center border-2 inline-block">{stopwatch.milliseconds}</div>
            </div> */}
    </div>
  )
}