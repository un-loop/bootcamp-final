import React from 'react';

let isPalindrome = (str) => {
    const arrayValues = str.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
    if(str == reverseString) {
        return true;
    }
    else {
        return false;
    }
}
;
console.log(isPalindrome("racecar"))