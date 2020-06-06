/*
    Insertion Sort

    1. Working left to right! >>>
    2. Examine each item and copmare it to items on its left
    3. INSERT the item in the correct position in the array

    i = 1 -> LEN
    j = i -> j > 0 && a[j-1] > a[j]

*/

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
    return arr;
};

let arr = [3, 90, 1, 4, 7, 2, 5, 400, 6];
console.log(insertionSort(arr));
