// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined || !matrix.length) {
        return [];
    }
    let sortMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            i % 2
                ? sortMatrix.push(matrix[i][matrix[i].length - j - 1])
                : sortMatrix.push(matrix[i][j]);
        }
    }
    return sortMatrix;
};
