
import React from 'react';
import styles from './assets/css/styles.css';

export default function() {

    return (
        <ul ClassName ={styles.Guestbook__List}>
                    <li className={styles.Guestbook__List__Item}>
                        <strong>{`지나가다가`}</strong>
                        <p>
                            {`별루입니다.`}<br/>
                            {`비번:1234 -,.-`}
                        </p>
                        <strong></strong>
                        <a href=''>{`삭제`}</a>
                    </li>
                </ul>
    )
}