// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* Solution 1 */
// function reverse(str) {

//     let reverseStr = '';

//     for (let i = str.length-1; i >= 0; i--) {
//         reverseStr += str[i];
//     }

//     return reverseStr;
// }

/* Solution 2 */
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

/* Solution 3 */
// function reverse(str) {

//     let reverseStr = '';

//     for (const char of str) {
//         reverseStr = char + reverseStr;
//     }

//     return reverseStr;
// }

/* Solution 4 */
function reverse(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');
}


reverse('hello');

module.exports = reverse;
