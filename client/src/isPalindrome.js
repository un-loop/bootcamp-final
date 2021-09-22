import React from 'react';

const isPalindrome = str => {
  let newStr = str.replace(/[^aa-zA-Z\d]/g, '');
  let compare = newStr.split('').reverse().join('');
  return newStr.toLowerCase() === compare.toLowerCase();

    // const stack = "";
    
    // for (let i = 0; i < str.length; i++) {
    //   stack.push(str[i]);
    // }
    // let front; let end;
    // while (
    //   stack.length === 1 ||
    //   ((end = stack.pop()) && (front = stack.shift()))
    // ) {
    //   if (front != end) {
    //     return false;
    //   }
    // }
    // return true;
}

    export { isPalindrome };