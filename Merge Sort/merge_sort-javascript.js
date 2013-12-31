function mergeLists(left, right){
    var result = [];
    var i = 0;
    var j = 0;
    
    while (i < left.length && j < right.length){
        if (left[i] < right[j]){
            result.push(left[i]);
            i += 1;
        }else{
            result.push(right[j]);
            j += 1;
        }
    }
    
    for (i; i < left.length; i++){
        result.push(left[i]);
    }
    
    for (j; j < right.length; j++){
        result.push(right[j]);
    }
    
    return result
}

function mergeSort(l){
    run.ctr += 1;
    
    if (l.length <= 1){
        return l;
    }
    
    var left = mergeSort(l.slice(0, Math.floor(l.length/2)));
    var right = mergeSort(l.slice(Math.floor(l.length/2)));
    
    return mergeLists(left, right);
}

//Take things from text box and output
function run(text){
    run.ctr = 0;
    var outstring = "";
    numbers =[];
    var rest = text.split(' ');
    for(var i=0;i<rest.length;i++){
          numbers.push(parseInt(rest[i]));
    }
    outstring += "Sorted Numbers: " + String(mergeSort(numbers)) ;
    outstring += "<br></br>Recursions : " + String(run.ctr);
    return outstring;
}