// 1. For Loops

//This is the long way in order to display the muntiplication table
//document.write("<p> 2 x 1 = 2</p>")
//document.write("<p> 2 x 2 = 4</p>")
// document.write("<p> 2 x 3 = 6</p>")
// document.write("<p> 2 x 4 = 8</p>")
// document.write("<p> 2 x 5 = 10</p>")
// document.write("<p> 2 x 6 = 12</p>")
// document.write("<p> 2 x 7 = 14</p>")
// document.write("<p> 2 x 8 = 16</p>")
// document.write("<p> 2 x 9 = 18</p>")
// document.write("<p> 2 x 10 = 20</p>")

// This is the short version 

const NUM = 2
for (let i=0; i<=10; i++){
    document.write(`<p> ${NUM} x ${i} = ${i*NUM} </p>`)
}

// Anatomy of a loop
// for (start ; condition ; incrament){
//      i = 1     i < 10      i++
//}


