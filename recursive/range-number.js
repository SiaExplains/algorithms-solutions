function rangeOfNumbers(startNum, endNum) {
    if (startNum - endNum == 0) {
        return [startNum];
    } else if (startNum <= endNum) {
        var numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}

console.log(rangeOfNumbers(5, 10));
