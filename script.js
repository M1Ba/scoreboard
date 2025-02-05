function homePlus(point) {
    let score = document.getElementById("home-score");

    let changedScore = Number(score.textContent) + point;
    score.textContent = changedScore;

    highlight()
}

function guestPlus(point) {
    let score = document.getElementById("guest-score");

    let changedScore = Number(score.textContent) + point;
    score.textContent = changedScore;

    highlight()
}

function newGame() {
    let homeScore = document.getElementById("home-score");
    let guestScore = document.getElementById("guest-score");

    homeScore.textContent = 0;
    guestScore.textContent = 0;
}

function highlight() {
    let homeScore = document.getElementById("home-score");
    let guestScore = document.getElementById("guest-score");

    if (Number(homeScore.textContent) > Number(guestScore.textContent)) {
        homeScore.style.color = "#aeff46";
        guestScore.style.color = "#eb4747";
    } else if (Number(guestScore.textContent) > Number(homeScore.textContent)) {
        guestScore.style.color = "#aeff46";
        homeScore.style.color = "#eb4747";
    } else {
        homeScore.style.color = "#eb4747";
        guestScore.style.color = "#eb4747";
    }
}

