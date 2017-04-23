/* The building is represented by a rectangular matrix of rooms, each cell containing an integer - the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots.

Help the bots calculate the total price of all the rooms that are suitable for them. */

var matrix = [[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]];
console.log(matrixElementsSum(matrix));

function matrixElementsSum(array) {
    var sum = 0;
    var help = false;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j] === 0) {
                sum += 0;
            } else {
                sum += array[i][j];
                for (var k = i; k > 0; k--) {
                    if (i > 0 && array[i - k][j] === 0) {
                        if (!help) {
                            help = true;
                        }
                    }
                }
                if (help === true) {
                    sum -= array[i][j];
                    if (j === array[i].length) {
                        if (help) {
                            help = false;
                        }
                    }
                }
            }
        }
    }
    return sum;
}
