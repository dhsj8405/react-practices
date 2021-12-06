import React, { useState, useEffect, Fragment } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentClockTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
            minutes: minutes,
            seconds: seconds,
            session: hours >= 12 ? "pm" : "am"
        };
    }

    const [currentClockTime, setCurrentClockTime] = useState(getCurrentClockTime());
    const [ticks, setTicks] = useState(0)

    // useEffect(() => {
    //     setInterval(function () {
    //         setCurrentClockTime(getCurrentClockTime());
    //     }, 1000);
    // }, []);

    // useEffect(() => {
    //     console.log("setTimeout called")
    //     setTimeout(function () {
    //         setCurrentClockTime(getCurrentClockTime());             //기본적으로 setcurrentClockTime과 setTicks로 두번 랜더링됨 : 맨밑에 조건추가하면 해결됨
    //         setTicks(ticks + 1)
    //     }, 1000);
    // },[currentClockTime]);         //[]없으면 계속 랜더링됨 : setInterval대신 setTimeout쓰면 [] 없어도됨
                    //currentClockTime이 변경될때만 변경한다.


    return(
    <Fragment>
        <span>{ticks}</span>
        <Clock
            message={'ex05: useEffect Hook example'}
            hours={currentClockTime.hours}
            minutes={currentClockTime.minutes}
            seconds={currentClockTime.seconds} />;
    </Fragment>
   )
}