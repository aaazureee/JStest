/* Return the century of the year inputted */

var year = 2017;
console.log(centuryFromYear(year));

function centuryFromYear(year) {
    if (year % 100 === 0) {
        return year / 100;
    } else {
        return (year / 100 + 1 | 0);
    }
}
