
// randomly generate 1 integer between 1 - 3 to find the computer input
function computerPlay(){
    var arr = ['rock', 'paper', 'scissors']
    return arr[Math.floor(Math.random() * 3)];
}


// comparing all inputs and returnig the result
function playRound(x,y){
    if (x == 'rock' && y == 'rock' || x == 'paper' && y == 'paper' || x == 'scissors' && y == 'scissors'){
        const result1 = 'Its a tie'
        //console.log(result1)
        return result1;
    }
    else if (x == 'paper' && y == 'rock' || x == 'rock' && y == 'scissors' || x == 'scissors' && y == 'paper'){
        const result2 = 'you are a loser'
        //console.log(result2)
        return result2;
    }
    else if (x == 'paper' && y == 'scissors' || x == 'scissors' && y == 'rock' || x == 'rock' && y == 'paper'){
        const result3 = 'you are a winner'
        //console.log(result3)
        return result3;
    }
    
}



function rock(){
    b = document.querySelector('#test1').innerHTML = 'rock';
    a = computerPlay()
    document.querySelector('#test').innerHTML = a;
    //run the game function
    g = playRound(a,b);
    document.querySelector('.result').innerHTML = g;
    console.log(g)
}
 //created the paper function
function paper(){
    b = document.querySelector('#test1').innerHTML = 'paper';
    a = computerPlay()
    document.querySelector('#test').innerHTML = a;
    //run the game function
    g = playRound(a,b);
    document.querySelector('.result').innerHTML = g;
    console.log(g)
}
// cerated scissors function
function scissors(){
    b = document.querySelector('#test1').innerHTML = 'scissors';
    a = computerPlay()
    document.querySelector('#test').innerHTML = a;
    //run the game function
    g = playRound(a,b);
    document.querySelector('.result').innerHTML = g;
    console.log(g)
}

/*
//comparing the actual inputs users and computers
var count = 0;
for (n=0; n<1; n++){
    input = 'rock' //prompt('please enter ur choise rock/scissors/paper : ')
    b = input.toLocaleLowerCase()
    console.log('your choise',b)
    a = computerPlay()
    console.log('computer choise',a)

    // main function to compare input and output result
    var result = playRound(a,b)
    //console.log(result)
    if(result == 'own'){
        count ++;
        console.log('You Own');
        console.log(count)
    }
    else if(result == 'loose'){
        count --;
        console.log('You loose');
        console.log(count)
    }
    else if(result == 'tie'){
        //count ++;
        console.log('its a tie');
        console.log(count)
    }
}

/*
// rpinting the final result
console.log('your final score is :',count)
if(count <0){
    console.log('you lost')
}
else if(count >0){
    console.log('you are the winner!!')
}
else{
    console.log('its a tie')
}
*/