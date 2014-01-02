// Sudoku Solver Project
function isPossibleRow(sudoku, row, number) {
    // This isPossibleRow() function returns true if the 'number'
    // argument is NOT already in the row of the 'sudoku' indexed
    // by the 'row' argument . This would mean that adding the
    // 'number' to the 'row' for this 'sudoku' is a potentially legal move.
    // (The 'sudoku' argument is a 9x9 two-dimensional array.)
    // This function should return false if the number already exists in
    // the specified row.
    
    for (var i = 0; i < sudoku[row].length; i++){
        if (sudoku[row][i] === number){
            return false;
        }
    }
    
    return true;
    
}

function isPossibleColumn(sudoku, col, number) {
    // This is a lot like isPossibleRow() above: it returns true if the 'number'
    // argument is NOT already in the column of the 'sudoku' indexed
    // by the 'col' argument . This would mean that adding the
    // 'number' to the 'col' for this 'sudoku' is a potentially legal move.
    // This function should return false if the number already exists in
    // the specified column.
    for (var i = 0; i < sudoku.length; i++){
        if (sudoku[i][col] === number){
            return false;
        }
    }
    
    return true;
    
}

function isPossibleBlock(sudoku, block, number) {
    // A 'block' is a 3x3 area of the 'sudoku' in which numbers 1 to 9
    // must all be present. There are 9 of these zones in the Sudoku.
    // This method will return true if the 'number' argument is not already
    // in the block of the 'sudoku' specified by the 'block' argument --
    // again indicating a potentially legal move. (The 'sudoku' argument is,
    // as always, a 9x9 two-dimensional array.)
    // This method should return false if the 'number' already exists in the
    // specified 'block'.
    // The blocks are indexed from 0 to 8. The top row blocks being 0 to 2,
    // the middle row blocks being from 3 to 5 and the bottom row being 6 to 8.
    // Btw, the getCellBlock() function below might be helpful here.
    
    var top = getTopLeftCell(block);
    
    for (var x = top[0]; x < top[0] + 3; x++){
        for (var y = top[1]; y < top[1] +3; y++){
            if (sudoku[x][y] === number){
                return false;
            }
        }
    }
    
    return true;
    
}

function isPossibleNumber(sudoku, row, col, number) {
    // Now you will start using of the other methods you've written above.
    // This method accepts a 'sudoku' puzzle, a 'row' and a 'col' (column), and a
    // possible 'number' to move into that row/column position.
    // Such a move would be possible if: 1) isPossibleRow() returns true for
    // that row, and 2) ifPossibleColumn() returns true for that column, and
    // 3) isPossibleBlock() returns true for the block that sudoku[row][col] is
    // in. Use the getCellBlock() function below to find which block this is. If all of
    // these functions return true, then isPossibleNumber() should return true.
    // If any of the those functions returns false, then ifPossibleNumber() should
    // return false.
    
    var block = getCellBlock(row, col);
    
    if (isPossibleRow(sudoku, row, number) && isPossibleColumn(sudoku, col, number) &&
        isPossibleBlock(sudoku, block, number)){
            return true;
        }
    
    return false;
}

function isCorrectRow(sudoku, row) {
    // This method should return true if all the numbers from 1 to 9 are
    // present in the row indexed by the 'row' argument in the 'sudoku'
    // puzzle. It should return false if the row is incomplete or has duplicates.
    // Note that the "empty" rows will actually contain the value 0.
    // 1) Start off by making a *copy* of the row.
    // 2) Then sort the new array that you have made so that the
    // numbers run in ascending order.
    // 3) You should then be able to run through this sorted array and
    // easily determine if all the required numbers are there.
    
    var row2 = new Array();
    
    for (var i = 0; i < 9; i++) {
        row2.push(sudoku[row][i]);
    }
     
    row2.sort(function(a, b) {return a - b});
    
    for (var i = 0; i < 9; i++) {
        if (row2[i] != i+1){
            return false;
        }
    }
    
    return true;
}

function isCorrectColumn(sudoku, col) {
    // This method should return true if all the numbers from 1 to 9
    // are present in the column indexed by the 'col' argument in the
    // 'sudoku' puzzle. It should return false if the column is incomplete
    // or has duplicates.
    // This method is analogous to the isCorrectRow() method above.
    
    var col2 = new Array();
    
    for (var i = 0; i < 9; i++){
        col2.push(sudoku[i][col]);
    }
    
    col2.sort(function(a, b) {return a - b});
    
    for (var i = 0; i < 9; i++){
        if (col2[i] != i+1){
            return false;
        }
    
    }
    
    return true;
}

function isCorrectBlock(sudoku, block) {
    // This function is very similar to the previous two above except
    // that you will again have to figure out how to index all the elements
    // in the 'sudoku' array for the block specified by the 'block' argument.
    // This function should return true if all the numbers from 1 to 9 are
    // in the block. It should return false if the block is incomplete or
    // contains duplicates.
    
    var top = getTopLeftCell(block);
    block = new Array();
    
    for (var x = top[0]; x < top[0] + 3; x++){
        for (var y = top[1]; y < top[1] +3; y++){
            block.push(sudoku[x][y]);
        }
    }

    block.sort(function(a, b) {return a - b});
    
    for (var i = 0; i < 9; i++){
        if (block[i] != i+1){
            return false;
        }
    }
    
    return true;
}

function getTopLeftCell(block){
    y = Math.floor(block/3) * 3
    x = (block % 3) * 3
    return [x, y]
}

function isSolved(sudoku) {
    // A sudoku will be solved if all its rows, columns and blocks are correct.
    // Use a combination of the previous three functions -- isCorrectRow(),
    // isCorrectColumn(), and isCorrectBlock() -- to determine if the 'sudoku'
    // is solved and return true if this is the case. If the sudoku is not solved,
    // you should return false.
    
    for (var i = 0; i < 9; i++){
        if (!(isCorrectRow(sudoku, i) && 
             isCorrectColumn(sudoku, i) &&
             isCorrectBlock(sudoku, i))) {
                return false;
            }
    }
    
    return true;
    
}

/***********************************************************
	DO NOT CHANGE THIS FUNCTION!

	It is provided for your convenience to be used in the 
	isPossibleNumber() function.
***********************************************************/
function getCellBlock(row,col) {
	var block_row = Math.floor(row/3);
	var block_col = Math.floor(col/3);
	var block = block_row*3+block_col;
	return block;
}