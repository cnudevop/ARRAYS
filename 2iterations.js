var arr = [22,121,'string element',38,55,26]
console.log("original array is arr", arr)

//leements by using index
console.log("//aray printing element by element by using index")
console.log("---------------------------------")
console.log("arr[0]", arr[0])
console.log("arr[2]", arr[2])
console.log("arr[3]", arr[3])  


// by using loops
// for loop
console.log("//array elements by using for loop")
console.log("---------------------------------")
for(var index=0; index < arr.length; index++){
console.log("arr[", index, "]", arr[index])
}

//while loop
console.log("//array elements by using while loop")
console.log("---------------------------------")
var index=0
while (index < arr.length){
console.log("arr[",index, "]", arr[index])
index++

}
//for of loop               // it gives only elements not index-value
console.log("//for of loop")
console.log("---------------")
for (var v of arr)
console.log(v)