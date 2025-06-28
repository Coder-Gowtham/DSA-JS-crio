function bubbleSort(n, arr) {
    for (let i = 0; i < n - 1; i++) { //i is number of iterations
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

let arr = [7, 12, 9, 11, 13];
const sortedArr = bubbleSort(arr.length, arr);
console.log(sortedArr)
