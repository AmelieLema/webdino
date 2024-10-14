//Fonction du timer pour les points
let timerId;
let i = 0;

//Fonction qui démarre le timer
function score() {
    timerId = setInterval(function () {
        i += 1;
        document.getElementById("scoreAffichage").textContent = i;
        console.log(i);
    }, 300);
    document.getElementById("score").textContent = "Restart";
}

//Fonction qui stop le timer et affiche du text en fonction du résultat éffectué
function stop() {
    clearInterval(timerId);
    if (i < 10) {
        console.log("T'es un noob.");
        document.getElementById("classement").textContent = "T'es un noob!";
    } else if (i >= 10 && i < 50) {
        console.log("Pas mal !");
        document.getElementById("classement").textContent = "Pas mal!!";
    } else if (i >= 50 && i < 70) {
        console.log("GG !");
        document.getElementById("classement").textContent = "GG!";
    } else {
        console.log("Apprend moi Master.");
        document.getElementById("classement").textContent = "Apprend moi Master!!!";
    }
    i = 0;

}

//fonction qui permet de changer la couleur de l'élément dino

//Pour le bouton rouge
const rouge = document.getElementById("Dino");
const boutonrouge = document.getElementById("red");

function red() {
    const couleurRouge = "red";
    Dino.style.backgroundColor = couleurRouge;
    console.log("red");

    gtag('event', 'red', {
        'button_color': couleurRouge,
        'page_location': window.location.href
    });
}

//Pour le bouton vert
const vert = document.getElementById("Dino");
const boutonvert = document.getElementById("green");

function green() {
    const couleurVert = "green";
    Dino.style.backgroundColor = couleurVert;
    console.log("green");
}

//Pour le bouton bleu
const bleu = document.getElementById("Dino");
const boutonbleu = document.getElementById("blue");

function blue() {
    const couleurBleu = "blue";
    Dino.style.backgroundColor = couleurBleu;
    console.log("blue");
}

//Pour le bouton gray
const rose = document.getElementById("Dino");
const boutonrose = document.getElementById("gray");

function gray() {
    const couleurGray = "gray";
    Dino.style.backgroundColor = couleurGray;
    console.log("gray");
}

//le saut
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
        event.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("hey")
    const personnage = document.getElementById("Dino");
    let isJumping = false;

    window.addEventListener("keydown", function (event) {
        console.log("espace")
        if (event.keyCode === 32 && !isJumping) {
            isJumping = true;
            jump();
        }
    });

    // Fonction de saut
    function jump() {
        let position = 0;
        const jumpInterval = setInterval(function () {
            if (position >= 150) {
                clearInterval(jumpInterval);
                // Retour au sol
                const fallInterval = setInterval(function () {
                    if (position <= 0) {
                        clearInterval(fallInterval);
                        isJumping = false;
                    } else {
                        position -= 3;
                        personnage.style.bottom = position + "px";
                    }
                }, 2);
            } else {
                position += 3;
                personnage.style.bottom = position + "px";
            }
        }, 2);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const enemy = document.getElementById("enemy");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    let ilAvance = false;
    let stopAnimation = false;
    let positionEnemy = 0;
    let direction = 1; // 1 pour avancer, -1 pour reculer

    function animerEnnemi() {
        if (stopAnimation) {
            return; // Arrête l'animation si stopAnimation est vrai
        }

        positionEnemy += 10 * direction;
        enemy.style.right = positionEnemy + "px";

        if (positionEnemy >= 800) {
            direction = -1; // Commence à reculer
        } else if (positionEnemy <= 0) {
            direction = 1; // Commence à avancer
        }
    }

    startButton.addEventListener("click", function () {
        ilAvance = true;
        stopAnimation = false;
        const intervalId = setInterval(animerEnnemi, 10); // Intervalles de 10 millisecondes
        // Stockez l'ID de l'intervalle pour pouvoir l'arrêter plus tard
        stopButton.addEventListener("click", function () {
            ilAvance = false;
            stopAnimation = true; // Active l'arrêt de l'animation
            clearInterval(intervalId); // Arrête l'intervalle lorsque le bouton "Stop" est cliqué
        });
    });
});