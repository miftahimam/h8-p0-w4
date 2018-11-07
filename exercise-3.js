function cariMedian(arr) {
    
  
    var median = Math.floor(arr.length/2)
    
    if(arr.length % 2){
        return arr[median]
    }else{
        return (arr[median-1] + arr[median]) / 2
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
console.log(cariMedian([2, 4, 8, 10, 36, 20]));
console.log(cariMedian([10, 20, 30, 40, 50, 60]));