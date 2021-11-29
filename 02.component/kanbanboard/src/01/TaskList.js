import React from 'react';
import Task from './Task';
export default function({tasks}) {
    return (
        <div className='TaskList'>
        <ul>
            {tasks.map((task)=> <Task 
                                    key={task.no} 
                                    name={task.name} />  )}
        </ul>
    </div>
    );
}