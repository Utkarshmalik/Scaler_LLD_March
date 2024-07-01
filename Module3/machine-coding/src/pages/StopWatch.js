
import {useState , useRef} from "react";


function StopWatch(){

    console.log("rendeing the Stop Watch componenbt");

    const [time, setTime] = useState(0);
    let timerRef = useRef(null);

    const startTimer  = ()=>{
    timerRef.current=setInterval(()=>{
            setTime((prevTime)=> prevTime +1);
        },1000)
    }

    const resetTimer = ()=>{
        setTime(0);
        clearInterval(timerRef.current);
    }

    const stopTimer = ()=>{
        clearInterval(timerRef.current);
    }


    const formatTime = (time)=>{
       const getSeconds  = `0${time%60}`.slice(-2);
       const minutes = Math.floor(time/60);
       const getMinutes   = `0${minutes %60}`.slice(-2);
       const getHours  =   `0${Math.floor(time/3600)}`.slice(-2);
       return `${getHours}:${getMinutes}:${getSeconds}`;
    }


    return <div>

        <h1> {formatTime(time)} </h1>

        <button onClick={startTimer}> Start </button>
        <button onClick={stopTimer} > Stop </button>
        <button onClick={resetTimer}> Reset </button>

    </div>

}

export default StopWatch;