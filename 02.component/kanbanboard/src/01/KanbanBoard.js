import React from 'react';
import cards from './data.json';
import './assets/styles.css';

export default function() {
    console.log(cards);
    
    const a = cards.filter((cards) => cards.status === 'ToDo')
    console.log(a);

    return (
        <div className ='kanbanboard'>
            
            <CardList key = 'ToDo' title = {'ToDo'} cards = {cards.filter((cards) => cards.status === 'ToDo')}/>
            <CardList key = 'Doing' title={'Doing'} cards ={cards.filter((cards) => cards.status === 'Doing')}/>
            <CardList key = 'Done' title={'Done'} cards ={cards.filter((cards) => cards.status === 'Done')}/>
            
        </div>
    )
}