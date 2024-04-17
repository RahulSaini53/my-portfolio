import { useState } from "react"

export default function TexttoVoice(){
   
    // const [formdata,setFormdata]=useState(new FormData())
    const [myfile,setmyfile]=useState({})
    const [textData,settextdata]=useState({})
    

    const fetchData = async (formdata) =>{
        const url='http://127.0.0.1:8000/voicechanger1'
        const options={
            method:'POST',
            
            body:formdata
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
         e.preventDefault()
         const formdata=new FormData()
         formdata.append('textdata',textData['textdata'])
         formdata.append('audio_file',myfile['audio_file'])
        //  settextdata({})
        //  setmyfile({})
         fetchData('hello')

    }

    function handlechange(e){
        
        if(e.target.type==='file'){
            console.log(e.target.files[0])
            setmyfile({[e.target.name]:e.target.files[0]})
        }
        else{
            console.log(e.target.value)
            settextdata(prev=>{
                return {...prev,[e.target.name]:e.target.value}
            })
        }
      
    }
    
    return(
        <div className="mb-16">
         <h1 className="text-white relative text-xl before:absolute before:w-20 before:h-0.5 before:bg-cyan-300 before:top-9 hover:before:w-48 before:transition-all before:duration-500">Convert Text into Voice</h1>

         <div className="w-[60vw] relative left-[50vw] -translate-x-[50%] p-4 mt-14 min-h-96 border-2">
            <form onSubmit={submitform}>
                <textarea placeholder="Enter text here" name="textdata" className="p-3 min-h-40 w-[90%] rounded-lg outline-teal-500 ml-5 block" onChange={handlechange} required></textarea>
                
                <label className="text-red-600 text-lg m-2">File:</label>
                <input type='file' className='text-red-400 mt-10' name='audio_file' onChange={handlechange} required></input>
                <button type="submit" className="py-2 px-4 bg-green-500 block ml-8 mt-4 rounded-lg text-lg text-white hover:bg-green-600 active:scale-95">submit</button>
            </form>
         </div>

        </div>
    )
}