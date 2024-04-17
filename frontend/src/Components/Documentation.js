import Mylist from "./mylist"

export default function Documentation(){

    

    return(
        <div className="text-white text-lg m-10 p-5 block w-[90vw] border-2 text-left">
            <ul className="space-y-5 ml-2 list-l1 text-red-400">
                <li className="">
                    <a className=" hover:text-red-500 hover:underline" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">first</a>
                    <ul className="ml-10 list-l2 text-green-400">
                            <li className="">
                             <a href="https://www.instagram.com/" className="block hover:underline hover:text-green-600" target="_blank" rel="noopener noreferrer">second</a>
                             
                             <ul className='list-l3 text-blue-400'>
                                <li className="list-l3 ml-10 hover:underline ">
                                <a href="https://www.instagram.com/" className="hover:underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">third</a>
                                </li>
                             </ul>
                             </li>
                            <li className="">second</li>
                            <li className="">second</li>
                            <li className="">second</li>
                            <li className="">second</li>
                            <li className="">second</li>
                            <li className="">second</li>
                            <li className="">second</li>
                        
                    </ul>
                </li>
                <li className="">
                    <a href="https://www.instagram.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">second</a>
                    <ul className="ml-10 list-l2 text-green-600 ">
                    <li className="">
                             <a href="https://www.instagram.com/" className="block hover:underline" target="_blank" rel="noopener noreferrer">second</a>
                             
                             <ul className='list-l3 text-blue-700'>
                                <li className="list-l3 ml-10">
                                <a href="https://www.instagram.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">third</a>
                                </li>
                             </ul>
                             </li>
                    </ul>
                </li>
            </ul>
            {
              Mylist.map((value,index)=>{
                return(
                    <div key={index} className="block m-10 text-4xl text-white">
                        {value}
                    </div>
                )
              })
            }
        </div>
    )
}