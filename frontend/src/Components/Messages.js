import { useEffect, useState} from "react"


export default function Message(){
    
    const [message,setmessage]=useState([])
    
    const [isLoading,setisLoading] = useState(false)

    const [hideShow,sethideshow]=useState({})


    function setvalues(e){
        sethideshow((prev) => {
            if(prev[e.target.id])
              return {...prev,[e.target.id]:false}
            
            return {...prev,[e.target.id]:true}
            
        })
    }

    const fetchData = async (mth,id=null) =>{
        
        let url='http://127.0.0.1:8000/message/'
        if(mth==='delete'){
            url+=`${id}/`
        }
          
        const options={method:mth,headers:{'Content-Type':'application/json'}}
      
        setisLoading(true)

     try{
       
        const response=await fetch(url,options)
        
        if(!response.ok){
            throw new Error('server error')
        }

        const data=await response.json()
        console.log(data)
        if(mth!=='delete'){
          setmessage([...data])
        }
        
        
    } catch(err){console.log(err)}

    finally{
      setisLoading(false)
    }


    }

    useEffect(()=>{
        console.log('helllo')
       fetchData('GET')
    },[])

    function deletemessage(id){
       id=parseInt(id)
       
       setmessage((prev)  => {
       const newarr=prev.filter((elem) => {
        if(elem.id===id) return null    
        return elem
       }
       )
       console.log(id,newarr)
       return newarr
    })

    fetchData('delete',id)
       
    //    setmessage([])
    }   


    return(
        <div className="overflow-hidden min-h-[85vh] max-lg:min-h-[90vh] max-sm:min-h[85vh] bg-slate-950 pt-5">
         <h1 className="relative before:absolute before:w-12 before:h-0.5 before:bg-cyan-300 before:top-9 hover:before:w-28 before:transition-all before:duration-500 text-white text-2xl">MESSAGES</h1>
         <div className="flex flex-col items-center justify-start w-[60vw] max-xl:w-[90vw] min-h-52 mt-12 relative left-[50vw] -translate-x-[50%] pb-5 pt-0.5 space-y-5 px-1">

        {isLoading && <div className="text-white text-lg m-10">Loading...</div>} 

        {!isLoading && (
            message.length === 0?<div className="text-lg center text-red-400">no messages</div>:
            message.map((elem)=>{ 
             const Id=`${elem.id}`
          return(
            <div key={elem.id} className="w-[99%] hyphens-auto min-h-40 border-2 text-white text-left overflow-hidden p-4 max-md:px-1 space-y-3 break-words bg-gray-950 rounded-2xl">
            <div><span className="mr-2 text-lg text-teal-500">From:</span><span className="text-base hyphens-auto uppercase">{elem.sender_name}</span></div>
            <div><span className="mr-2 text-lg text-teal-500">Email:</span><span className="text-base hyphens-auto">{elem.sender_email}</span></div>
            <div><span className="mr-2 text-lg text-teal-500">Subject:</span><span className="text-lg hyphens-auto">{elem.subject}</span></div>
            <div><span className=" mr-2 text-lg block leading-loose text-teal-500">Message:</span><span className={`px-2 indent-10 break-words hyphens-auto text-base ${hideShow[Id]?'line-clamp-none':'line-clamp-2'}`}>{elem.message}</span>
            </div>
            <div className="-mt-3 relative left-[50%] -translate-x-[50%] flex  items-center justify-center space-x-3 ">
            <button type="button" className="w-20  border-2  text-lg active:scale-95 bg-blue-700 px-3 rounded-xl hover:bg-blue-600 " id={Id} onClick={setvalues}>{hideShow[Id]?'hide':'show'}</button>
            <button type="button" className="border-2 text-lg active:scale-95 bg-red-700 px-3 rounded-xl hover:bg-red-600 " onClick={() => deletemessage(Id)}>delete</button>
            </div>
            </div>
          )
            })
        )
        }

          

           {/* <div className="w-[99%] h-40 border-2 text-white">hello</div> */}


         </div>
        </div>
    )
}