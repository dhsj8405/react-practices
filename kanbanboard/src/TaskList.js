import React from 'react';
import Task from './Task';
import styles from './assets/css/TaskList.css';

export default function({tasks}) {
    return (
        <div className={styles.TaskList}>
            <ul>
                {tasks.map((task) => <Task
                                        key={task.no}
                                        name={task.name} />)}
            </ul>
            <input 
                type='text'
                className={styles['TaskList--add-task']}
                placeholder='태스크 추가'/>
        </div>      
    );
}