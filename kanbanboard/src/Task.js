import React from 'react';
import styles from './assets/css/Task.css';

export default function({name}) {
    return (
        <li className={styles.Task}>
            <input type='checkbox' checked='true' />
                {name}
                <a href='#' className={styles['Task--remove']}></a>
        </li>
    );
}