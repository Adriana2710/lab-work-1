function rollDice6() {
    var die6 = document.getElementById("die6");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    die6.innerHTML = d1;
    status.innerHTML = "You rolled the dice 6 and you got the number "+d1+".";
}

function rollDice20() {
    var die20 = document.getElementById("die20");
    var status = document.getElementById("status");
    var d2 = Math.floor(Math.random() * 20) + 1;
    die20.innerHTML = d2;
    status.innerHTML = "You rolled the dice 20 and you got the number "+d2+".";
}