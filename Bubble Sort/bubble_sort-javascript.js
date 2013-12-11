function bubbleSort(n){
    var redo;
    
    do{
        redo = false;
        for (var i = 0; i < n.length - 1; i++){
            if (n[i] > n[i+1]){
                console.log(n[i]);
                console.log(n[i+1]);
                console.log('----');
                n = swap(n, i, i+1);
                redo = true;
            }
        }
    }while (redo)
    
    return n;
}

function swap(arr, j, k){
    var t = arr[j];
    arr[j] = arr[k];
    arr[k] = t;
    return arr;
}

n = [1, 9, 2, 8, 3, 7, 4, 6, 5];
console.log(bubbleSort(n))