const numbers = [0, 1, 5, 4, 7, 2, 8];

sum = (numbers) => {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}