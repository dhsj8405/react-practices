import React from 'react';
import cards from './assets/json/data.json';
import CardList from './CardList';
import './assets/css/styles.css';

export default function() {

    return (
        <div className ='kanbanboard'>  
            <CardList key = 'ToDo' title = {'ToDo'} cards = {cards.filter((cards) => cards.status === 'ToDo')}/> 
            <CardList key = 'Doing' title={'Doing'} cards ={cards.filter((cards) => cards.status === 'Doing')}/>
            <CardList key = 'Done' title={'Done'} cards ={cards.filter((cards) => cards.status === 'Done')}/>
        </div>
    )
}