
var arr = ['rock', 'paper', 'scissors']
function computerPlay(){
    let i = Math.floor(Math.random() * 3);
    
    return arr[i];
}

let a = computerPlay()
console.log('computer',a)

function playRound(x,y){
    if (x == 'rock' && y == 'rock' || x == 'paper' && y == 'paper' || x == 'scissors' && y == 'scissors'){
        console.log('its a tie')
    }
    else if (x == 'paper' && y == 'rock' || x == 'rock' && y == 'scissors' || x == 'scissors' && y == 'paper'){
        console.log('you loose!')
    }
    else if (x == 'paper' && y == 'scissors' || x == 'scissors' && y == 'rock' || x == 'rock' && y == 'paper'){
        console.log('you own')
    }
    
}

b = arr[Math.floor(Math.random() * 3)]
console.log('u',b)
playRound(a,b)
