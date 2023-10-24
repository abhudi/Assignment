
const input = prompt("Enter a list of numbers separated by commas:");
const numbers = input.split(',').map(Number);

if (numbers.some(isNaN)) {
  alert("Invalid input. Please enter a list of numbers separated by commas.");
} else {
  numbers.sort((a, b) => b - a);

  alert("Sorted Array (Descending Order): " + numbers.join(', '));
}
