function coloringString(str1, str2) {
    const arStr1 = Array.from(str1);
    const arStr2 = Array.from(str2);
    const res = arStr1.map(function(char, index){
        if (char == arStr2[index]){
            return 'green';
        }
        if (str2.indexOf(char)>0){
            return 'yellow';
        }
        return 'red';
    })
return res;
}
const s1 = 'abcd';
const s2 = 'acbd';
const clrRes = coloringString(s1,s2);

function getNumbersWithDigitsAmount(digitsAmount, array) {
    return array.filter(function(number){
        let absNumber = Math.abs(number);
        const strNum = absNumber.toString();
        return strNum.length === digitsAmount;
    })
}

const arT = [1, 100, -100, 25, 1000];
const newAr = getNumbersWithDigitsAmount(3, arT);
