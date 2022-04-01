
// randomly generate 1 integer between 1 - 3
function computerPlay(){
    var arr = ['rock', 'paper', 'scissors']
    return arr[Math.floor(Math.random() * 3)];
}



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

for (n=0; n<5; n++){
    input = prompt('please enter ur choise rock/scissors/paper : ')
    b = input.toLocaleLowerCase()
    console.log('u',b)
    a = computerPlay()
    console.log('computer',a)
    playRound(a,b)
}

