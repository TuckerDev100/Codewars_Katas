

//the regex way
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
  }

// the shorter and cooler way
function palindromeShort(str){

if (str.split("").toString() == str.split("").reverse().toString()) {
    console.log(true)
    }
else {console.log (false)
    }
}

palindromeShort("brick");


// the long and explicit way
function palindromeLong(str){
    strArr = str.split("");
    compArr = [];
   // console.log(strArr)

    for (let i = strArr.length -1; i >= 0; i--) { // a reversed for loop in JS
        compArr.push(strArr[i])
        console.log(compArr.join(""))
    };

    if (strArr.toString() == compArr.toString()){ //necessary bcause otherwise the Arrays are treated as Objects, which are distinct.
        console.log(true); //This way we are directly comparing strings.
    }

    else  {
        console.log(false);
    };

};

// palindrome("racecar");