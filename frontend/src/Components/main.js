import Home from './home';
import Blog from './Blog';
import Contact from './contact';
import About from './about';
import Services from './services';
import Portfolio from './portfolio';
import Resume from './resume';

export default function Main(props) {



  function prevstep(e) {

    props.step.current -= 1
    props.setcomponentids(() => {
      const id1 = props.L[props.step.current]
      return id1
    })
  }

  function nextstep(e) {

    props.step.current += 1
    props.setcomponentids(() => {
      const id2 = props.L[props.step.current]
      return id2
    })
  }

  return (
    <main className='overflow-hidden min-h-[85vh] max-lg:min-h-[90vh] max-sm:min-h[85vh] bg-slate-950 pt-3'>
      {(props.componentids === 'Home') && <Home setcomponentids={props.setcomponentids} />}
      {(props.componentids === 'About') && <About />}
      {(props.componentids === 'Resume') && <Resume />}
      {(props.componentids === 'Blog') && <Blog />}
      {props.componentids === 'Portfolio' && <Portfolio />}
      {(props.componentids === 'Services') && <Services />}
      {(props.componentids === 'Contact') && <Contact />}
      <div onClick={prevstep} style={{ visibility: props.step.current === 0 ? 'hidden' : 'visible' }} className='ml-2 fixed top-[48vh] hover:scale-90 max-md:hover:scale-90 h-12 flex flex-col justify-around z-[100]'>
        <div className='w-6 h-0.5 bg-white -rotate-45'></div>
        <div className='w-6 h-0.5 relative -top-[8.2px] bg-white rotate-45' ></div>
      </div>
      <div onClick={nextstep} style={{ visibility: props.step.current === 5 ? 'hidden' : 'visible' }} className=' ml-2 right-1 fixed top-[48vh] hover:scale-90 max-md:hover:scale-90  h-12 flex flex-col justify-around z-[100]' >
        <div className=' w-6 h-0.5 bg-white rotate-45'></div>
        <div className=' w-6 h-0.5 relative -top-[8.2px]  bg-white -rotate-45' ></div>
      </div>
    </main>
  )
}