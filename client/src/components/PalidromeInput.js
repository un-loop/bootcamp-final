import React, { useState } from 'react';
import { isPalidrome }from '../helpers/isPalidrome';

const PalidromeInput = () => {
    const [letters, setLetters] = useState('');

    const onChange = letters => e => {
        // e.preventDefault();
        let message = 'is a palidrome'
        setLetters(e.currentTarget.value)
        let results = isPalidrome(letters)
        console.log(letters)
        console.log(results)
        if (results) {
            return message
        } else {
            return
        }
    }

        return (
            <div className='palidrome-input'>
                <input type='text' input='input'
                value={letters}
                onChange={onChange(letters)} 
                />
            </div>
            
        )
    
};

export default PalidromeInput;