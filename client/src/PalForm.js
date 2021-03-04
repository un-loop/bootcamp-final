import React, { useState } from 'react'
import isPalindrome from './isPalindrome'

const PalForm = () => {
    const [pal, setPal] = useState('')

    const onInput = (e) => {
        let newVal = e.target.value;
        setPal(newVal);
    }

    const display = (bool) => {
        if (bool) {
            return 'is a palindrome'
        } else {
            return ''
        }
    }
    return (
        <form>
            <input type='text' onChange={onInput}/>
            <span>{display(isPalindrome(pal))}</span>
        </form>
    )
}

export default PalForm