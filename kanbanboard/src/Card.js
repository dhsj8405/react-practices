import React, { useState } from 'react';
import TaskList from './TaskList';
import styles from './assets/scss/Card.scss';

export default function ({ title, description, tasks, status }) {
    const [showDetails, setShowDetails] = useState(false)


    const styleSideColor = {
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        width: 3,
        height: '100%',
        backgroundColor: status === 'Doing' ? '#bb8D31' : (status === 'ToDo' ? '#3a7e28' : '#222')
    };
    return (
        <div className={styles.Card}>
            <div style={styleSideColor} />
            <div 
                className={
                    showDetails ?
                        [styles.Card__Title, styles.Card__Title__open].join(' ') :
                        styles.Card__Title
                }
                onClick={() => setShowDetails(!showDetails)} >
                {title}</div>
            {
                showDetails ?
                    <div ClassName={styles.Card__Details}>
                        {description}
                        <TaskList tasks={tasks} />
                    </div> :
                    null
            }
        </div>
    );
}