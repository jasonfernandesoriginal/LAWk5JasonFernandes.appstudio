let quoteString = ("Failure is simply the opportunity to begin again this time more intelligently.")
let quote = quoteString.toUpperCase()

console.log(`Upper case string is: ${quote}`)
let authorString = "- Henry Ford"

let completeString = quoteString.concat(authorString)
console.log(`Concatenated string is: ${completeString}`)

let found = (completeString.includes("Henry")) 
if (found = "true") {
console.log("Henry was in completeString.")
} else { 
    console.log("Henry was NOT in completeString")
}