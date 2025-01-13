//Example Array 
//Using type Annotation(type[])

//Adding elements through push method
let myarray:number[]=[]
myarray.push(1)
console.log(myarray)

//Adding element at the time of declaring
let myarray1:number[]=[1,2,3,4,5]
console.log(myarray1)

//Using Array<type>
let numbers:Array<number>=[1,2,3,4,5,67,]
console.log(numbers)

//mixed type of array is called tuple

let mixedArray:[string,number,boolean]=['Ganesh',38,true]
console.log(mixedArray)