var a = [-1, 150, 190, 170, -1, -1, 160, 180];
// remember -1's positions
var treePosition = [];
// add index of -1 to treePosition arr to add it back after sorted
for (var i = 0; i < a.length; i++) {
    if (a[i] === -1) {
        treePosition.push(i);
    }
}
// Keep values !== -1;
a = a.filter(x => x !== -1);

// Sort ascending order
a.sort((a, b) => a - b);
console.log(a);

// Add -1 back after sorted
for (var i = 0; i < treePosition.length; i++) {
    a.splice(treePosition[i], 0, -1);
}

console.log(a);

function sortByHeight(a) {

}
