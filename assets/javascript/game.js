var wins = 0;
var losses = 0;
var totalscore;
var compnumber;
var crystalone;
var crystaltwo;
var crystalthree;
var crystalfour;

reset();

function reset() {
    totalscore = 0;
    compnumber = (Math.floor(Math.random() * 102) + 19);
    crystalone = (Math.floor(Math.random() * 12) + 1);
    crystaltwo = (Math.floor(Math.random() * 12) + 1);
    crystalthree = (Math.floor(Math.random() * 12) + 1);
    crystalfour = (Math.floor(Math.random() * 12) + 1);
    $("#objective").text("the objective is: " + compnumber)
    $('#userscore').text(totalscore);
}


$('#imagen1').click(() => {
    totalscore = totalscore + crystalone
    checkstatus();
    newscore();
});

$('#imagen2').click(() => {
    totalscore = totalscore + crystaltwo
    checkstatus();
    newscore();
});

$('#imagen3').click(() => {
    totalscore = totalscore + crystalthree
    checkstatus();
    newscore();
});

$('#imagen4').click(() => {
    totalscore = totalscore + crystalfour
    checkstatus();
    newscore();
});

$('#restart').click(() => {
    wins = 0;
    losses = 0;
    totalscore = 0;
    checkstatus();
    newscore();
    reset();
});

function checkstatus() {
    if (totalscore === compnumber) {
        wins++;
        alert("you got your numbers, YOU WON!");
        reset();
    }

    if (totalscore > compnumber) {
        losses++;
        alert("you are bad at math, YOU LOST!");
        reset();
    }
    $('#wins').text(wins);
    $('#losses').text(losses);
};

function newscore() {
    $('#userscore').text(totalscore);
}