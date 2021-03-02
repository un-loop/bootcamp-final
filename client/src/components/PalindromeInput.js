import axios from 'axios';
import React, { useState } from 'react';
import { isPalindrome } from '../helpers/isPalindrome';

function PalindromeInput() {
    const [data, setData] = useState({
        letters: '',
    });

    const [form, setForm] = useState({
        letters: '',
    });

    const [submit, submitted] = useState(false);

    const onChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        isPalindrome(data);
    }

    const onSubmit = e => {
        e.preventDefault();
        setForm({
            letters: data.letters,
        });
        submitted(true);
        // let checkData = data;
        // if(!this.checkIfExists(checkData)) {
        //   axios.post('/api/palindromes', { data })
        //     .then(() => loadList())
        //     .then(() => setData(''))
        // } else {
        //     setData('');
        //     () => loadList();
        // }
    };

    // const checkIfExists = checkData => {
    //     let length = palindromeList.length;
    //     for (var i = 0; i < length; i++) {
    //       if (palindromeList[i].key === checkData.toLowerCase()) {
    //         alert('Palindrome already exists in database!');
    //         return true;
    //       }
    //     }
    //     return false;
    //   }

        return (
            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    name='letters'
                    value={data.letters}
                    onChange={onChange}
                />{' '} 
                
                        is a palidrome 
                        <input type='submit' value='Add' />

                 
            </form>    
        )
};

export default PalindromeInput;