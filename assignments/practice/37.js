//37)	Write a JavaScript function that takes a sentence as input and returns the longest word in the sentence. If there are multiple words of the same length, return the first one that appears.
// Input : "The quick brown fox jumps over the lazy dog"
// Output : "jumps"
// Input : "JavaScript is an amazing programming language"
// Output : "programming"
var sentence="The quick brown fox jumps over the lazy dog"
var words=sentence.split(' ')
var longestWord=""
for(let word of words){
  if(word.length>=longestWord.length){
    longestWord=word
  }
}
console.log(longestWord)