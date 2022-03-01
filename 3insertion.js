var arr = [22,33,45,66,78,90]
console.log("original array length", arr.length) 
console.log("original array is", arr)

//for this insertion or deletion we use some methods like shift,unshift, push, pop........
//insert at begining in array
console.log("//inserting elements at begining")
console.log("---------------------------------")
var len1 = arr.unshift(1,2)                                    //arr.unshift will returns the length of the array
console.log("after insertion at begining array length is", len1) 
console.log("after insertion at begining array is", arr)

//insert at endining in array
console.log("//inserting elements at ending")
console.log("--------------------------------")
var len2 = arr.push(21, 908)                                    //arr.unshift will returns the length of the array
console.log("after insertion at ending array length is", len2)
console.log("after insertion at ending array is", arr)

//insert in between
console.log("//inserting elements in between")
console.log("---------------------------------")
arr.splice(2,0,27,99)                                    //arr.unshift will returns the length of the array
console.log("after insertion in between array length is", arr.length)
console.log("after insertion in between array is", arr)
