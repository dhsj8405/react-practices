import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const[route,setRoute] = useState('');
    useEffect(()=>{
        //didmount:  통신시작,타이머시작하는 부분
        const handleHashChange = () => setRoute(window.location.hash.substr(1))
        window.addEventListener('hashchange',handleHashChange)

        return () =>{
            //unmount : 타이머해제
            window.removeEventListener('hashchange',handleHashChange)
        };
    },[])
    return (() => { 
        switch(route){
            case '/': return <Main />;
            case '/gallery': return <Gallery />;
            case '/guestbook': return <Guestbook />;
            default : return null;
        }
     })();       // ()함수를만들고 ()() 그 함수를 실행시킴
        
    
}