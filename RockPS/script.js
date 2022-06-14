function computerPlay() {
    let plays = ['Rock', 'Paper', 'Scissors', 'Overshot'];
    let hand = Math.floor(Math.random() * 3);
    return plays[hand];
}

function play(playerSelection, computerSelection) {
    let player = playerSelection;
    let comp = computerSelection;
    player = player.toLowerCase();
    comp = comp.toLowerCase();
    //console.log(comp);
    return result(player,comp);
}

function result(player, comp) {
    let dic = { 'rock' : ['scissors', 'rock', 'paper'],
                'paper' : ['rock', 'paper', 'scissors'],
                'scissors' : ['paper', 'scissors', 'rock']};
    let judge = dic[player];
    //console.log(judge);
    let val = judge.findIndex(ele => ele == player) + judge.findIndex(ele => ele == comp);
    //console.log(val);
    //console.log(judge.findIndex(ele => ele == player));
    //console.log(judge.findIndex(ele => ele == comp));
    switch(val) {
        case 1 :
            return {'result' : `You Win! ${capFirstLetter(player)} beats ${capFirstLetter(comp)}`,
                    'score' : 1};
            break;
        case 2 :
            return {'result' : `Draw! Both of you used ${capFirstLetter(player)}`,
                    'score' : -1};
            break;
        case 3 :
            return {'result' : `You Lose! ${capFirstLetter(comp)} beats ${capFirstLetter(player)}`,
                    'score' : 0};
            break;
        default:
            return {'result' : 'There seems to be an error',
                    'score' : -1};
            break;
    }
}

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
/**
function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Choose, Rock Paper or Scissors?');
        let compChoice = computerPlay();
        let result = play(playerChoice, compChoice);
        console.log(result['result']);
        if (result['score'] == 1) {
            playerScore++;
        } else if (result['score'] == 0) {
            compScore++;
        } else {
            playerScore++;
            compScore++;
        }
    }
    if (playerScore > compScore) {
        return `You won! ${playerScore} vs ${compScore}`;
    } else if (playerScore < compScore) {
        return `You lost! ${playerScore} vs ${compScore}`;
    } else {
        return `Draw! ${playerScore} vs ${compScore}`;
    }
}
*/

//const playerSelection = 'paper';
//const computerSelection = computerPlay();



//console.log(play(playerSelection,computerSelection));
let playerScore = 0;
let comScore = 0;
//console.log(game());

const winScreen = document.querySelector('#winText');
const playerDis = document.querySelector('#playerScore');
const comDis = document.querySelector('#comScore');

const selections = document.querySelectorAll('.btn');
const display = document.querySelector('#display');

selections.forEach((select) => {
    select.addEventListener('click', () => {
        const result = play(select.id, computerPlay());
        const toPrint = document.createElement('div');
        toPrint.textContent = result['result'];
        toPrint.setAttribute('id','result');
        display.appendChild(toPrint);
        switch (result['score']) {
            case -1:
                playerScore++;
                comScore++;
                playerDis.textContent = playerScore;
                comDis.textContent = comScore;
                break;
            case 0:
                comScore++;
                comDis.textContent = comScore;
                break;
            case 1:
                playerScore++;
                playerDis.textContent = playerScore;
                break;
        }
        checkWinner();
    })
})

function checkWinner() {
    if (playerScore === 5 || comScore === 5) {
        if (playerScore > comScore) {
            winScreen.textContent = 'You Win!';
        } else if (playerScore < comScore) {
            winScreen.textContent = 'You lost...';
        } else {
            winScreen.textContent = 'Draw';
        }
        selections.forEach((button) => {
            button.parentElement.removeChild(button);
        })
    }
}

