import React from 'react';
import FoodList from './FoodList';

export default function() {
    const foods = [{
        no: 1,
        name: 'Bread',
        quantity: 10
    },{
        no: 2,
        name: 'Milk',
        quantity: 5
    },{
        no: 3,
        name: 'Egg',
        quantity: 30
    }];
    return (
        <div id='App'>
            <FoodList foods = {foods} />
        </div>
    )
}