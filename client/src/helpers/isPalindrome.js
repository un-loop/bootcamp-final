const isPalindrome = str => {
    let newStr = str.replace(/[^a-zA-Z\d]/g, '');
    let compare = newStr.split('').reverse().join('');
    return newStr.toLowerCase() === compare.toLowerCase();
}
export  { isPalindrome };