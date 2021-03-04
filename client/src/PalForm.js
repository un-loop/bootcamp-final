import React, {  useState } from 'react';
import moment from 'moment';
import isPalindrome from './isPalindrome';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'applicatin/json';

const PalForm = ({ updateList }) => {
    const [pal, setPal] = useState({
        val: '',
        isPal: true
    });

    const onInput = (e) => {
        let newVal = e.target.value;
        setPal(
            {
                val: newVal,
                isPal: isPalindrome(newVal)
            });
    }

    const display = (bool) => {
        if (bool) {
            return 'is a palindrome'
        } else {
            return ''
        }
    }

    const subPal = async (e) => {
        e.preventDefault()
        const options = {
            method: 'post',
            url: '/api/palindromes',
            data: {
                time: moment().format('MMMM Do YYYY, h:mm a'),
                ...pal
            }
        }
        try {
            const response = await axios(options);
            updateList();
        } catch (error) {
            if(error.response && error.response.data.includes('The palindrome')){
                alert(error.response.data)
            } else {
                alert(error)
            }
        } finally {
            setPal(
                {
                    val: '',
                    isPal: true
                });
        }
    }

    return (
        <form onSubmit={(e) => {e.preventDefault(); subPal(e)}}>
            <input type='text' value={pal.val} onChange={onInput}/>
            <span>{display(pal.isPal)}</span>
            {pal.isPal && <button type='button' onClick={subPal}>Add</button>}
        </form>
    )
}

export default PalForm