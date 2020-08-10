function firstLast(sentence) {
  return sentence.charAt(0) + sentence.charAt(sentence.length-1)
}

const sentence = prompt("Enter a sentence: ");
alert(firstLast(sentence));
