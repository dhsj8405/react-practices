import React, {Component} from 'react';
import ListItem from './ListItem'
export default class FoodList extends Component {
    
    render() {
        // const components = [];
        // this.props.foods.forEach(function(food){
        //     components.push( <ListItem name={food.name} quantity={food.quantity}/>);
        // });

        //     const r=           [1,2,3,4,].map(function(e){
        //     return e * e;
        // });
        // const r = this.props.foods.map((food) => <ListItem name={food.name} quantity={food.quantity}/>);

        return (
            <ul>
                { this.props.foods.map((food) => <ListItem 
                                                    name={food.name} 
                                                    quantity={food.quantity}/>)}
            </ul> 
        )
    }
}