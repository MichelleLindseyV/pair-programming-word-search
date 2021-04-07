const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false;
    }
    const reverseWord = word.split("").reverse().join("");
    console.log(reverseWord);
    let isFound = false;
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(reverseWord)) {
            isFound = true;
        }
    };

    const transpose = function (matrix) {
        let newArr = [];
        for (i = 0; i < matrix[0].length; i++) {
            let arrTwo = []
            for (j = 0; j < matrix.length; j++) {
                arrTwo.push(matrix[j][i]);
            }
            newArr.push(arrTwo);
        }

        return newArr;
    };
    const verticallyArray = transpose(letters);
    const verticallyJoin = verticallyArray.map(ls => ls.join(''))
    for (l of verticallyJoin) {
        if (l.includes(word) || l.includes(reverseWord)) {
            isFound = true;
        }
    };

    return isFound;
};


module.exports = wordSearch