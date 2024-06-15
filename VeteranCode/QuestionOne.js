// How to find Duplicate elements in a given Array?
// filter may 3 tezain hoti hay element, index or array

// const arrNumber = [1, 2, 3, 5, 4, 3, 4, 5, 8, 0];
// const duplicates = arrNumber.filter(
//   (ele, index, arr) => arr.indexOf(ele) !== index
// );
// console.log(duplicates);

// Test:

const arrayOfNumbers = [1, 2, 3, 4, 5, 3, 2, 6, 5, 1];

const DuplicateNumbers = arrayOfNumbers.filter(
  (element, index, array) => array.indexOf(element) !== index
);
console.log(DuplicateNumbers);
