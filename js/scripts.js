function firstLast(sentence) {
  return sentence.charAt(0) + sentence.charAt(sentence.length-1);
}

function capitalize(sentence) {
  return (firstLast(sentence)).toUpperCase();
}

function reverse(sentence) {
  return capitalize(sentence).charAt(1) + capitalize(sentence).charAt(0);
}

function combine(sentence) {
  return sentence+reverse(sentence);
}

const sentence = prompt("Enter a sentence: ");
alert(combine(sentence));
