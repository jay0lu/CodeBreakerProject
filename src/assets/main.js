let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer === '' || attempt ===''){
        setHiddenFields();
    }

    if(validateInput(input.value)) {
        attempt = attempt + 1;
    } else {
        return false;
    }
}

//implement new functions here
function setHiddenFields() {
    var randomVar = Math.random()*10000;
    var answerNum = Math.floor(randomVar);
    var answer = answerNum.toString();
    while(answer.length < 4) {
        answer = '0' + answer;
    }

    var attempt = 0;
}

function setMessage(message) {
    document.getElementById(message).innerHTML = message;
}

function validateInput(data) {
    if(data.length === 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}