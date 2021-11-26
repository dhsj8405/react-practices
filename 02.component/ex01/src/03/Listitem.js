import React from 'react';

export default function ListItem({name, quantity}) {
    return (
        <li>{name } : {quantity}</li>
    );
}