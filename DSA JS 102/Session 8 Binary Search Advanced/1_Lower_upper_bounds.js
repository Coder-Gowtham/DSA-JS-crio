function binarySearch(arr, n, target) {
    let left = 0, right = n - 1, mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

// lower bound: find the first occurence of the least element equal
// or greater than the target

// arr = [2, 3, 5, 7, 8], target = 5, lower_bound = 5
// arr = [2, 3, 5, 7, 8], target = 6, lower_bound = 7
// arr = [2, 3, 5, 7, 8], target = 9, lower_bound = -1

// upper bound: find the first occurence of the least elemdent greater
// than the target

// arr = [2, 3, 5, 7, 8], target = 5, upper_bound = 7
// arr = [2, 3, 5, 7, 8], target = 6, upper_bound = 7
// arr = [2, 3, 5, 7, 8], target = 8, upper_bound = -1

function lowerBound(arr, n, target) {
    let left = 0, right = n - 1, mid, ans = -1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            ans = mid;
            right = mid - 1;
        }
    }
    return ans;
}

function upperBound(arr, n, target) {
    let left = 0, right = n - 1, mid, ans = -1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) {
            left = mid + 1;
        } else {
            ans = mid;
            right = mid - 1;
        }
    }
    return ans;
}