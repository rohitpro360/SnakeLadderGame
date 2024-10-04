
var cnt = 0;
let clickCnt = 0;
var degrees = 360;
var playerPosition = 1;

// Dice
let rollButton = document.getElementById("roll");
rollButton.addEventListener("click", () => {
    clickCnt++;
    rollingDiceY();
    playsound();

})
function playsound() {
    var sound = document.getElementById("dicesound");
    sound.play();
}
rollButton.addEventListener("click", () => {
    cnt = Math.round(Math.random() * 5 + 1);
    setTimeout(function () { getValue(cnt); }, 500)

})



function getValue(cnt) {
    console.log(cnt);
    console.log(clickCnt)

    if (clickCnt % 2 === 0) {
        console.log("User turn");
    } else {
        console.log("Computer's turn");
    }

    switch (cnt) {
        case 1:
            createDots(cnt);
            movePlayer(cnt);
            break;
        case 2:
            createDots(cnt);
            movePlayer(cnt);
            break;
        case 3:
            createDots(cnt);
            movePlayer(cnt);
            break;
        case 4:
            createDots(cnt);
            movePlayer(cnt);
            break;
        case 5:
            createDots(cnt);
            movePlayer(cnt);
            break;
        case 6:
            createDots(cnt);
            movePlayer(cnt);
            break;
    }
}
function createDots(cnt) {
    let display = document.getElementById("roller");
    switch (cnt) {
        case 1: {

            document.getElementById("dd").innerHTML = "<i class='fa-solid fa-circle'></i>"
        }
            break;
        case 2: {

            document.getElementById("dd").innerHTML = "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp; &nbsp; "
            document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>"
        }
            break;
        case 3: {

            document.getElementById("dd").innerHTML = "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp; &nbsp; "
            document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp; &nbsp; "
            document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>"
        }

            break;
        case 4: {
            let h = document.getElementById("roller");
            h.style.gridTemplateColumns = "repeat(2,5fr)";
            h.style.gridTemplateRows = "repeat(2,5fr)";
            h.style.gap = '20px'
            document.getElementById("dd").innerHTML = "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp;   &nbsp;  "
            document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i> <br> <br> <br>"
            document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp;  &nbsp;   "
            document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>"
        }

            break;
        case 5:
            {
                let h = document.getElementById("roller");
                h.style.gridTemplateColumns = "repeat(2,5fr)";
                h.style.gridTemplateRows = "repeat(2,5fr)";
                h.style.gap = '20px'
                document.getElementById("dd").innerHTML = "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp;   &nbsp;  &nbsp;   &nbsp;"
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i> <br> <br>  "
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i> <br> <br>"
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp;   &nbsp;  &nbsp;  &nbsp;"
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>"
            }
            break;
        case 6:
            {
                let h = document.getElementById("roller");
                h.style.gridTemplateColumns = "repeat(2,5fr)";
                h.style.gridTemplateRows = "repeat(2,5fr)";
                h.style.gap = '20px'
                document.getElementById("dd").innerHTML = "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp;   &nbsp;  &nbsp;   &nbsp;"
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i> <br> <br>  "
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i> " + "&nbsp; &nbsp;  &nbsp;  &nbsp; "
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i> <br> <br>"
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>" + "&nbsp; &nbsp;  &nbsp;  &nbsp;   &nbsp;";
                document.getElementById("dd").innerHTML += "<i class='fa-solid fa-circle'></i>"
            }
            break;
    }
}
function rollingDiceX() {
    let dice = document.getElementById("roller");
    dice.style.transform = "rotateX(360deg)";
    dice.style.transition = "1s ease-in-out"


}
function rollingDiceY() {
    let dice = document.getElementById("roller");
    degrees += 360;
    dice.style.transform = `rotateZ(${degrees}deg)`;
    dice.style.transition = "1s";

}
function movePlayer(steps) {
    playerPosition += steps;
    // console.log(playerPosition);
    pushPlayer(playerPosition);

}

