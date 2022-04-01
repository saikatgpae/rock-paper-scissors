function computerPlay(){
    const arr = ['rock', 'paper', 'scissors']
    let i = Math.floor(Math.random() * 3);
    return arr[i];
}

let a = computerPlay()
console.log(a)

function playRound(x,y){
    if (x == 'rock' && y == 'rock'){
        console.log('its a tie')
    }
    else if (x == 'paper' && y == 'rock'){
        console.log('you loose!')
    }
}
b = 'rock'
playRound(a,b)
