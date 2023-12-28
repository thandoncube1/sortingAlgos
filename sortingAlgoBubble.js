let array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
let swapped = true;

while (swapped) {  // Check if any swaps were made
  swapped = false; // Set the swapped to false
  for (let i = 0; i < array.length - 1; i++) { // Loop through the array
    if (array[i] > array[i + 1]) { // Check to see if the current element is greater than the next element
      let temp = array[i]; // Store the current value in temporary variable
      array[i] = array[i + 1]; // Set the current value to the next value
      array[i + 1] = temp; // Set the next value to the temporarily stored value
      swapped = true; // Set the swapped to true
    }
  }
}

console.log(array);