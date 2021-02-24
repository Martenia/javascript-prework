/**
var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} 
else if (randomNumber == '2') {
    computerMove = 'papier';
}
else if (randomNumber == '3') {
    computerMove = 'nożyce';
}
printMessage('Mój ruch: ' + computerMove);

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
    playerMove = 'kamień';
} 
else if (playerInput == '2') {
    playerMove = 'papier';  
}
else if (playerInput == '3') {
    playerMove = 'nożyce'
}
else {
    printMessage('Nieznany ruch. Zakładam, że chodziło o "kamień".');
    playerMove = 'kamień';
}
printMessage('Twój ruch: ' + playerMove);

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
*/


var argButtonName, buttonTest, buttonRock, buttonPaper, buttonScissors;
var x = 0;
var y = 0;

/** buttonTest = document.getElementById('button-test'); */
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

    function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
      } 
    else if (argMoveId == 2) {
        return 'papier';
      }
    else if (argMoveId == 3) {
        return 'nożyce';
      }
    else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
      }
    }

    function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
      x++;      
      } 
    else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
      printMessage('Wygrywasz!');
      x++;          
      } 
    else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
      printMessage('Wygrywasz!');
      x++;         
      }  
    else if (argPlayerMove == argComputerMove){
      printMessage('Remis!');      
      }  
    else {
      printMessage('Przegrywasz :(');
      y++;    
      }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }

  playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
  printResult('Wygrane: ' + x);
  printResult('Przegrane: ' + y);
  printResult('Wygrane minus przegrane: ' + (x - y));
}

/** buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); }); */
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

