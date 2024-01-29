let y = Math.floor(Math.random() * 50 + 1);
let guess = 0;
let maxAttempts = 5;

document.getElementById("resetbutton").onclick= function(){
    y = Math.floor(Math.random() * 50 + 1);
    guess = 0;
    maxAttempts = 5;

}
document.getElementById("submitguess").onclick = function () {
    let x = document.getElementById("guessField").value;
    if (!(x > 0 &&  x<=50) ){
        document.getElementById('gors').innerHTML = `ERROR, enter a valid input!`;
    }else
    {
        if (x == y) {
        document.getElementById('gors').innerHTML = `CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN ${guess} GUESSES!!`;
    } else if (x > y) {
        guess++;
        document.getElementById('gors').innerHTML = `Try a smaller number!`;
    } else {
        guess++;
        document.getElementById('gors').innerHTML = `Try a greater number!`;
    }
    if (guess < maxAttempts) {
        const attemptsLeft = maxAttempts - guess ; 
        document.getElementById('message').innerHTML = `You have ${attemptsLeft} attempts left!`;
    }

    if (guess > maxAttempts) {
        document.getElementById('message').innerHTML = `Too many attempts, the number was ${y}!`;
    }
}

}
function myfunct()  {
    var button = document.querySelector('.imgButton');
    var element= document.body;
    element.classList.toggle("dark-mode");
    button.style.backgroundImage === 'url("light.svg")'
    if (button.style.backgroundImage === 'url("dark.svg")') {

        button.style.backgroundImage = 'url("light.svg")';
    } else {
        button.style.backgroundImage = 'url("dark.svg")';
    }
}
