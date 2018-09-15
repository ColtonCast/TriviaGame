// on click submit answers function ends quiz and disables submit button
$("#submitAnswers").on("click", function () {
    endQuiz();
    document.getElementById("submitAnswers").style.visibility = "hidden";
})
// answercheck contains the values of radio buttons and then compares to answers
// answercheck is called inside the endquiz function
function answerCheck() {

    var question1 = $("input[type='radio'][name='question1']:checked").val();
    var question2 = $("input[type='radio'][name='question2']:checked").val();
    var question3 = $("input[type='radio'][name='question3']:checked").val();
    var question4 = $("input[type='radio'][name='question4']:checked").val();
    var question5 = $("input[type='radio'][name='question5']:checked").val();

    // if statements compare checked value vs pre determined html values
    if (question1 == timechecks()) {
        score += 1;
    }
    if (question2 == "B") {
        score += 1;
    }
    if (question3 == "C") {
        score += 1;
    }
    if (question4 == "D") {
        score += 1;
    }
    if (question5 == "A") {
        score += 1;
    }
    return score;
}

//  timerdisplay and the variables below are all for the clockTimer function
// time is displayed to the timerdisplay div
$("#timerDisplay").text(timeLeft);
var clockCounter = 0;
var timeLeft = 65;
var score = 0;

function clockTimer() {
    clockCounter++;
    // time left is subtracted from clockcounter++  and is displayed
    $("#timerDisplay").text(timeLeft - clockCounter + " seconds left");
    // endquiz is ran when the timer reaches zero
    if (clockCounter === timeLeft) {
        endQuiz();
        clearInterval(timerStart);
        document.getElementById("submitAnswers").style.visibility = "hidden";
    }
}
var timerStart = setInterval(clockTimer, 1000);

// endquiz checks answers, stops timer and then displays the score
function endQuiz() {
    answerCheck();
    clearInterval(timerStart);
    // hides submit button
    document.getElementById("gamePrize").style.visibility = "visible";
    $("#gamePrize").text("you got " + score + " correct out of 5")

}

// timechecks makes a date variable and then getDay gets the day in a 0-6 number which is compared to value placeholders in html
function timechecks() {
    var t = new Date;
    var d = t.getDay();
    return d;
}
timechecks();


