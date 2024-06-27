let str = "Harr\"";
console.log(str.length);
// prob2
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));


console.log(str1.startsWith('Sat', 3));
//prob3
console.log(word.toLocaleLowerCase());
console.log(word.toLocaleUpperCase());
//prob4
let str2 = "Please give Rs 1000";
let amount = Number.parseInt(str2.slice(15));
console.log(amount);
console.log(typeof amount);
//prob 5
let friend = "Deepika";
friend[3] = "R";
console.log(friend); // friend is not changed because string is immutable.