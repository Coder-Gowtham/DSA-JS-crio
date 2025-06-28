function selectionSort(n, arr) {

    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];

    }

    return arr;
}

let arr = [7, 79, 12, 100, 99, 9, 11, 13];
const sortedArr = selectionSort(arr.length, arr);
console.log(sortedArr)
