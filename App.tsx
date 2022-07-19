import * as React from 'react';
import './style.css';

import Comp from './Compo'

export default function App() {
  const [time,setTime]= React.useState({ms:0,s:0,m:0,h:0})
  const [inter,setInter]=React.useState(null);
  const start=()=>{
          run()
          setInter(setInterval(run,10))

  }
  let  updatedMs=time.m;
  let  updatedH=time.h;
  let  updatedS=time.s;
  let  updatedM=time.m;

  const run =()=>{

      if(updatedS===60){
        updatedM++;
        updatedS=0
      }
      if(updatedM===60){
        updatedH++;
        updatedM=0
      }
      if(updatedMs===100){
        updatedS++;
        updatedMs=0
      }
      updatedMs++
      return setTime({ms:updatedMs,s:updatedS,m:updatedM,h:updatedH})


  }
  
  const stop=()=>{
  clearInterval(inter)
   }
   const reset=()=>{
    clearInterval(inter)
     setTime({ms:0,s:0,m:0,h:0})
     }

     const cc=(data)=>{
        console.log(data)
     }
  return (
    <div>
  <div>
  <span>{(time.ms)>10 ? time.ms : "0"+time.ms }::</span>
  <span>{(time.s)>10 ? time.s : "0"+time.s }::</span>
  <span>{(time.m)>10 ? time.m : "0"+time.m }::</span>
  <span>{(time.h)>10 ? time.h : "0"+time.h }</span>
  </div>
  <br/>
  <button onClick={start}> Start</button>
  <button onClick={stop}>Stop</button>
  <button onClick={reset}>reset</button>
   <Comp name={'shanu'}  cc={cc} />
     </div>
  );
}
