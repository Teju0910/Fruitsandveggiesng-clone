import { useEffect, useRef, useState } from 'react';


const Stopwatch = () =>{

    const[time,settime] = useState(0);
    const[active,setactive] = useState(false);
    const[pause,setpause] = useState(false)
    const timeRef = useRef(null);
    const[startt,setstart] = useState(0);

    const handelstart = () =>{
        if( startt == 1){
            return
          }
          setstart(1)
        setactive(true);
        setpause(true)
        timeRef.current = setInterval(()=>{
            settime((time) => time+1);
        },10)
    }

    const handelstop = () =>{
        clearInterval(timeRef.current)
        setpause(false)
    }
    const handelresume = () => {
        setpause(true)
        timeRef.current = setInterval(() => {
            settime((time) => time + 1)
        }, 10)
      }

    const handelreset= () =>{
        clearInterval(timeRef.current)
        setactive(false)
        setpause(false)
        settime(0)
        setstart(0)
    }
    


    const formatTime = () => {      
        const getHours = parseInt(time * 10 / 1000 / 60 / 60);// calculate hours
        const    getMinutes = parseInt(time * 10 / 1000 / 60);  // calculate minutes
        const  getSeconds = parseInt((time * 10 / 1000)%60);// calculate seconds
        const   getMilliSeconds = parseInt((time*10) % 1000/10); // calculate milliseconds  
        return `${getHours} : ${getMinutes} : ${getSeconds} : ${getMilliSeconds}`         
      }

  
    return (
        <div>
        <div className='STOPWATCH'>
        <h1>STOPWATCH</h1>
        <h3>{formatTime()}</h3>
        <button onClick={handelstart}>Start</button>
        <button onClick={handelstop}>Stop</button>
        <button onClick={handelresume}>Resume</button>
        <button onClick={handelreset}>Reset</button>
        </div>
        <div className='TIMER'> 
        </div>
      
        </div>
    )
}
export default Stopwatch;