/* Return true if the sum of first half digits of number === sum of second half digits of number. */
var n = 1230;
var k = 123456;

console.log(isLucky(n));
console.log(isLucky(k));

function isLucky(n) {
    var array = (n + "").split("").map(x => +x);
    var sumFirst = 0;
    var sumSecond = 0;
    for (var i = 0; i < array.length / 2; i++) {
        sumFirst += array[i];
    }

    for (var j = array.length / 2; j < array.length; j++) {
        sumSecond += array[j];
    }

    return sumFirst === sumSecond;
}
