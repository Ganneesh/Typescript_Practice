//add the elements to array

let names:string[]=[]
names.push('Prathmesh')
console.log(names)
//add multiple elements 
names.push('Prathmesh','Pranjal','Ganesh')
console.log(names)

//remove element from the end of the array 'reoved last element'

names.pop()
console.log(names)
//remove element from the begining  of the array 'removed first element'
names.shift()
console.log(names)
//Add element from the beginging

names.unshift('Dipali')
console.log(names)

//filter

let namelist:string[]=['ganesh','mahesh']

let filterdemo=namelist.filter(str=>str==='ganesh')
console.log(filterdemo)


//reduce

let reducedemo:number[]=[1,2,3,4,5]
let ans=reducedemo.reduce((acc,num)=>acc+num,0)
console.log("Addition is :- "+ans)

//map
let mapdemo:string[]=['ganesh','mahesh','sadhana']

let ans1=mapdemo.map(str=>str.toUpperCase())

console.log(ans1)