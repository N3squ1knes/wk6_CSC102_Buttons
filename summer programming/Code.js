/**function blastoffTimerV1(){
    console.log("blastoffTimerV1() Started");
    var countdownTimer = 50;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;

    }, 5000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;

    }, 10000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;

    }, 15000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;

    }, 20000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;

    }, 25000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;

    }, 30000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;

    }, 35000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;

    }, 40000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;

    }, 45000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = "Blast off!!";

    }, 50000)
} **/

//these are defined outside of the function in order to help the program track the losses, wins, or ties.
var wins = 0;
var loses = 0;
var ties = 0;
//This is a function used to create the craps game.
function playCraps(){
    console.log("playCraps() started");
    //This console log tests if the function works when the button is pressed
    var die1;
    var die2;
    //these two variables are dice numbers.

    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    //these help define what is stored in the dice

    //the console logs and innerHTML help show what you got by the RNG
    console.log("Die 1  = " + die1)
    document.getElementById("dieRes1").innerHTML = die1;
    console.log("Die 2  = " + die2)
    document.getElementById("dieRes2").innerHTML = die2;
    //create sum from die1 and die2
    var sum = die1 + die2;
    //see if sum = 7 or 11

    //the if, else if, and else function help tell the user if the won, lost, or have tied at the game.
    if(sum == 7 || sum == 11){
        document.getElementById("crapsRes").innerHTML = "Craps, You lose!!";
        loses++;
        document.getElementById("losRes").innerHTML = loses;
        console.log("Craps you lose");
    }
    else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapsRes").innerHTML = "Huzzah, you win!!";
        wins++;
        document.getElementById("winRes").innerHTML = wins;
        console.log("Huzzah, you win!!");
    }
    else {
        document.getElementById("crapsRes").innerHTML = "You did not win or lose. Try Again";
        ties++;
        document.getElementById("tieRes").innerHTML = ties;
        console.log("You did not lose or win. Try again");
    }
    
}

//this is a much more convinient way of using a countdown with the usage of loops
function countdownV1(){
    //variables
    var countdownTimer = 50;
    var halfTimer = countdownTimer / 2;
    var countdownDelay = 5000;
    var countdownChange = 5;

    //loop
    for(var i = 0; i <= 10; i++)
        setTimeout(function(){
            console.log(countdownTimer)
            if(countdownTimer == 0){
                document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
            } else if(countdownTimer < halfTimer){
                document.getElementById("countdownDisplay").innerHTML = "Warning, less than 1/2 way to launch, time left = " + countdownTimer;
            } else {
                document.getElementById("countdownDisplay").innerHTML = countdownTimer;
            }
            countdownTimer = countdownTimer - countdownChange;
        }, countdownDelay * i)
}

function start(){
    console.log("start() function started");
    document.getElementById("startbutt").disabled = true;
    document.getElementById("stopbutt").disabled = false;
}

function stop(){
    console.log("stop() function started");
    document.getElementById("stopbutt").disabled = true;
    document.getElementById("startbutt").disabled = false;
}