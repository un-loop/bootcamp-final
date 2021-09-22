import axios from 'axios';
import React, { useState } from 'react';
import { isPalindrome } from './isPalindrome';


function PalindromeInput(props) {
    const [data, setData] = useState('');
    const [palindrome, setPalindrome] = useState(false);

    const onChange = (e) => {
        let letters = e.target.value;
        setData(letters);
        let result = isPalindrome(letters);
        setPalindrome(result);
    }

    const onSubmit = () => {
        props.onSubmit(data);
        setData('');
    }

    return (
        <>
            <div>
                {palindrome === true ? (
                    <span>
                        <input
                            type='text'
                            name='data'
                            value={data}
                            onChange={onChange}
                        />
                        <input  
                            type='submit'
                            value='Add'
                            onClick={onSubmit}
                        />
                    </span>
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