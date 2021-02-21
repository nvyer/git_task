function getRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const index = parseInt(Math.random() * 28);
    return alphabet[index];
}

getRandomLetter();


const multiply = (arr, n) => arr.map((el) => el * n);

multiply([1, 2, 3], 3);

