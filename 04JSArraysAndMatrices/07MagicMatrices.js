function magicMatrice(matrice){
    let result = true;
    let firstRow = matrice[0];

    let magicSum = calculateSum(firstRow);

    function calculateSum(arr){
        let sum = 0;
        for (let element of arr) {
            sum += element;
        }
        return sum;
    }

    for (let rowNum = 0; rowNum < matrice.length; rowNum++) {
        if (calculateSum(matrice[rowNum]) !== magicSum) {
        result = false;
        }
    }
    for (let colNum = 0; colNum < firstRow.length; colNum++) {
        let sum = 0;
        for (let rowNum = 0; rowNum < matrice.length; rowNum++) {
            sum += matrice[rowNum][colNum];
        }
        if (sum !== magicSum) {
            result = false;
        }
    }

    console.log(result);
}


