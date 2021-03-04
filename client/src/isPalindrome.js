function isPalindrome(str) {
    var word = str.length;
    if (word === 1) {
        return true;
    }
    
    if (str[0] === str[word-1]) {
        return isPalindrome(str.slice(1, word-1) );
    }
    return false;
}

console.log(isPalindrome('ab'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('kayak'));
console.log(isPalindrome('moms'));