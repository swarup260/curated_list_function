/* check the check occurrence  of element in sequences*/
const checkOccurrence = (args, key) => {
    for (x of args) {
        if (x == key) {
            return true
        }
    }
    return false
}

/* sum of a numbers */
const sumOf = number => number * (number + 1) / 2

/* check if the no. even or not */
const isEven = number => (number & 1) == 0 ? true : false

/* using for loop */
const reverseStr = string => {
    reverse = "";
    for (let index = string.length - 1; index >= 0; index--) {
        reverse += string[index]
    }
    return reverse;
}

/* using inbuilt function */
const reverseString = string => string.split("").reverse().join("")

/* check if the string  */
const isCheckPalidrome = string => string == reverseString(string) ? true : false