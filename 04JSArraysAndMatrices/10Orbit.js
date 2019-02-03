function orbit(arr) {
    let columns = arr[0];
    let rows = arr[1];
    let x = arr[2];
    let y = arr[3];

    let result = declareResult(rows, columns);


    function declareResult(rows, columns){
        let result = [];
        for (let i = 0; i < rows; i++) {
            var row = [];
            for (let i = 0; i < columns; i++ ) {
                row.push(0);
            }
            result.push(row);
        }
        result[y][x] = 1;
        return result;
    }

    let topRowIndex = y - 1;
    let leftColumnIndex = x - 1;
    let rightColumnIndex = x + 1;
    let bottomRowIndex = y + 1;

    let currentOrbit = 2;

    drawOrbits();

    for (let i = 0; i < result.length; i++) {
        let resultRow = result[i];
        console.log(resultRow.join(' '));
    }

    function drawOrbits() {
        let verticalOrbits = rows - y - 1;
        let horizontalOrbits = columns - x - 1;
        let orbitsCount = Math.max(verticalOrbits, horizontalOrbits);

        for (let i = 1; i <= orbitsCount; i++) {
            if (topRowIndex >= 0) {
                drawTop(topRowIndex, leftColumnIndex, rightColumnIndex);
            }
            topRowIndex--;

            if (rightColumnIndex <= columns - 1) {
                drawRight(topRowIndex, rightColumnIndex, bottomRowIndex);
            }
            rightColumnIndex++;

            if (bottomRowIndex <= rows - 1) {
                drawBottom(bottomRowIndex, rightColumnIndex, leftColumnIndex);
            }
            bottomRowIndex++;

            if (leftColumnIndex >= 0) {
                drawLeft(bottomRowIndex,topRowIndex, leftColumnIndex);
            }
            leftColumnIndex--;

            currentOrbit++;
        }

    }

    function drawTop(topRowIndex, leftColumnIndex, rightColumnIndex){
        for (let i = Math.max(0, leftColumnIndex); i <= Math.min(rightColumnIndex, columns - 1); i++ ) {
            result[topRowIndex][i] = currentOrbit;
        }
    }

    function drawRight(topRowIndex, rightColumnIndex, bottomRowIndex){
        for (let i = Math.max(0, topRowIndex); i <= Math.min(bottomRowIndex, rows - 1); i++) {
            result[i][rightColumnIndex] = currentOrbit;
        }
    }

    function drawBottom(bottomRowIndex, rightColumnIndex, leftColumnIndex){
        for (let i = Math.min(rightColumnIndex, columns - 1); i >= Math.max(leftColumnIndex, 0); i--) {
            result[bottomRowIndex][i] = currentOrbit;
        }
    }

    function drawLeft(bottomRowIndex,topRowIndex, leftColumnIndex){
        for (let i = Math.min(bottomRowIndex, rows); i >= Math.max(0, topRowIndex); i--) {
            result[i][leftColumnIndex] = currentOrbit;
        }
    }


}

orbit([5, 5, 2, 2])