let buttonColours = ["red", "blue", "green", "yellow"];
//存取隨機產生的按鈕順序
let gamePattern = [];
//存取玩家選取的按鈕順序
let userClickedPattern = [];
//點擊按鈕動畫
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
    //console.log(`我的順序[${userClickedPattern}]`);
};
function playSound(color) {
    let audio = new Audio(`../sounds/${color}.mp3`);
    if (color !== undefined) {
        audio.play();
    }
}
//開始遊戲
let pressed = false;
let level = 0;
$(document).on("keydown", function () {
    if (!pressed) {
        nextSequence();
        pressed = true;
    }
});

//點擊按鈕
$(".btn").on("click", function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(`我的click:${userChosenColour}`);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    playSound(userChosenColour);
    //console.log(`我的順序${userClickedPattern}`);
});

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        let audio1 = new Audio(`../sounds/wrong.mp3`);
        audio1.play();
        startOver();
    }
};

//隨機選擇按鈕
let record = [];
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text(`Level ${level}`);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    //閃爍
    $('#' + randomChosenColour).fadeOut(100).fadeIn(100);
    //播放與隨機按鈕相符的音效
    playSound(randomChosenColour);
    //console.log(`遊戲順序${gamePattern}`);
    record.push(level);
    
};


//重新開始
function startOver() {
    $("#level-title").text(`Game Over, Press Any Key to Restart`);
    pressed = false;
    gamePattern = [];
    level = 0;
    //最佳紀錄
    record.sort(function (a, b) {
        return b - a 
    });
    if(record.length>0){
        $("h2").text(`Best:level ${record[0]-1}`);
    }else{
        $("h2").text(`Best:level 0`);
    }
};
