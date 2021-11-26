import React, { Fragment } from 'react';
import {PropTypes} from 'prop-types';

export default function MyComponent({props01, props02, props03, props04, props05, props06}) {
    return (
        <Fragment>
            <h2>Property Validation</h2>
            
            <span>props01: {props01 ? props01: '--- Not Set ---'}</span>
            <br/>

            <span>props02: {props02 ? props02: '--- Not Set ---'}</span>
            <br/>
            
            <span>props03: {props03 ? `${props03}`: '--- Not Set ---'}</span>
            <br/>
            
            <span>props04: {props04 ? props04.no : '--- Not Set ---'}</span>
            <br/>
            
            <span>props05: {props05 ? props05.map((e,i)=><b key={i}>{e}</b>) : '--- Not Set ---'}</span>
            <br/>
            
            <span>props06: {props06 ? props06() : '--- Not Set ---'}</span>
            <br/>
        </Fragment>
    )
}

MyComponent.propTypes = {
    // Built-In PropTypes Validator(primitive)
    props01: PropTypes.string,
    props02: PropTypes.number.isRequired,
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired
}
//default value

MyComponent.defaultprops = {

        props01 : '기본값',
        props02 : 10,
        props03 : false,
        props04 : null,
        props05 : [],
        props06 : () => {} //dummy함수
    
}