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
    let randomVar = Math.random()*10000;
    let answerNum = Math.floor(randomVar);
    answer = answerNum.toString();
    while(answer.length < 4) {
        answer = '0' + answer;
    }

    let attempt = 0;
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

function getResults(input) {
    let htmlStr1 = '<div class="row"><span class="col-md-6">';
    let htmlStr2 = '</span> <div class="col-md-6">';
    let correctPosition = '<span class="glyphicon glyphicon-ok"></span>';
    let inAnswer = '<span class="glyphicon glyphicon-transfer"></span>';
    let notInAnswer = '<span class="glyphicon glyphicon-remove"></span>';
    for(i in input){

    }
    
    outPut = '';
    document.getElementById(results).innerHTML = outPut;
}