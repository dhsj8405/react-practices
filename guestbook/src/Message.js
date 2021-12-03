import React from 'react';
import PropTypes from 'prop-types';
import styles from './assets/scss/Message.scss';

export default function Message({ no, name, message, notifyDeleteMessage }) {
    return (
        <li className={styles.Message}>
            <strong>{name}</strong>
            <p>
                {
                    // message.replace("\n","<br/>")
                    message && message.split('\n').map((line, index) => index > 0 ?
                        <span key ={`${no}_${index}`}>
                            <br />
                            {line}
                        </span>  : 
                        line)
                }
            </p>
            <strong />
            {/* 함수 정의 */}
            <a onClick={ () => notifyDeleteMessage(no) }>삭제</a>           
            {/* 함수 실행 */}
            {/* <a onClick={ notifyDeleteMessage(no) }>삭제</a>            */}
        </li>
    );
}

Message.propTypes = {
    no: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}