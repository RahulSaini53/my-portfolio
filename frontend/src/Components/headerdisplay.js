// import { Link } from "react-router-dom"
import { useState } from "react"
import DropdownDisplay from './DropdownDisplay.js';

export default function HeaderDisplay(props){
    const [dropdown, setdropdown]=useState(false)

    // function Blogfunction(e){
           
    // }

    return(
        <div ref={props.myref}  className={`${props.opendisplay ? '-translate-x-80':''} min-h-96 z-50 h-auto w-80 bg-slate-500 rounded-md  max-sm:w-64 fixed -right-80 2xl:top-16 top-14 transition-all duration-700`}>
            <nav className="">
            <ul className="first-line: flex flex-col py-4 space-y-3 font-serif font-bold text-[18px] items-center">
            {
             props.nav_list.map((elem,index) =>{
             if(elem==='Blog'){
               return(
              <div key={index}>
                <li className={`${dropdown ? 'before:-rotate-[135deg] before:translate-y-1 text-red-600 underline before:border-red-600':'before:rotate-45 before:border-black'} before:transition-transform before:duration-500 hover:cursor-pointer before:border-r-2 before:border-b-2  dropdown1 pr-5 w-52  relative hover:before:border-red-600 hover:text-red-600`} id={elem} onClick={()=>setdropdown(prev=> !prev)}>
                <h6 className="active:bg-red-500 rounded-xl hover:underline">{elem}</h6> </li>
                <div style={{display:dropdown?'flex':'None'}} className="pb-2 w-48 top-1 relative bg-slate-400 rounded-md flex-col space-y-3 items-center justify-between" onClick={()=>props.setcomponentids('')}>
                <DropdownDisplay  setblogs={props.setblogs} blogs={props.blogs} />
        </div>     
               
        </div>
               )
              
             }

             return(<li key={index} className={`${props.componentids===elem ? 'nav-active': ' hover:underline hover:cursor-pointer lg:hover:text-red-600' } w-52  active:bg-red-500 rounded-xl`} id={elem} onClick={props.setids}>{elem}</li>
             )}
             )
             }
             
            </ul>
          </nav>
 
        </div>
    )
}