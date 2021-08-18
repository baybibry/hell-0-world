import React, { useEffect, useState } from 'react';
import style from '../../style/Notification.module.css';

function Notification({text, removed, id}) {

    const [exit, setexit] = useState(false)
    const  [width, setWidth] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    function handleStart(){
        const interval = setInterval(() => {
            setWidth( prev => {
                if(prev < 100) return prev + 1

                clearInterval(interval)
                return prev
            })

            if(width === 100){
                removed(id)
            }

        }, 20);

        setIntervalId(interval)
    }

    function handlePause(){
        clearInterval(intervalId)
    }

    function handleExit(){
        
        handlePause();
        
        setexit(true);

        setTimeout(() => {
            removed(id)
        }, 40);

    }

    useEffect(() => {

        handleStart()

        if(width === 100){
            removed(id)
        }

    }, [width]);

    return (
        <div 
            className={`${style.notification} ${exit && style.exit}`}
            onMouseEnter={handlePause}
            onMouseLeave={handleStart}
        >
            <i 
                onClick={handleExit}
                className={`${style.close} ai-font-close-c`}
            ></i>

            <p> { text } </p> Copied!

            <div className={style.bar} style={{ width: `${width}%` }}></div>
        </div>
    )
}

export default Notification;