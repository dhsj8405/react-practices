import React from 'react';
import MyComponent from './MyComponent';

export default function() {
 
    return (
        <div id='App'>
            <MyComponent 
            /*props01 = {'문자열'}
            */
            props02={100}
            props03={true}
            props04={ {no:1}}
            props05={ [1,2,3,4]}
            props06={() => '함수'}

            />
        </div>
    )
}