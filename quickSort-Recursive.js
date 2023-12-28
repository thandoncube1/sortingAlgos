let array = [12, 43, 64, 2, 5, 8, 16, 128, 19, 10, 3, 1, 25];
// Array that we use to sort.
function quickSort(arr) {
    if (!arr || arr.length <= 1) return arr; // If the array is empty, return an empty array
    let pivot = arr[0]; // Set the pivot point of the array
    let left = arr.filter(x => x < pivot); // Filter values that are less than the pivot point
    let right = arr.filter(x => x > pivot); // Filter values that are greater than the pivot point
    return [...quickSort(left), pivot, ...quickSort(right)]; // Return the array, spread the quickSort values that are less than the pivot point and values that are greater than the pivot point.
}

let result = quickSort(array);
console.log(result);