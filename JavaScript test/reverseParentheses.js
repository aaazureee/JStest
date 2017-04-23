/* Reverse words in parentheses. */
var string = "(a(bc)de)";
console.log(reverseParentheses(string));

function reverseParentheses(string) {
    var a = string.split("");
    // basically find from the right to get the smallest open parentheses
    var start = a.lastIndexOf("(");
    var end = 0;

    // complex shit
    while (start !== -1) {
        // find end (+ number of words in parentheses)
        end = start + a.slice(start).indexOf(")");
        // remove parentheses part, replace it with reversed string.
        a.splice(start, end - start + 1, ...a.slice(start + 1, end).reverse());
        start = a.lastIndexOf("(");
    }
    return a.join("");
}
