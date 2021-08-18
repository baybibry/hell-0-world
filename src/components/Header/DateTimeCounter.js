import React, { useEffect, useState } from 'react'
import style from '../../style/DateTime.module.css'

function DateTimeCounter() {

    const date = new Date();

    const [ dt , setdt] = useState({
        hour: date.getHours(), 
        min: date.getMinutes(),
        sec: date.getSeconds(),
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
    })

    const {hour, min, sec, year, day, month} = dt;

    useEffect(() => {

        const interval = setInterval(() => {
            setdt({
                hour: date.getHours(), 
                min: date.getMinutes(),
                sec: date.getSeconds(),
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate()
            })
        }, 1000);

        return () => clearInterval(interval)

    })
    
    let minutes = min < 10 ? '0' + min : min;
    let time = hour % 12 < 10 ? hour % 12 !== 12  ? 12 : '0' + hour % 12 : hour % 12;
    let seco = sec < 10 ? '0' + sec : sec;

    return (
        <div className={style.dateSize}>
            {day}/{month}/{year}, {time} : {minutes} : {seco}
        </div>
    )
}

export default DateTimeCounter