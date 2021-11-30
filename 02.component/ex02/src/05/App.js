import React, {Fragment} from 'react';
import styles from './assets/scss/App.scss';

export default function() {
    return (
        <div className ={styles.App}>
            <h1 className={styles.Header}> {`SASS & CSS  (css-loader options: { modules: true})`}</h1>
        </div>
    )
}