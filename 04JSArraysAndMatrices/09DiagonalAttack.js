function diagonalAttack(arr){
    let rows = arr.length;

    let firstRow = arr[0];
    let firstRowAsArray = firstRow.split(' ');
    let columns = firstRowAsArray.length;

    let multiDimArray = convertToMultiDimArray(arr);

    if (hasEqualSumDiagonals(multiDimArray)) {
        let diagonalSum = getDiagonalSum(multiDimArray);
        fillMatrix(multiDimArray, diagonalSum);
    }

    printArray(multiDimArray);

    function hasEqualSumDiagonals(multiDimArray) {
        let sumFirstDiagonal = 0;
        let sumSecondDiagonal = 0;

        for (let i = 0, j = 0; i < rows, j < columns; i++, j++) {
            sumFirstDiagonal += multiDimArray[i][j];
        }
        for (let i = rows - 1 , j = 0; i >= 0, j < columns; i--, j++) {
            sumSecondDiagonal += multiDimArray[i][j];
        }
        if (sumFirstDiagonal === sumSecondDiagonal) {
            return true;
        }
        return false;
    }

    function getDiagonalSum(multiDimArray) {
        let sumDiagonal = 0;

        for (let i = 0, j = 0; i < rows, j < columns; i++, j++) {
            sumDiagonal += multiDimArray[i][j];
        }
        return sumDiagonal;
    }

    function fillMatrix(multiDimArray, diagonalSum) {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (j !== i && j !== (rows - 1 - i)) {
                    multiDimArray[i][j] = diagonalSum;
                }
            }
        }
    }

    function convertToMultiDimArray(arr){
       let result = [];
        for (let i = 0; i < rows; i++) {
            let row = arr[i].split(' ');
            let newRow = [];
            for (let j = 0; j < row.length; j++) {
                newRow.push(Number(row[j]));
            }
            result.push(newRow);
        }
        return result;
    }

    function printArray(multiDimArray) {
        for (let i = 0; i < rows; i++) {
            let row = multiDimArray[i];
            console.log(row.join(' '));
        }
    }
}

diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']


)