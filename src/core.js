const numberHash = new Map([
    [0, 'zero'],
    [1, 'one'],
    [2, 'two'],
]);
const cross = '✖️';
const circle = '⭕';

let matrix;
let moves;
let player = true;

function set(row, col) {

    if (moves != 0) {
        if(matrix[row][col] != undefined)
            return;

        matrix[row][col] = player ? 1 : 0;
        moves--;
        document.getElementById(translateId(row, col)).innerHTML = player ? cross : circle;

        if(check(player ? 1 : 0)) {
            moves = 0;
            alert((player ? cross : circle) + " Wins");
        }

        player = !player;
        document.getElementById('player').innerHTML = (player ? cross : circle) + " Turn";
    } else {
        alert('GAME ENDED');
    }
}

function check(value) {
    return (matrix[0][0] == value && matrix[0][1] == value && matrix[0][2] == value)
        || (matrix[1][0] == value && matrix[1][1] == value && matrix[1][2] == value)
        || (matrix[2][0] == value && matrix[2][1] == value && matrix[2][2] == value)
        || (matrix[0][0] == value && matrix[1][1] == value && matrix[2][2] == value)
        || (matrix[0][2] == value && matrix[1][1] == value && matrix[2][0] == value)
        || (matrix[0][0] == value && matrix[1][0] == value && matrix[2][0] == value)
        || (matrix[0][1] == value && matrix[1][1] == value && matrix[2][1] == value)
        || (matrix[0][2] == value && matrix[1][2] == value && matrix[2][2] == value)
}

function translateId(row, col) {
    return numberHash.get(row) + numberHash.get(col).charAt(0).toUpperCase() + numberHash.get(col).slice(1);
}

function emptyMatrix() {
    return [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ];
}

function start() {
    moves = 9;
    matrix = emptyMatrix();
    const items = document.getElementsByClassName("app-row__button");
    for(let i = 0; i < items.length; i++){
        items[i].innerHTML = '';
    }
    document.getElementById('player').innerHTML = (player ? cross : circle) + " Turn";
}

start();