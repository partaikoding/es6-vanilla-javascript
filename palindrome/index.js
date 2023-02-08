const isPalindromeManual = (str) => {
    let len = str.length;
    for (i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log("menggunakan fungsi manual: ")
console.log(`apakah kata "ara" palindrome? ` + isPalindromeManual("ara"))
console.log(`apakah kata "usa" palindrome? ` + isPalindromeManual("usa"))

const isPalindromeMatic = (str) => {
    return str === str.split("").reverse().join("");
}

console.log("menggunakan fungsi matic: ")
console.log(`apakah kata "ara" palindrome? ` + isPalindromeMatic("ara"))
console.log(`apakah kata "usa" palindrome? ` + isPalindromeMatic("usa"))