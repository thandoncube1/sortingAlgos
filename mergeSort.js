// Merge sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    const length = array.length;
    const middle = Math.floor(length / 2);
    // Break the array into two parts - middle pointer (Element in the middle).
    const left = array.slice(0, middle);
    // Left - 0 to Middle
    const right = array.slice(middle);
    // Right - middle pointer to the end.
    // console.log('left: ', left);
    // console.log('right: ', right);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // console.log(left, right);
    return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}

const answer = mergeSort(numbers);
console.log(answer);