
function printerErrors (s) {
    sArr = s.split("");
    let errCount = 0;

    for (let i = 0; i <= sArr.length; i++) {
        if (sArr[i] == 'n' || sArr[i] == 'o' || sArr[i] =='p' || sArr[i] =='q' || sArr[i] =='r' || sArr[i] =='s' || sArr[i] =='t' || sArr[i] =='u' || sArr[i] =='v' || sArr[i] =='w' || sArr[i] =='x' || sArr[i] =='y' || sArr[i] =='z') {
       
            errCount ++
        }
    }

    console.log(errCount.toString() + "/" + sArr.length.toString())
}

printerErrors("aaaxbbbbyyhwawiwjjjwwm")

