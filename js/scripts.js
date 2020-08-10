function firstLast(sentence) {
  return sentence.charAt(0) + sentence.charAt(sentence.length-1);
}

function capitalize(sentence) {
  return (firstLast(sentence)).toUpperCase();
}

const sentence = prompt("Enter a sentence: ");
alert(capitalize(sentence));
