function oddEvenSort(array){
    return array.sort(function(e1,e2){
    return (Math.abs((e1)%2) - Math.abs((e2)%2))
});
}
function evenOddSort(array){
    return array.sort(function(e1,e2){
    return -(Math.abs((e1)%2) - Math.abs((e2)%2))
});
}
function oddAscentEvenDescentSort(array){
    return array.sort(function(e1,e2){ 
        let res = (Math.abs((e1)%2) - Math.abs((e2)%2));
    return (res != 0) ? res :  (Math.abs((e1)%2)) == 0 ? (e1-e2) : (e2-e1)
});
}
function getMin(array){
    return array.reduce(function(x,y){
        return x>y ? y : x;
    });
}
function getMax(array){
    return array.reduce(function(x,y){
        return x>y ? x : y;
    });
}
function getAverage(array){
    const a = array.reduce(function(x,y){
        return x + y;
    });
    return a / (array.length);
}
function getMinMaxAverage(array){
    const ar = array.reduce(function(ar,i){
        ar[0] = ar[0] > i ? i :ar[0];
        ar[1] = ar[1] < i ? i :ar[1];
        ar[2] +=  i;
        return ar;
    }, [array[0],array[0],0]);
    ar[2] = ar[2] / (array.length);
    return ar;
}

const arr1 = [1,3,5,-72,4,9,0,6,-1000,-999]
console.log(`result of function sorting ${arr1} => ${oddEvenSort(arr1)}`);
console.log(`result of function sorting ${arr1} => ${evenOddSort(arr1)}`);
console.log(`result of oddAscentEvenDescentSort function sorting ${arr1} => ${oddAscentEvenDescentSort(arr1)}`);
console.log(`result of function getMin ${arr1} => ${getMin(arr1)}`);
console.log(`result of function getMax ${arr1} => ${getMax(arr1)}`);
console.log(`result of function getAverage ${arr1} => ${getAverage(arr1)}`);
console.log(`result of function getMinMaxAverage ${arr1} => ${getMinMaxAverage(arr1)}`);