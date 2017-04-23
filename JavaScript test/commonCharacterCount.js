/* Return number of common chars between 2 strings. */
var s1 = "fuck";
var s2 = "fuckfuck";
s1.split("");
console.log(s1);
console.log(s1.split(""));
console.log(commonCharacterCount(s1, s2));


function commonCharacterCount(s1, s2) {
    var common = 0;
    s1 = s1.split("");
    s2 = s2.split("");

    for (var i = 0; i < s1.length; i++) {
        for (var j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                common++;
                s2.splice(j, 1);
                break;
            }
        }
    }
    return common;
}
