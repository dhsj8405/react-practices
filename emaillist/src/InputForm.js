import React from 'react';
import styles from './assets/css/styles.css';

export default function() {

    return (
        <div className= {styles.InputForm}>
           <h1>{`방명록`}</h1>
                <form className={styles.Guestbook__Form} action='' method='post'>
                    <input type='text' id='input-name' placeholder='이름' />
                    <input type='password' id='input-password' placeholder='비밀번호' />
                    <textarea id='tx-content' placeholder='내용을 입력해 주세요.'></textarea>
                    <input type='submit' value='보내기' />
                </form>
           
        </div>
    )
}