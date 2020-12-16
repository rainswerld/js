let age
console.log(age)

const guessAge = function (num) {
  if (num === undefined) {
    console.log('Please provide an age argument!')
    return false
  } else {
    console.log('Your age is', num)
    if (num > 90) {
      console.log('What a rich life you have led!')
    } else if (num < 10) {
      console.log('You should be playing outside!')
    } else {
      console.log('I should have made this age range smaller!')
    }
  }
}

guessAge(age)
