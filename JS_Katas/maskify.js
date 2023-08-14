/*
Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. However, 
since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/


function maskify(cc) {
    ccArray = cc.split('') // JS strings are IMMUTABLE. You must split it into a char array to work on it.
    mask = false

    for (let i = 0; i < ccArray.length; i++) {
        if (i < (ccArray.length -4)) {
            ccArray[i] = '#' //This replaces the charachter currently being iterated on.
        }
    }
    ccMasked = ccArray.join('') //This turns the char array back into a String. 
    return(ccMasked)
}

maskify('fooooooooooooooooo')


//OTHER METHODS

function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }

  function maskify(cc) {
    return cc.replace(/.(?=....)/g, '#');
  }