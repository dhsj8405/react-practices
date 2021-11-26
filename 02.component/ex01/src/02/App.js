import React, {Component} from 'react';
import FoodList from './FoodList';

export default class App extends Component {

    constructor() {
        super(arguments);
        
        this.foods = [{
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
}
    render() {
        return (
            <div id='App'>
                <FoodList foods = {this.foods} />
            </div>
        );
    }
}