//? Basic Types
//? •Primitive types (number, string, boolean)
//? •Arrays
//? •Tuples (Fixed Value of an array in place)
//? •Enums
//? •Any, Unknown, Void, Null, Undefined, Never

// var a = [1,2,3,4,5]
// var b = [...a]
// b.pop()
// console.log(b)
// console.log(a)
// let c = 12
// c = 'boss'

// let arr: number[] = [1,2,3]

//? Tuples
// let arr: [string, number] = ["boss", 22]

//? Enum / Enumerations
// enum userRoles {
//   Admin = "admin",
//   Guest = "guest",
//   Super_Admin = "super_admin"
// }

// userRoles.Admin

// enum StatusCode {
//   Abandoned = "abandoned status code 500",
//   NotFound = "not found status code 404"
// }

// StatusCode.NotFound

//? any and unknown
// let a: unknown;

// a = 22

// a = "boss"

// if(typeof a === "string")
// a.toUpperCase()


//? void in function

// function abcd(): void {
//   console.log("object");
// }

//? Union
// let a: string | number

// a = "boss"
// a = null
// a = 12
// a = true

//? Never 

// function abcd(): never {
//   while(true)
// }

// abcd()
// console.log("object")


//? Type Inference
//? Understanding type inference
//? Type annotations

let a: number | string = 12
a = "boss"

//? Type annotations in a functions
function abcd(a: number, b: string): void {}