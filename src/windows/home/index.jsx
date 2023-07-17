
//import Frame1 from "./frame1";
//import Frame3 from "./frame3";
import Frame2 from "./frame2";
import Aos from "aos";
import React, {Component,lazy,Suspense, useEffect} from 'react';
const Frame3 = lazy(() => import('./frame3'));
const Frame1 = lazy(() => import('./frame1'));



function Home(){
  useEffect(()=>{
    Aos.init(({duration : 2000}))
  },[]);

  return(
    <Suspense fallback = {fallback()}>
      <div className='text overflow-x-hidden w-full '>
        <Frame1  data-aos='fade-up'/>
        <Frame3 />
        </div>
        </Suspense>
  )
}

const fallback = ()=> {
  return(
    <div className='bg-blue-800 h-[70vh] w-full'>
        
    </div>
  )
}
export default Home;