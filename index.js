// generateRandomNumber is the function where the computer makes it guess
// we are using only range as our parameter
function generateRandomNumber(range) {
  const startRange = 1
  min = Math.ceil(startRange)
  max = Math.floor(range)

  const generatedNum = Math.floor(Math.random() * (max - min + 1) + min) 
  return generatedNum
}

function playGame() {
  // cookie is an object and every new gamer gets this as the starting point
  const cookie = {
    point: 0,
    stage: 1
  }
  
  const username = prompt("Enter your username: ")

  // username property is attached to the cookie object and assigned the value of the user's input
  cookie.username = username

  let range = 2
  
  while (true) {
    let userGuess = prompt("make a guess: ")
    let computerGuess = generateRandomNumber(range)

    if (Number(userGuess) === computerGuess) {
      console.log(`HURRAYY!!! YOU WON STAGE ${cookie.stage}`)
      cookie.point += 5
      cookie.stage += 1
      range += 1
    } else {
      console.log("Computer made a guess of ", computerGuess)
      console.log("GAME OVER!!!")
      break
    }
    
  }
}

playGame()