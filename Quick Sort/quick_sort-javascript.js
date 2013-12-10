function quickSort(array, left, right) {
    run.ctr += 1;
    if(array.length <= 1){
        return array
    }
    
    var pivot = array[0]
    var lesser = []
    var greater =[]
    
    for (var i = 1; i < array.length; i++){
        if (array[i] < pivot){
            lesser.push(array[i])
        }else{
            greater.push(array[i])
        }
    }
    
    console.log("Run: " + run.ctr)
    console.log("Lesser: " + lesser)
    console.log("Greater: " + greater)
    
    lesser = quickSort(lesser, 0, lesser.length-1)
    greater = quickSort(greater, 0, greater.length-1)
    return lesser.concat(pivot, greater)
    
  }
  
function swap(array, i, j)
     { 
      var t = array[i];
      array[i] = array[j];
      array[j] = t
    }

function run(array) {
    run.ctr = 0;
    arr = quickSort(array, 0, array.length-1);
    return arr;
}
