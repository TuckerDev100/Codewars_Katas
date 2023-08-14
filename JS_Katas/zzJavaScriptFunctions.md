
## STRING MANIPULATION

###Array.prototype.slice(): 
The slice() method returns a shallow copy of a portion of an array into a new array object
selected from start to end (end not included) where start and end represent the index of items in that array. 
The original array will not be modified. 

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

Array.slice() returns selected array elements as a new array:

Orange,Lemon

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

### String.prototype.replace();
The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement. 
The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match.
 If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

NOTE: String.prototype.replaceAll() does NOT work on some
browser versions or versions of Node.JS. 
To do a global replace, use regex like so:

phoneNum = phoneNum.toString().replace(/,/g, '');


### String.prototype.substring();

The substring() method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

function createPhoneNumber(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' 
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
  }