function pushPlayer(push) {
    let p = undefined;

    //for ladder
    if (playerPosition == 4 || playerPosition == 9 ||
        playerPosition == 20 || playerPosition == 28 ||
        playerPosition == 40 || playerPosition == 51 ||
        playerPosition == 63 || playerPosition == 71
    ) {
        switch (push) {
            case 4: {
                p = document.getElementById("player1");
                p.remove();
                push += 10;
                let d = document.getElementsByClassName(`box${push}`)[0];
                setTimeout(() => {
                    d.appendChild(p);
                    ladderUpSound();
                }, 700);
                playerPosition = push;
            }
                break;
            case 9:
                {
                    setInterval
                    p = document.getElementById("player1");
                    push += 22;
                    p.remove();
                    let d = document.getElementsByClassName(`box${push}`)[0];
                    setTimeout(() => {
                        d.appendChild(p);
                        ladderUpSound();
                    }, 700);

                    playerPosition = push;

                }
                break;
            case 20: {
                p = document.getElementById("player1");
                p.remove();
                push += 18;
                let d = document.getElementsByClassName(`box${push}`)[0];
                setTimeout(() => {
                    d.appendChild(p);
                    ladderUpSound();
                }, 700);
                playerPosition = push;
            }
                break;
            case 28: {
                p = document.getElementById("player1");
                p.remove();
                push += 56;
                let d = document.getElementsByClassName(`box${push}`)[0];
                setTimeout(() => {
                    d.appendChild(p);
                    ladderUpSound();
                }, 700);
                playerPosition = push;
            }
                break;
            case 40: {
                p = document.getElementById("player1");
                p.remove();
                push += 19;
                let d = document.getElementsByClassName(`box${push}`)[0];
                setTimeout(() => {
                    d.appendChild(p);
                    ladderUpSound();
                }, 700);
                playerPosition = push;
            }
                break;
            case 51: {
                p = document.getElementById("player1");
                p.remove();
                push += 16;
                let d = document.getElementsByClassName(`box${push}`)[0];
                setTimeout(() => {
                    d.appendChild(p);
                    ladderUpSound();
                }, 700);
                playerPosition = push;
            }
                break;
            case 63: {
                p = document.getElementById("player1");
                p.remove();
                push += 18;
                let d = document.getElementsByClassName(`box${push}`)[0];
                setTimeout(() => {
                    d.appendChild(p);
                    ladderUpSound();
                }, 700);
                playerPosition = push;
            }
                break;
            case 71:
                {
                    p = document.getElementById("player1");
                    p.remove();
                    push += 20;
                    let d = document.getElementsByClassName(`box${push}`)[0];
                    setTimeout(() => {
                        d.appendChild(p);
                        ladderUpSound();
                    }, 700);
                    playerPosition = push;
                }

                break;
        }

    } else if (
        playerPosition == 17 || playerPosition == 54 ||
        playerPosition == 62 || playerPosition == 64 ||
        playerPosition == 67 || playerPosition == 92 ||
        playerPosition == 95 || playerPosition == 99
    ) {
        switch (push) {
            case 17: {
                p = document.getElementById("player1");
                p.remove();
                push -= 10;
                let d = document.getElementsByClassName(`box${push}`)[0];
                setTimeout(() => {
                    d.appendChild(p);
                    snakeBite();
                }, 500);
                playerPosition = push;
            }
                break;
            case 54:
                {
                    setInterval
                    p = document.getElementById("player1");
                    push -= 20;
                    p.remove();
                    let d = document.getElementsByClassName(`box${push}`)[0];
                    setTimeout(() => {
                        d.appendChild(p);
                       snakeBite();
                    }, 500);

                    playerPosition = push;

                }
                break;
            case 62: {
                p = document.getElementById("player1");
                p.remove();
                push -= 23;
                let d = document.getElementsByClassName(`box${push}`)[0];
                setTimeout(() => {
                    d.appendChild(p);
                    snakeBite();
                }, 500);
                playerPosition = push;
            }
                break;
            case 64:
                {
                    p = document.getElementById("Player1");
                    p.remove();
                    push -=4;
                    let d = document.getElementsByClassName(`box${push}`)[0];
                    setTimeout(function(){
                        d.appendChild(p);
                        snakeBite();
                    },500);
                    playerPosition = push;
                }
                break;
            case 67: {
                p = document.getElementById("player1");
                p.remove();
                push -= 43;
                let d = document.getElementsByClassName(`box${push}`)[0];
                setTimeout(() => {
                    d.appendChild(p);
                    snakeBite();
                }, 500);
                playerPosition = push;
            }
                break;
            case 92: {
                p = document.getElementById("player1");
                p.remove();
                push += 19;
                let d = document.getElementsByClassName(`box${push}`)[0];
                setTimeout(() => {
                    d.appendChild(p);
                   snakeBite();
                }, 500);
                playerPosition = push;
            }
                break;
            case 95: {
                p = document.getElementById("player1");
                p.remove();
                push += 19;
                let d = document.getElementsByClassName(`box${push}`)[0];
                setTimeout(() => {
                    d.appendChild(p);
                   snakeBite();
                }, 500);
                playerPosition = push;
            }
                break;
            case 99:
                {
                    p = document.getElementById("player1");
                    p.remove();
                    push += 21;
                    let d = document.getElementsByClassName(`box${push}`)[0];
                    setTimeout(() => {
                        d.appendChild(p);
                        snakeBite();
                    }, 500);
                    playerPosition = push;
                } 

                break;
        }

    }else if(playerPosition >= 100){
        setTimeout(function(){
            Destination();
        },2000);
        
    }else {
        let p = document.getElementById("player1");
        p.remove();
        let d = document.getElementsByClassName(`box${push}`)[0];
        d.appendChild(p);
    }

}
function ladderUpSound() {
    var sound = document.getElementById("ladderup");
    sound.play();
}
function snakeBite(){
    var sound = document.getElementById("snakebite");
    sound.play();
}

function Destination(){
    var sound = document.getElementById("destination");
    sound.play();
}






