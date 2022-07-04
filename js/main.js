

//  const mydiv = document.getElementById('demo')
//  const button = document.querySelector('button')
//  button.onclick = function() {
//     mydiv.innerText = 'hello'

//  }

//  function calculation() {
//           const age = parseInt(prompt('enter your age'))
//         return 2020 - age;
//      }





let score = 20
let number = Math.trunc( Math.random() * 20)
let highscore = 0
document.querySelector('.check') .addEventListener('click', function() 
{

    const guess = Number(document.querySelector('.guess').value)
   
    if(!guess) {
        document.querySelector('.message') .textContent = 'No number!'
    }
    else if(guess === number) {
        document.querySelector('.message') .textContent = 'Correct number!'
        document.querySelector('body') .style.backgroundColor = 'green'
        document.querySelector('.number') .textContent = number
        if(score > highscore) {
            highscore = score
            document.querySelector('.highscore') .textContent = highscore
           }
    }
    else if(guess !== number) {
        if(score > 0) {
           document.querySelector('.message') .textContent = guess > number ? 'Too high!': 'Too low!'
        score--
        document.querySelector('.score') .textContent = score   
        }
        else {
            document.querySelector('.message') .textContent = 'Game over'
        }
      
    }
   }
)
document.querySelector('.again').addEventListener('click', function() {
    let score = 20
    let number = Math.trunc( Math.random() * 20)
    document.querySelector('.message') .textContent = 'Start guessing...'
    document.querySelector('.score') .textContent = score 
    document.querySelector('.guess').value = ''
    document.querySelector('body') .style.backgroundColor = 'black'
})

