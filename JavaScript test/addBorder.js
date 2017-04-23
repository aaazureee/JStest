/* Given a rectangular matrix of characters, add a border of asterisks(*) to it. */
var picture = ["abc", "ded"];
console.log(addBorder(picture));

function addBorder(array) {
    var newArray = array.slice();
    var length = array[0].length;
    // Add stars to top and bottom (start and end)
    newArray.unshift(printStars(length + 2));
    newArray.push(printStars(length + 2));
    for (var i = 1; i < newArray.length - 1; i++) {
        newArray[i] = "*" + newArray[i] + "*";
    }
    return newArray;
}

function printStars(n) {
    var str = "";
    for (var i = 0; i < n; i++) {
        str += "*";
    }
    return str;
}
