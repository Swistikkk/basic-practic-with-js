var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while(isSunk == false) {
    guess = prompt("Введите координату от 0-6:");
    if(guess <0 || guess > 6 || guess == null) {
        alert("Ввеедите число от 0-6(целое)");
    }
    else {
        guesses+=1;
    }
    if(guess == location1 || guess == location2 || guess == location3) {
        alert("Попал");
        hits+=1;
    }
    else {
        alert("Промах");
    }
    if(hits == 3) {
        isSunk = true;
        alert("You sank my battleship, bro!");
    }
}
var stats = "Ты сделал " + guesses + " попыток потопить корабль," + "в итоге твоя точность составила " + (3/guesses);
alert(stats);
