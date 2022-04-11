
// randomly generate 1 integer between 1 - 3 to find the computer input
function computerPlay(){
    var arr = ['rock', 'paper', 'scissors']
    return arr[Math.floor(Math.random() * 3)];
}

// intializing the counter into 0 and final result as 0
var counter = 0;
var final_result = 0;

// comparing all inputs and returnig the result
function playRound(x,y){
    if (x == 'rock' && y == 'rock' || x == 'paper' && y == 'paper' || x == 'scissors' && y == 'scissors'){
        const result1 = 'tie'
        //console.log(result1)
        return result1;
    }
    else if (x == 'paper' && y == 'rock' || x == 'rock' && y == 'scissors' || x == 'scissors' && y == 'paper'){
        const result2 = 'loser'
        //console.log(result2)
        return result2;
    }
    else if (x == 'paper' && y == 'scissors' || x == 'scissors' && y == 'rock' || x == 'rock' && y == 'paper'){
        const result3 = 'winner'
        //console.log(result3)
        final_result ++;
        return result3;
    }
    
}



function rock(){
    if(counter == 0){
        document.querySelector('.final-result').innerHTML = '';
        document.querySelector('.final-result-text').innerHTML = '';    
    }
    counter ++;
    document.querySelector('.counter').innerHTML = counter;
    b = document.querySelector('#test1').innerHTML = 'rock';
    a = computerPlay()
    document.querySelector('#test').innerHTML = a;
    //run the game function
    g = playRound(a,b);
    document.querySelector('.result').innerHTML = g;
    document.querySelector('.final-result').innerHTML = final_result;
    if(counter == 5){
        if(final_result >= 3){
            document.querySelector('.final-result').innerHTML = final_result;
            document.querySelector('.final-result-text').innerHTML = 'You won the game';   
        }else{
            document.querySelector('.final-result').innerHTML = final_result;
            document.querySelector('.final-result-text').innerHTML = 'You lost, Try again';   
        }
        counter = 0;
        final_result = 0;
        document.querySelector('.counter').innerHTML = counter;
    }
}
 //created the paper function
function paper(){
    if(counter == 0){
        document.querySelector('.final-result').innerHTML = '';
        document.querySelector('.final-result-text').innerHTML = '';    
    }
    counter ++;
    document.querySelector('.counter').innerHTML = counter;
    b = document.querySelector('#test1').innerHTML = 'paper';
    a = computerPlay()
    document.querySelector('#test').innerHTML = a;
    //run the game function
    g = playRound(a,b);
    document.querySelector('.result').innerHTML = g;
    document.querySelector('.final-result').innerHTML = final_result;
    if(counter == 5){
        if(final_result >= 3){
            document.querySelector('.final-result-text').innerHTML = 'You won the game😍🏆';   
        }else{
            document.querySelector('.final-result-text').innerHTML = 'You lost the game, Try again😔';   
        }
        counter = 0;
        final_result = 0;
        document.querySelector('.counter').innerHTML = counter;
    }
}
// cerated scissors function
function scissors(){
    if(counter == 0){
        document.querySelector('.final-result').innerHTML = '';
        document.querySelector('.final-result-text').innerHTML = '';    
    }
    counter ++;
    document.querySelector('.counter').innerHTML = counter;
    b = document.querySelector('#test1').innerHTML = 'scissors';
    a = computerPlay()
    document.querySelector('#test').innerHTML = a;
    //run the game function
    g = playRound(a,b);
    document.querySelector('.result').innerHTML = g;
    document.querySelector('.final-result').innerHTML = final_result;
    if(counter == 5){
        if(final_result >= 3){
            document.querySelector('.final-result-text').innerHTML = 'You won the game';   
        }else{
            document.querySelector('.final-result-text').innerHTML = 'You lost the game, Try again 😔';   
        }
        counter = 0;
        final_result = 0;
        document.querySelector('.counter').innerHTML = counter;
    }
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