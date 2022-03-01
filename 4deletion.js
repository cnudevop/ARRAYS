//deletion of array elements
var arr = [11,32,44,66,86,30,40,21,57,82]
console.log("original arra length is", arr.length)
console.log("original array is", arr)

//delete from beging
console.log("//delete from beging")
console.log("--------------------")
deletedElement = arr.shift()                                 //it delete only one element//returns deleted element
console.log("deleted element is", deletedElement)
console.log("after deletion array is", arr)



//delete from ending
console.log("//delete from ending")
console.log("--------------------")
deletedElement2 = arr.pop()                                 //it delete only one element//returns deleted element
console.log("deleted element is", deletedElement2)
console.log("after deletion array is", arr)



//delete inbetween
console.log("//delete inbetween")
console.log("------------------")
deletedElement3 = arr.splice(4,3)                           // it delete any numner of elements And returns all as array
console.log("deleted elements are", deletedElement3)
console.log("after deletion array is", arr)


//replacing the element inbetween
console.log("//replacing inbetween")
console.log("------------------")
deletedElement4 = arr.splice(3,1,445)                           // it delete any numner of elements And returns all as array
console.log("deleted element is", deletedElement4)
console.log("after replacing array is", arr)
