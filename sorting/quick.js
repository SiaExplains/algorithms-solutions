/*
    is a recursively algorithm
    we using pivot!
        - correct position in final
        - items to the left are smaller than pivot
        - items to the right are bigger than pivot

    median-of-three is a method of select pivot
*/

function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function sort(items, left, right) {
    var index;

    if (items.length > 1) {
        left = typeof left != 'number' ? 0 : left;
        right = typeof right != 'number' ? items.length - 1 : right;

        index = partition(items, left, right);

        if (left < index - 1) {
            sort(items, left, index - 1);
        }

        if (index < right) {
            sort(items, index, right);
        }
    }

    return items;
}

const quickSort = (arr) => {
    sort(arr);
};

let arr = [3, 90, 1, 4, 7, 2, 5, 400, 6];
console.log(sort(arr, 0, arr.length - 1));
