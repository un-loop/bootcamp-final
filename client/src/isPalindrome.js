function isPalindrome (str) {
    let arr = str.split('')
    for (let i = 0, h = arr.length - 1; i < (arr.length / 2) - 1; i++, h--) {
        while (arr[i].match(/\W/)){
            i++;
        }
        while (arr[h].match(/\W/)) {
            h--;
        }
        if (arr[i] !== arr[h]) {
            return false;
        }
    }
    return true
}

// let arrTest = ['sts', 'hello', 'whyyhw', '', 'why the, ere, htyhw?']
// for (x in arrTest) {
//     console.log(isPalindrome(arrTest[x]))
// }