import { Link } from "react-router-dom";
// import { useState } from "react";
export default function DropdownDisplay(props){
    
    return(
         <> 
          <div className={`${props.blogs.blog1?'bg-slate-600':''} w-40 rounded-md mt-3  text-lg cursor-pointer hover:bg-slate-600`} id='blog1' onClick={()=>props.setblogs({blog1:true})}><Link to='Blog/Blog1'>Blogs</Link></div>

          <div className={`${props.blogs.blog2?'bg-slate-600':''} w-40 rounded-md mt-3  text-lg cursor-pointer hover:bg-slate-600`} id='blog2' onClick={()=>props.setblogs({blog2:true})}><Link to='Blog/gallary'>Mygallary</Link></div>

          <div className={`${props.blogs.blog3?'bg-slate-600':''} w-40 rounded-md mt-3  text-lg cursor-pointer hover:bg-slate-600`} id='blog3' onClick={()=>props.setblogs({blog3:true})}><Link to='Blog/images'>images</Link></div>

          <div className={`${props.blogs.blog4?'bg-slate-600':''} w-40 rounded-md mt-3  text-lg cursor-pointer hover:bg-slate-600`} id='blog4' onClick={()=>props.setblogs({blog4:true})}><Link to='Blog/Books'>Books</Link></div>

          <div className={`${props.blogs.blog5?'bg-slate-600':''} w-40 rounded-md mt-3  text-lg cursor-pointer hover:bg-slate-600`} id='blog5' onClick={()=>props.setblogs({blog5:true})}><Link to='Blog/Videos'>Videos</Link></div>

          <div className={`${props.blogs.blog6?'bg-slate-600':''} w-40 rounded-md mt-3  text-lg cursor-pointer hover:bg-slate-600`} id='blog6' onClick={()=>props.setblogs({blog6:true})}><Link to='Blog/Health-tips'>Health Tips</Link></div>

          <div className={`${props.blogs.blog7?'bg-slate-600':''} w-40 rounded-md mt-3  text-lg cursor-pointer hover:bg-slate-600`} id='blog7' onClick={()=>props.setblogs({blog7:true})}><Link to='Blog/text-to-voice'>Text to Voice</Link></div>

          <div className={`${props.blogs.blog8?'bg-slate-600':''} w-40 rounded-md mt-3  text-lg cursor-pointer hover:bg-slate-600`} id='blog7' onClick={()=>props.setblogs({blog8:true})}><Link to='Blog/Documentation'>Documentation</Link></div>

          {/* <div className="w-40 rounded-md text-lg cursor-pointer hover:bg-slate-600"><Link to='Blog/Blog2' id='blog2'>Mygallary</Link></div>
          <div className="w-40 rounded-md text-lg cursor-pointer hover:bg-slate-600"><Link to='Blog/gallary' id='blog3'>gallary</Link></div>
          <div className="w-40 rounded-md text-lg cursor-pointer hover:bg-slate-600"><Link to='Blog/Blog3' id='blog4'>Blog3</Link></div>
          <div className="w-40 rounded-md text-lg cursor-pointer hover:bg-slate-600"><Link to='Blog/Blog4' id='blog5'>Blog4</Link></div> */}
        </>
    )
}