import React from 'react';
import styles from './assets/scss/Email.scss';

const Email = ({firstName, lastName, email}) => {
    return (
        <li className={styles.Email}>
            <a href='' />
            <h4>
                {email}
            </h4>
            <span>
                {`${firstName} ${lastName}`}
            </span>
        </li>
    );
};

export default Email;