export function isPalindrome(str = " ") {
    var word = str.length;
    if (word === 1){
        console.log(true) && alert("1 word is a palindrome");
    }
    else if (str[0] === str[word - 1]) {
        return isPalindrome(str.slice(1, word - 1)) && alert("is a palindrome");
    } else{
        console.log(false) && alert("not a palindrome");
        }
}

