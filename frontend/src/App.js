import { useRef, useState,useEffect} from 'react';
import './App.css';
import Header from './Components/header';
import Main from './Components/main';
import Footer from './Components/footer';
import { Routes,Route} from 'react-router-dom';
import Blog from './Components/Blog';
import { useNavigate } from 'react-router-dom';
import HeaderDisplay from './Components/headerdisplay';
import Message from './Components/Messages';
// import Blog1 from './Components/blog1';
// import Blog2 from './Components/blog2';
// import Blog3 from './Components/blog3';
// import Blog4 from './Components/blog4';
// import Blog5 from './Components/blog5';

function App() {
  const [componentids,setcomponentids] = useState('Home')
  const [opendisplay,setOpendisplay]=useState(false)
  const [blogs,setblogs]=useState({})

  const step=useRef(0)
  const myref=useRef(null)
  const myref2=useRef(null)

  const navigate=useNavigate(null)

  let L=['Home','About','Resume','Portfolio','Services','Contact','Blog']
  

  useEffect(()=>{
    function ClickHandle(e){
      
      if((myref.current && !myref.current.contains(e.target)) && (myref2.current && !myref2.current.contains(e.target))){
        setOpendisplay(false)
      }
    }
    document.addEventListener("click", ClickHandle);
    return () => {
      document.removeEventListener("click", ClickHandle);
    };
  },[])
  

  function setids(e){
    if(e.target.id!=='Blog'){
      navigate('/')
    }
 
    let x=L.indexOf(e.target.id)
    step.current=x
    setcomponentids(e.target.id)

  }

 return (
 
    <div className="App grid relative">
    <Header setids={setids} setcomponentids={setcomponentids} componentids={componentids} nav_list={L} setOpendisplay={setOpendisplay} opendisplay={opendisplay} myref2={myref2} blogs={blogs} setblogs={setblogs}/>
      <HeaderDisplay setids={setids} setcomponentids={setcomponentids} componentids={componentids} nav_list={L} opendisplay={opendisplay} myref={myref} blogs={blogs} setblogs={setblogs} />
      <Routes>
      <Route path='' element={<Main step={step} L={L} setcomponentids={setcomponentids} componentids={componentids}/>} />
      <Route path='/Blog/*' element={<Blog /> }></Route>
      <Route path='/Messages' element={<Message /> } />
        {/* <Route index element={<Blog /> }/> */}
        
        {/* <Route path=':id' element={<Blog1/> } /> */}
        {/* <Route path='Blog2' element={<Blog2 /> } /> */}

        {/* <Route path='Blog3' element={<Blog3 /> } />
        <Route path='Blog4' element={<Blog4 /> } />
        <Route path='Blog5' element={<Blog5 /> } /> */}
      
      </Routes>
      {/* <Main step={step} L={L} setcomponentids={setcomponentids} componentids={componentids}/> */}
     <Footer />
    </div>
   
  );
}

export default App;
