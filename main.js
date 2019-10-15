let Phrase = require("mhartl-palindrome");

function palindromeTester(event) {
  //prevents sending info to nonexistent server 
  event.preventDefault();
  // let string = prompt("Please enter a string for palindrome testing:")
  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // let button = document.querySelector("#palindromeTester");
  // button.addEventListener("click", function() {
  //   palindromeTester();
  // });
  let form = document.querySelector("#palindromeTester");
  form.addEventListener("submit", function() {
    palindromeTester(event);
  });
});
