function spiralMatrix(rows, columns) {
    let elementsCount = rows * columns;
    let currentElement = 1;

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
        return result;
    }

    let topRowIndex = 0;
    let leftColumnIndex = 0;
    let rightColumnIndex = columns -  1;
    let bottomRowIndex = rows - 1;

    while (currentElement <= elementsCount) {
        drawCircle();
    }

    function drawCircle(){
        drawTop(topRowIndex, leftColumnIndex, rightColumnIndex);
        topRowIndex++;

        drawRight(topRowIndex, rightColumnIndex, bottomRowIndex);
        rightColumnIndex--;

        drawBottom(bottomRowIndex, rightColumnIndex, leftColumnIndex);
        bottomRowIndex--;

        drawLeft(bottomRowIndex,topRowIndex, leftColumnIndex);
        leftColumnIndex++;

    }

    function drawTop(topRowIndex, leftColumnIndex, rightColumnIndex){
       let row = result[topRowIndex];

        for (let i = leftColumnIndex; i <= rightColumnIndex; i++ ) {

            row[i] = currentElement;
            currentElement++;
            if (currentElement === elementsCount + 1) {
                break;
            }
        }
        result[topRowIndex] = row;
    }

    function drawRight(topRowIndex, rightColumnIndex, bottomRowIndex){
        for (let i = topRowIndex; i <= bottomRowIndex; i++) {
            result[i][rightColumnIndex] = currentElement;
            currentElement++;
            if (currentElement === elementsCount + 1) {
                break;
            }
        }
    }

    function drawBottom(bottomRowIndex, rightColumnIndex, leftColumnIndex){
        for (let i = rightColumnIndex; i >= leftColumnIndex; i--) {
            result[bottomRowIndex][i] = currentElement;
            currentElement++;
            if (currentElement === elementsCount + 1) {
                break;
            }
        }
    }

    function drawLeft(bottomRowIndex,topRowIndex, leftColumnIndex){
        for (let i = bottomRowIndex; i >= topRowIndex; i--) {
            result[i][leftColumnIndex] = currentElement;
            currentElement++;
            if (currentElement === elementsCount + 1) {
                break;
            }
        }
    }


    for (let i = 0; i < result.length; i++) {
        let resultRow = result[i];
        console.log(resultRow.join(' '));
    }
}

spiralMatrix(5, 5)