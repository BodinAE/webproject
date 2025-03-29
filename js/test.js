let a = 123
var b = 345
const c = 678               //const can't change
console.log(a, b, c)           
a = 654
b = 789
console.log(a, b, c)
for ( let i = 0; i < 1; i++) {
    let b = 123
    var j = 53
    console.log(j, b)
}
console.log(j, b)

let arr = []

let int = 15
let float = 1.5
let string = "20"
let bool = true
console.log("int + bool", int + bool)
console.log("int + string, string + int", int + string, " ", string + int)
console.log(Number(string) + int)
if (20 == string) {
    console.log("==")
}
if (20 === string) {
    console.log("===")
}

for (let i = 0; i < 10; i++){
    console.log(i + 1)
}
i = 0
while (i < 10) {
    console.log(i+1)
    i++
}
i = 0
do {
    console.log(i+1)
    i++
} while (i < 10)

let user = [{
    name: "John",
    age: 16,
    height: 50
},
{
    name: "John2",
    age: 19,
    height: 70 }
]

console.log(user[0].name, user[0].age, user[0].height)