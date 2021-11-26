import React, {Component} from 'react';
import ListItem from './ListItem'
export default class FoodList extends Component {
    
    render() {
        return (
        <ul>
            <ListItem name='Egg' quantity='10'/>
            <ListItem name='Milk' quantity='20'/>
            <ListItem name='Bread' quantity='5'/>
            <ListItem name='Carrot' quantity='50'/>
        </ul> 
        )
    }
}