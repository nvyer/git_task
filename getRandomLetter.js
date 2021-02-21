function getRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const index = parseInt(Math.random() * 28);
    return alphabet[index];
}

getRandomLetter();
