function isPalindrome (str) {
    let arr = str.split('')
    for (let i = 0, h = arr.length - 1; i < (arr.length / 2); i++, h--) {
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

export default isPalindrome

// let arrTest = ['sts', 'hello', 'whyyhw', '', 'why the, ere, htyhw?', 'hh', 'he']
// for (let x in arrTest) {
//     console.log(isPalindrome(arrTest[x]))
// }