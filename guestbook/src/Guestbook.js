import React from 'react';
import InputForm from './InputForm';
import GuestbookList from './GuestbookList';
import DialogForm from './DialogForm';
//import './assets/css/styles.css';

export default function() {
    return (
        
            <div className='Guestbook'>
                <InputForm />
                <GuestbookList />
                <DialogForm />
            
            </div>

            
 
    )
}