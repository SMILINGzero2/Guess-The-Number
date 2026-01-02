let maxNum = 100;
let minNum = 1;
let randNum;
randNum = Math.floor(Math.random()*(maxNum - minNum +1)) + minNum;
let count = 0;

document.getElementById("submitBtn").onclick = function(){
    const guess = Number(document.getElementById("guessBox").value);
    

    if(isNaN(guess)){
        document.getElementById("result").textContent = "Please Enter a Valid Number !";
    }
    else if( guess > randNum){
        document.getElementById("result").textContent = "Your Guess is High 📈";
    }
    else if(guess < randNum){
        document.getElementById("result").textContent = "Your Guess is Low 📉";
    }
    else if( guess == randNum){
        document.getElementById("result").textContent = "🎊 You Guessed the Number Correctly , YOU WIN 🎉🎊";
    }
    else console.log("ERROR!!");
    count++;
    document.getElementById("numOfTries").textContent = `Number of Tries : ${count}`;
    console.log(randNum);
}