import React from 'react';
import Card from './Card';
export default function({title, cards, tasks}) {

    return (
        <div className='CardList'>
            <h1>{title}</h1>
            {cards.map((card)=> <Card
                                    key={card.no}
                                    title={card.title}
                                    description ={card.description}
                                    tasks = {card.tasks} /> )}
        </div>
    )
}