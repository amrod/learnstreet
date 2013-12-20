// Tic Tac Toe game functions
function checkRows(array) {
    // array contains a 3x3 matrix representing the Tic Tac Toe board, indexed
    // from 0 to 8 going from left to right, top to bottom.
    // Check if a row is equal (i.e. 0 = 1 = 2, 3 = 4 = 5, or 6 = 7 = 8), which
    // represents a player checking off all boxes in a single row.
    // Return 0 if no rows are filled. Otherwise return the value of the cells
    // where a row matches.
    // Example: if Array = [0, 0, 0, 1, 1, 2, 2, 2, 2], 2,2,2 are equal, so return 2.
    
    for (var j = 0; j < 3; j += 3){
        var m = [];
        m[0] = m[1] = m[2] = 0;

        for (var i = j; i < array.length; i++){
            m[array[i]] += 1;
            if (m[array[i]] == 3 && array[i] != 0){
                return array[i];
            }
        }
    
    }
    return 0;
}
    
    
    


function checkColumns(array) {
    // array contains a 3x3 matrix representing the Tic Tac Toe board, indexed
    // from 0 to 8 going from left to right, top to bottom.
    // Check if a column is equal (i.e. 0 = 3 = 6, 1 = 4 = 7, or 2 = 5 = 8), which
    // represents a player checking off all boxes in a column.
    // Return 0 if no columns are filled. Otherwise return the value of the cells
    // where a column matches.
    // Example: if Array = [0, 2, 1, 0, 2, 1, 2, 0, 1], cells 2=4=7, so return their value: 1.
    // Note: here we're using 0 = unused cell, 1 = X, 2 = O
    
    for (var j = 0; j < 3; j++){
        var m = [];
        m[0] = m[1] = m[2] = 0;
    
        for (var i = j; i < array.length; i += 3){
            m[array[i]] += 1;
            if (m[array[i]] == 3 && array[i] != 0){
                return array[i];
            }
        }
    
    }
    return 0;
    
}

function checkDiagonals(array){
    // array contains a 3x3 matrix representing the Tic Tac Toe board, indexed
    // from 0 to 8 going from left to right, top to bottom.
    // Check if a diagonal is equal (i.e. 0 = 4 = 8 or 2 = 4 = 6), which
    // represents a player checking off all boxes in a diagonal.
    // Return 0 if no diagonals are filled. Otherwise return the value of the cells
    // where a diagonal matches.
    // Example: if Array = [2, 1, 0, 1, 2, 0, 1, 0, 2], cells 0=4=8, so return their value: 2.
    // Note: here we're using 0 = unused cell, 1 = X, 2 = O
    
    if (array[0] === array[4] && array[0] === array[8]){
        return array[0];
    }else if (array[2] === array[4] && array[2] === array[6]){
        return array[2];
    }else{
        return 0;
    }
    
}

function getFirstEmptyMove(array) {
    /* Get first value in the array that is 0 (meaning: unused)
     * Array goes from 0-8
     */
     
    for (var i = 0; i < array.length; i++){
        if (array[i] === 0){
            return i;
        }
    }
    return -1;
    
}
