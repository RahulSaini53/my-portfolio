import { useParams} from "react-router-dom";
import Blog1 from './blog1'
import Blog2 from './blog2'
import TexttoVoice from "./TexttoVoice";
import Documentation from './Documentation';
// import { Outlet } from "react-router-dom";

export default function Blog(){
    // const {id}=useParams()
  
    // console.log(id)
    const blogids=useParams()
  console.log(blogids['*'],'Hello its me from blog')
  console.log('hello from Blog')
    return(
        <div className="overflow-hidden min-h-[85vh] max-lg:min-h-[90vh] max-sm:min-h[85vh] bg-slate-950 pt-5">
           {/* Helloooooooooooooooo
           <br/> 
           {id} */}
       {blogids['*']==='Blog1' && <Blog1 />}
       {blogids['*']==='gallary' && <Blog1 />}
       {blogids['*']==='images' && <Blog2 />}
       {blogids['*']==='Books' && <Blog1 />}
       {blogids['*']==='Health-tips' && <Blog1 />}
       {blogids['*']==='Videos' && <Blog2 />}
       {blogids['*']==='Documentation' && <Documentation />}
       {blogids['*']==='text-to-voice' && <TexttoVoice />}

           {/* <Outlet /> */}
        </div>
    )
}