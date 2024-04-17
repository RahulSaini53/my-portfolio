import { useState,useRef } from "react";
import { FaInstagramSquare,FaFacebook,FaLinkedin,FaTwitter} from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import DropdownDisplay from './DropdownDisplay.js';
import { Link } from "react-router-dom";
import slideSound from './slidesound.mp3'

export default function Header(props){

    const slidesound=useRef(null)

    const [dropdown, setdropdown]=useState(false)
   
    return(
      <div className="relative h-14 top-0 w-full bg-red-600">
        <header className="fixed z-[100] top-0 h-16 w-full overflow-hidden bg-slate-300 flex justify-between items-center py-1  shadow-md hover:shadow-lg">

          <div className="mx-6 flex items-center space-x-3 max-md:mx-2 max-md:space-x-1">
          <img style={{borderRadius:'100%'}} src='./images/bajrangbali.jpg' alt='img' className="h-12 w-12"></img>
          <h1 className="max-md:text-lg  w-fit font-bold font-serif text-2xl text-red-600">Jai Shree Ram</h1>
          </div>
          <nav className="">
            <ul className="max-lg:hidden items-center flex  space-x-5 font-serif font-bold text-[18px] max-xl:space-x-4">
            {
             props.nav_list.map((elem,index) =>{
             if(elem==='Blog'){
               return(
               
                <li key={index} className={`${dropdown ? 'before:-rotate-[135deg] before:translate-y-2 text-red-600 underline before:border-red-600':'before:rotate-45'} hover:cursor-pointer before:border-black  before:border-b-2 before:border-r-2  relative dropdown pr-5 py-2 before:transition-transform before:duration-500 before:translate-y-1`} id={elem}  onMouseEnter={()=>setdropdown(true)} onMouseLeave={()=>setdropdown(false)}>{elem}</li>
                
               )
              
             }

             return(<li key={index} className={`${props.componentids===elem ? 'nav-active': ' hover:text-red-600 hover:underline hover:cursor-pointer' }`} id={elem} onClick={props.setids}>{elem}</li>
             )}
             )
             }
             
            </ul>
          </nav>
          <div className="flex items-center space-x-4 justify-between mr-10 max-xl:mr-2 max-md:mr-3 max-md:space-x-2">
          <div className="flex items-center space-x-4 justify-between mr-3 max-xl:mr-2 max-md:mr-3 max-md:space-x-2 max-sm:hidden">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare color="red" size={20}/></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook color="green" size={20}/></a>
            <a href="https://www.linkedin.com/in/rahul-saini-440745270/" target="_blank" rel="noopener noreferrer"><FaLinkedin color="black" size={20}/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaTwitter color="blue" size={20} /></a>
            </div>

            <div className="cursor-pointer relative pr-8 py-3">
            <Link to='Messages' className="hover:text-blue-400"> <IoMdNotifications size={25}/> </Link>
            <div className="absolute top-0 right-0 text-sm text-blue-800 font-bold w-10 text-left pl-0.5"> 2000 </div>
          </div>
            <div ref={props.myref2} style={{backgroundColor:props.opendisplay?'slategray':''}} className="w-10 py-1.5 h-10 flex justify-around items-center max-xl:hidden max-lg:flex flex-col transition ease-in-out delay-15 xl:hover:scale-105 duration-30 active:scale-105 rounded-full" onClick={() => {props.setOpendisplay(prev=> !prev); props.setblogs({});slidesound.current.play()}}>
             <div className="w-7 h-1 bg-black"></div>
             <div className="w-7 h-1 bg-black"></div>
             <div className="w-7 h-1 bg-black"></div>
             <audio ref={slidesound} src={slideSound}></audio>
          </div>
          
          
          </div>

        </header>
        <div style={{visibility:dropdown?'visible':'hidden'}} className="transition ease-in-out  hover:-translate-y-1 duration-30 fixed top-[3.2rem] w-48 min-h-60 right-[26vw] max-xl:left-[67vw] bg-white rounded-md dropdown-menu  z-[101] flex flex-col space-y-3 items-center hover:before:opacity-0 before:border-t-2 before:border-l-2 border-2 pb-3" onMouseOverCapture={()=>setdropdown(true)} onMouseLeave={()=>setdropdown(false)} onClick={()=>props.setcomponentids('')}>
        <DropdownDisplay setblogs={props.setblogs} blogs={props.blogs} />
        </div>
        </div>
    )
}