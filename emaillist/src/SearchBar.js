import React from 'react';
import styles from './assets/scss/SearchBar.scss'
const SerachBar = () => {
    return (
        <div className={styles.Searchbar}>
            찾기: <input type='text' placeholder='찾기' />
        </div>
    );
};

export default SerachBar;