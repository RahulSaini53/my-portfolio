import { useState } from "react";
import { IoLocationSharp,IoCall } from "react-icons/io5";
import { MdEmail,MdHomeWork } from "react-icons/md";


export default function Contact(){
    const Contactinfo={name:'',email:'',subject:'',message:''}
    const [Info,setInfo]=useState(Contactinfo)

    function fillform(e){
        setInfo(prev => {
            const newinfo={...prev,[e.target.name]:e.target.value}
            return newinfo
        })
    }

    console.log(Info)

    const fetchData = async (data) =>{
        const url='http://127.0.0.1:8000/message/'
        const options={
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }

     try{
        const response=await fetch(url,options)
        
        if(!response.ok){
            throw new Error('server error')
        }
         console.log(await response.json(),response)
        // const data= await response.json()
        // setmessage([...data])
    } catch(err){console.log(err)}

    }


    function submitform(e){
        e.preventDefault();
        const data={
            sender_name:Info.name,
            sender_email:Info.email,
            subject:Info.subject,
            message:Info.message
        }

        fetchData(data)
        setInfo(Contactinfo)
    }

    return(
        <div className="min-h-[100%] text-white bg-slate-950 p-3 max-sm:p-0">
           <h1 className="text-2xl relative before:absolute before:w-12 before:h-0.5 before:bg-cyan-300 before:top-9 hover:before:w-24 before:transition-all before:duration-500">CONTACT</h1>
           <p className="mt-4">Contact Us using given details</p>
           <div className="flex ml-2 mr-2 mt-10 max-lg:flex-col justify-around items-start">
            <div className="flex lg:w-[40vw] flex-wrap p-1 justify-between max-sm:justify-center text-left break-words max-lg:w-[90vw]  max-md:justify-center">
                <div className="w-64 max-lg:w-80  min-h-36  bg-slate-900 m-2 p-2 hover:bg-slate-700">
                   <IoLocationSharp size={25} color="blue"/>
                    <h4 className="text-xl mb-2 text-teal-400">Address</h4>
                    <span className="block">MNIT JAIPUR, VINODINI HOSTEL</span>
                    <span>Jaipur, Rajasthan, India-302017</span>
                </div>
                <div className="w-64 max-lg:w-80 min-h-36  bg-slate-900 m-2 p-2  hover:bg-slate-700 ">
                <MdEmail size={25} color="blue"/>
                <h4 className="text-xl mb-3 text-teal-400">Email</h4>
                <ul className="list-disc list-inside max-sm:text-sm lowercase ">
                <li className="">rksckn123@gmail.com</li>
                <li className="break-words">2020ucp1822@mnit.ac.in</li>
                </ul>
                </div>
                <div className="w-64 max-lg:w-80 min-h-36  bg-slate-900 m-2 p-2  hover:bg-slate-700">
                <IoCall size={25} color="blue"/>
                <h4 className="text-xl mb-3 text-teal-400">Call Me</h4>
                <ul className="list-disc list-inside">
                <li className="">+91 9649954269</li>
                <li className="">+91 7976822059</li>
                </ul>
                </div>
                <div className="w-64 max-lg:w-80 min-h-36  bg-slate-900 m-2 p-2  hover:bg-slate-700">
                <MdHomeWork size={25} color="blue"/>
                <h4 className="text-xl mb-3 text-teal-400">Open Hours</h4>
                <span>24 Hours</span>
                </div>
            </div>
            <form onSubmit={submitform}>
            <div className="min-h-96 w-[40vw] max-lg:w-[90vw] flex p-1 flex-col flex-wrap space-y-7 items-center">
            <div className="w-[95%] max-lg:w-[100%] flex justify-between mt-5 max-lg:flex-col items-center max-lg:space-y-7">
             <input value={Info.name} type="text" name="name" placeholder="Enter Name" required className="text-black h-12 mr-3 rounded-md w-[48%] max-lg:w-[95%] max-lg:mr-0 outline-cyan-500 border-2 pl-3" onChange={fillform} />
             <input value={Info.email} type="email" name="email" placeholder="Enter Email" required className="text-black h-12 rounded-md w-[48%] max-lg:w-[95%] outline-cyan-500 border-2 pl-3" onChange={fillform} />
             </div>
             <input value={Info.subject} type="text" name="subject" placeholder="Enter Subject" required className="text-black w-[95%] rounded-md h-14 outline-cyan-500 border-2 pl-3" onChange={fillform}/>
             <textarea value={Info.message} name="message" placeholder="Enter Message" required className="w-[95%] rounded-md min-h-32 text-black outline-cyan-500 border-2 pl-3" onChange={fillform}></textarea>
              <button type="submit" className="px-5 py-2 bg-blue-600 mb-5 text-xl rounded-lg visited:text-red-600 active:scale-95 hover:bg-blue-800" onChange={fillform}>Send Message</button>
            </div>
            </form>
           </div>
          
        </div>
    )
    
}