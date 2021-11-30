import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell, faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'  // 개별적으로 받아서 하는 것 추천

// additional... 꼭 필요하지 않음
import {library} from '@fortawesome/fontawesome-svg-core';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';



export default function() {
    library.add(faBell,  far, fab);
    return (
        
        <div >
            {/* examples :  추천*/}
            <FontAwesomeIcon icon={faBell}/>
            <FontAwesomeIcon icon={faCheckCircle}/>
            <FontAwesomeIcon icon={faTimesCircle}/>

            {/* solid : 많이 쓰임 ex)색지정*/}
            <FontAwesomeIcon icon={["fas","bell"]}/>
            <FontAwesomeIcon icon={["bell"]}/>

            {/* regular */}
            <FontAwesomeIcon icon={["far","bell"]}/>


            {/* brand */}
            <FontAwesomeIcon icon={["fab","github"]}/>
            <FontAwesomeIcon icon={["fab","apple"]}/>
            <FontAwesomeIcon icon={["fab","google"]}/>

        </div>
    )
}