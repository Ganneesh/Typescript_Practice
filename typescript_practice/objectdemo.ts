//Creation of Type checking object

const cars:{name:string,milege:number,price:number}={
    name: "Huyndai",
    milege: 13,
    price: 170000
}

console.log(cars.name +" "+cars.milege+" "+cars.price)

//without type checking 


const cars1={
    name: "Honda",
    milege: 13,
    price: 110000
}

console.log(cars1.name +" "+cars1.milege+" "+cars1.price)

//Explicit Defining object types

//Using Interface

interface Person1
{
    names:string
    age:number
}

const person1:Person1={

    names:'Ganesh',
    age:38

}

console.log(person1.names+" "+person1.age)

//type
type Person2=
{
    names:string
    age:number
}

const person2:Person2={

    names:'Mahesh',
    age:33

}

console.log(person2.names+" "+person2.age)