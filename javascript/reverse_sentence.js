
const inputSentence = prompt("Enter a sentence:");
const reversedSentence = inputSentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');


alert("Reversed Sentence: " + reversedSentence);

//We can use node reverse_sentence.js to run this file but in this case i am using prompt which is popup , thats why this command will not run we have to use 
// simply copy the code and paste into chrome console (console can be get after inspect any website)