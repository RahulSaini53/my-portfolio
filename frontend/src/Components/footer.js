
import { FaInstagramSquare,FaFacebook,FaLinkedin,FaTwitter} from "react-icons/fa";
export default function Footer(){
  


    return(
        <div  className='h-48 pt-5 z-10 bg-slate-500 w-full'>
          <span className="break-words">© Copyright rks. All Rights Reserved
          <br />
          Designed by Rahul Saini
          </span>
          <div className="flex items-center space-x-7  mr-5 w-fit p-5 justify-between relative left-[50vw] -translate-x-[50%]">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare color="red" size={20} /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook color="green" size={20}/></a>
            <a href="https://www.linkedin.com/in/rahul-saini-440745270/" target="_blank" rel="noopener noreferrer"><FaLinkedin color="black" size={20}/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaTwitter color="blue" size={20} /></a>
            </div>
       
        </div>
    )
}