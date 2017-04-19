var arr = [6, 2, 3, 8];
console.log(makeArrayConsecutive(arr));
console.log(makeArrayConsecutive1(arr));
/* Problems illustrated for array arr above
   Need put 4, 5, 7 to complete the array from MIN -> MAX. So the output is the number of times added */

/* My version */
function makeArrayConsecutive(statues) {
    // Note the use of spread operator?
    var min = Math.min(...statues);
    var max = Math.max(...statues);
    var counter = 0;
    var help = min + 1;
    while (help < max) {
        if (statues.indexOf(help) === -1) {
            counter++;
            help++;
        } else {
            help++;
        }
    }
    return counter;
}

/* Improved version */
function makeArrayConsecutive1(sequence) {
    return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length;
}
