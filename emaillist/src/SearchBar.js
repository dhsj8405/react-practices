import React, { useState } from 'react';
import styles from './assets/scss/SearchBar.scss'
const SerachBar = ({callback}) => {
    const [keyword, setKeyword] = useState('');
    const onInputChanged = (e) => {
        setKeyword(e.target.value); 
        callback(e.target.value)
    }
    return (
        <div className={styles.Searchbar}>
            찾기: <input type='text' placeholder='찾기' value={keyword} onChange={(e) => {onInputChanged }}/>
        </div>
    );
};

export default SerachBar;