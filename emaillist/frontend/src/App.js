import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';

import './assets/scss/App.scss';
// import data from './assets/json/data.json';

export default function() {
    const [emails, setEmails] = useState([]);
    const [keyword, setKeyword] = useState('');

    const notifyKeywordChanged = (keyword) => {
      setKeyword(keyword);
    };

    useEffect(async () => {
      try {
        const response = await fetch('/api', {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application'
          },
          body: null
        });

        if(!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        const jsonResult = await response.json();

        if(jsonResult.result !== 'success') {
          throw new Error(`${jsonResult.result} ${jsonResult.message}`);
        }

        setEmails(jsonResult.data);

      } catch (err) {
        console.error(err);
      }
    }, []);

    return (
        <div className={'App'}>
          <RegisterForm />
          <SearchBar keyword={keyword} callback={notifyKeywordChanged} />
          <Emaillist keyword={keyword} emails={emails} />  
        </div>
    )
}