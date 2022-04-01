function computerPlay(){
    const arr = ['rock', 'paper', 'scissors']
    
    //console.log("R-P-S")
    let i = Math.floor(Math.random() * 3);
    //console.log(i)
    console.log(arr[i])
}

computerPlay()