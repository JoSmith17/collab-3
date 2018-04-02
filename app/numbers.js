const numbers = [0, 1, 5, 4, 7, 2, 8];
const intergers = [2, 4, 6, 8, 10];

sum = (numbers) => {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

sum = (intergers) => {
    let total = 0;
    for (i = 0; i < intergers.length; i++) {
        total += intergers[i];
    }
    return total;
}