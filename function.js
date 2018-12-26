/* check the check occurrence  of element in sequences*/
const checkOccurrence = (args, key) => {
  for (x of args) {
    if (x == key) {
      return true;
    }
  }
  return false;
};

/* sum of a numbers */
const sumOf = number => (number * (number + 1)) / 2;

/* check if the no. even or not */
const isEven = number => ((number & 1) == 0 ? true : false);

/* using for loop */
const reverseStr = string => {
  reverse = "";
  for (let index = string.length - 1; index >= 0; index--) {
    reverse += string[index];
  }
  return reverse;
};

/* using inbuilt function */
const reverseString = string =>
  string
    .split("")
    .reverse()
    .join("");

/* check if the string  */
const isCheckPalidrome = string =>
  string == reverseString(string) ? true : false;

/* count the vowels in giuen string */
const countVowels = string => {
  let vowelCount = 0;
  for (const char of string) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      vowelCount += 1;
    }
  }
  return vowelCount;
};

/* alternative solution */
const countVowelsRegex = string => string.match(/[aeiou]/gi || []).length;

/* find the largest no in array of no.  */

const findLargestNo = array => {
  let largest = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > largest) {
      largest = array[index];
    }
  }
  return largest;
};

/* find the smallest no in array of no.  */

const findSmallesNo = array => {
  let smallest = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] < smallest) {
      smallest = array[index];
    }
  }
  return smallest;
};

/* find the MinMax of given array */
const MinMax = array => {
  let min = findSmallesNo(array);
  let max = findLargestNo(array);
  return [min, max];
};

/* alternative */

const MinMaxAlternative = array => {
  let min = 0;
  let max = 1;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > max) {
      max = array[index];
    } else if (array[index] < min) {
      min = array[index];
    }
  }
  return [min, max];
};
