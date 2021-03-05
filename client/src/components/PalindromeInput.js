import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { isPalindrome } from '../isPalindrome';
import PalindromList from '../App';
import loadList from '../App';

function PalindromeInput(props) {
    const [data, setData] = useState('');
    const [palindrome, setPalindrome] = useState(false);

    const onChange = (e) => {
       let letters = e.target.value;
       setData(letters);
       let result = isPalindrome(letters);
       setPalindrome(result);
    }
   
    const onSubmit = async (e) => {
        try {
            await axios.post('/api/palindromes', { data })
            .then(res => res.data)
            .then((list) => PalindromList)
            .then(() => setData(''))
        } catch (err) {
            console.log(err)
        }
        e.preventDefault();
        
    };

        return (
            <>
                <div>Input data: {data} </div>
                <div>
                    {palindrome === true ? (
                        <span><input 
                        type='text'
                        name='data'
                        value={data}
                        onChange={onChange}
                        /> is a palidrome 
                        <input type='submit' value='Add' onClick={onSubmit} /></span>
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