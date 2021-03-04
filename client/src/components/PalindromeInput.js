import axios from 'axios';
import React, { useState } from 'react';
import { isPalindrome } from './isPalindrome';

function PalindromeInput(props) {
    const [data, setData] = useState('');
    const [palindrome, setPalindrome] = useState(true);

    const onChange = e => {
        setData(e.target.value);

        console.log('data', data)
        let result = isPalindrome(data);
        console.log('result', result);
        console.log('data ', data);
    }

    const onSubmit = e => {
        e.preventDefault();

        axios.post('/api/palindromes', { data })
            // .then(() => loadList())

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
            <>
                <div>Input data: {data} </div>
                <div>
                    {palindrome === true ? (
                        <span><input 
                        type='text'
                        value={data}
                        onChange={onChange}
                        /> is a palidrome 
                        <input type='submit' value='Add' onSubmit={onSubmit} /></span>
                    ) : (
                        <input 
                        type='text'
                        value={data}
                        onChange={onChange}
                        />
                    )}
                </div> 
            </>   
        )
};

export default PalindromeInput;