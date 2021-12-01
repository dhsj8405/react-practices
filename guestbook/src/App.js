import React from 'react';
import Guestbook from './Guestbook';
import styles from './assets/css/styles.css';

export default function() {
    return (
        <div className={styles.App}>
          <Guestbook />
        </div>
    )
}