import './Timmer.css';
import { useRef, useState,useEffect } from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Timmer() {
    const [starttime,setstarttime] = useState(0);
    const timeRef = useRef(null);
    const[active,setactive] = useState(false);
    const[startt,setstart] = useState(0);
    const[pause,setpause] = useState(false)
    // const starttimeRef = useRef(null);    
     console.log(starttime,"starttime");
    let p =starttime;
 
// useEffect(()=>{
    var id;
    const start = () =>{

      if( startt == 1){
        return
      }
      setstart(1)
  //      window.update();

  console.log(starttime)
  timeRef.current =setInterval(()=>{        
        setstarttime((prevValue)=>{
              if(prevValue<=0){
                  clearInterval(id) ;
                  return 0;                
              }
              return prevValue-1;
          });
      },1000)
      return function stop(){
          clearInterval(timeRef.current)
      };
    }
//   },[]);

  const hide = () =>{
  let i =  document.getElementById("a").style.display ="none"
  }

const handelstop = () =>{
    clearInterval(timeRef.current)
    setstart(0)
    setpause(false)
}

const handelreset= () =>{
 document.getElementById("a").style.display ="block"
    clearInterval(timeRef.current)
    setactive(false)
    setpause(false)
    setstart(0)
    resetInputField();
}

const resetInputField = () => {
    setstarttime("");
  };
var x;
const handelstart = (e) =>{    
     x = document.getElementById("a").value;
    // console.log(x)
    setstarttime(x)
    // setstarttime(0)
}
  return (
    <div className="Timer">  
    <h1>TIMMER</h1>
   <input type="Number" id="a"
   onChange={(e) =>{
    handelstart()   
   }}
   placeholder='Enter the minuts'/>

    {/* <input onChange={(e) =>{
        x = e.target.value;
        console.log(e.target.value)
        starttime(e.target.value)
    }} type="time" className="without_ampm"  /> */}

    <button onClick={() =>{
        hide();
        start();
        
    }}
     >Start</button>
     <h1>{starttime }</h1>
     

     <button onClick={handelstop}>Stop</button>
     <button onClick={handelreset}>Reset</button>
    </div> 
  );
}

export default Timmer;
