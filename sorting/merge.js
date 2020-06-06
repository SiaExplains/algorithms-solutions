/*
    usually done recursively
    divide & conquer => 
        break the problem to smaller problem to solve it

*/

const merge = (arr, left, right) => {
    console.log('left', left);
    console.log('right', right);
    let i = (j = k = 0);
    // i - to mark the index of left aubarray (left)
    // j - to mark the index of right sub-raay (rightR)
    // k - to mark the index of merged subarray (Aarr)

    while (i < left.length && j < right.length) {
        arr[k++] = left[i] < right[j] ? left[i++] : right[j++];
    }
    while (i < left.length) arr[k++] = left[i++];
    while (j < right.length) arr[k++] = right[j++];
    return arr;
};

const mergeSort = arr => {
    let len = arr.length;
    if (len < 2) return;
    let mid = len / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    mergeSort(left);
    mergeSort(right);
    let data = merge(arr, left, right);
    return data;
};

let arr = [8, 17, 60, 5, 4, 333, 2, 1];

console.table(mergeSort(arr));
