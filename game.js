let buttonColours = ["red", "blue", "green", "yellow"];
//存取隨機產生的按鈕順序
let gamePattern = [];
//存取玩家選取的按鈕順序
let userClickedPattern = [];
//得到點擊按鈕的#id
$(".btn").on("click", function () {
    let userChosenColour = $(this).attr("id");
    //console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});

//隨機產生0-3整數作為gamePattern的索引
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $('#' + randomChosenColour).fadeOut(100).fadeIn(100);
};

// let audio = new Audio(`../sounds/${whichBtn}.mp3`);
//     audio.play();
//閃爍



//音效，Chrome的Auto play
// let audio = new Audio(`../sounds/${randomChosenColour}.mp3`);
// $("#green").click(function () {
//     audio.play();
// });


    // $(".btn").on("click", function () {
    //     let whichBtn = $(this).attr("id");
    //     let audio1 = new Audio(`../sounds/${whichBtn}.mp3`);
    //     audio1.play();
       
    // });


