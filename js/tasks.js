//Task 1
let sum = 0
for ( let i = 1; i <= 100; i++)
{
    sum += i
}
console.log("Сумма (1; 100):", sum)

//Task 2
let evensum = 0
for ( let i = 1; i <= 100; i++)
{
    if (i % 2 == 0)
        {
            evensum += i
        }
}
console.log("Сумма чётных (1; 100):", evensum)

//Task 3
let oddsum = 0
for ( let i = 1; i <= 100; i++)
{
    if (i % 2 != 0)
        {
            oddsum += i
        }
}
console.log("Сумма нечётных (1; 100):", oddsum)

//Task 4
let a = 100
let b = 80
console.log(`Остаток от деления ${a} / ${b}:`,a % b)

//Task 5
let string = "Hello World!"
let reversestring = ""
for ( let i = string.length - 1; i >= 0; i--) 
{
    reversestring += string[i]
}
console.log(string, reversestring)