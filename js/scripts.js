$(document).ready(function() {
  function first(sentence) {
    return (sentence.charAt(0));
  }
  function last(sentence) {
    return (sentence.charAt(sentence.length-1));
  }
  const sentence = prompt("Write a sentence.");
  const result2 = first(sentence.toUpperCase());
  const result1 = last(sentence.toUpperCase());
  alert(result1 + result2);
});