// Find the Longest Word With the sort() Method. From Stack OverFlow.

// function findLongestWord(str) {
//   return str
//     .replace(/[^\w ]/g, "") //remove punctuation
//     .split(" ") //create array of strings
//     .sort(function (a, b) {
//       return a.length - b.length;
//     }) //sort in order of word length
//     .pop(); //pop the last element
// }

// console.log(findLongestWord("My name is Muhammad Asif")); //conducting

// By Thapa
// Q1: write a function findLongestword that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one enountered.
// Note:
// i. If the input string is empty or contains only whitespace, the function should return an false.
// ii. The function should ignor leading and trailing whitespace when determining the longest word.
// is question may jo sub say longest word hay wo findout krna hay or un may bhi jo phla hay wo return krna hay.

// string may koi comparison function nhi hay, is leyee hum string ko Array may convert krain gay comparison kay leyee.
// .trim : start and last ka jo white space hay us ko hata da ga.

// const findLongestWord = (str) => {
//   // start or end say whitespace khatam ki hay or us kay baad length zero ho to return false krna hay.
//   if (str.trim().length === 0) {
//     return false;
//   }

//   // now we converting string it in to array.
//   //   strArr = str.split(); // here it is convert in to arry
//   //   strArr = str.split(""); // here it is convert in to arry and split in to individuall letter
//   words = str.split(" "); // here it is convert in to arry and split in to individuall words on the base of space
//   //   console.log(strArr);
//   // Now apply comparison function, changing it in to ascending order based on Unicode values not based on abcd.
//   // now we compare them on the basis of their length. for this we used comparison function `(a,b) => a-b`,
//   // sort function may iger hum ya call back function pass krtay hay, with two parameter,
//   //   words = words.sort((a, b) => a.length - b.length); // jo last word hoga wo sub say logest word hoga
//   //   console.log(words);
//   //   return words.at(-1); // for getting the last word.

//   // for getting the last word in start, just chage the `a.length - b.length` in to `b.length - a.length`
//   words = words.sort((a, b) => b.length - a.length); // jo last word hoga wo sub say logest word hoga
//   console.log(words);
//   return words[0]; // for getting the first word.
// };

// by reducers method.

// console.log(findLongestWord("My name is MuhammadAsif Muhammad Asif!"));

// The code without Text.

const longestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  words = str.split(" ");
  // words = words.sort((a, b) => a.length - b.length);
  // return words.at(-1);

  // by reducers method. for single words use this, means used reducers
  return words.reduce(
    (accumulator, currendWord) =>
      currendWord.length > accumulator.length ? currendWord : accumulator,
    ""
  );
};

console.log(longestWord("Now I'm findingss the longest word"));
