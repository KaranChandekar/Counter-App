// Practice JavaScript Code

// let firstBatch = 4
// let count = firstBatch
// console.log(count)

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let myAge = 18
// humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// myAge = myAge + 2
// console.log(myAge)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function countDown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countDown()
// countDown()
// countDown()

// function myAge() {
//     console.log(18)
// }
// myAge()

// let lap1 = 43
// let lap2 = 24
// let lap3 = 64

// function addLaps() {
//     let lapTime = lap1+lap2+lap3
//     console.log(lapTime)
// }
// addLaps()

// let lapsCompleted = 0
// Create a function that increments the lapsCompleted variable with one
// Run it three times
// function increamentLaps() {
//     lapsCompleted += 1
// }
// increamentLaps()
// increamentLaps()
// increamentLaps()
// console.log(lapsCompleted)

// let username = "Karan"
// let message = "You have three new notifications"
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// let name = "Karan"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// let points = "5"
// let bonusPoints = 2
// let totalPoints = points + bonusPoints
// console.log(totalPoints)







// Main code for Project 

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let saveNumber = count + " - "
    saveEl.textContent += saveNumber
    countEl.textContent = 0
    count = 0
}