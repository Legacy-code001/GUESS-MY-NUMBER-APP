'use strict';
let score = 20
let highscore = 0
let strictNumber = Math.trunc(Math.random()*20) + 1
document.querySelector(".check").addEventListener("click", function (){
    const guess = Number(document.querySelector(".guess").value)
    

    if(!guess){
        document.querySelector(".message").textContent = "input is empty"
    }else if(guess === strictNumber){
        
        document.querySelector(".number").textContent = strictNumber
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".message").textContent = "correct!"

        if (score > highscore){
            highscore = score
            document.querySelector(".highscore").textContent = highscore
        }
    }else if(guess > strictNumber){
        
        if (score > 1){
            score = score - 1
            document.querySelector(".score").textContent = score;
            document.querySelector(".message").textContent = "too high";
        }else{
            document.querySelector(".score").textContent = 0;
            document.querySelector(".message").textContent = "you loss the game"
        }
        
    }else if(guess < strictNumber){
        if (score > 1){
            score = score - 1
            document.querySelector(".score").textContent = score;
            document.querySelector(".message").textContent = "too low";
        }else{
            document.querySelector(".score").textContent = 0;
            document.querySelector(".message").textContent = "you loss the game"
        }
        
        
    }
})

document.querySelector(".again").addEventListener("click", function(){
     score = 20
    strictNumber = Math.trunc(Math.random()*20) + 1

    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "start guessing...";
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = ""
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"



})

// 'use strict';
// let score = 20
// let highscore = 0
// let strictNumber = Math.trunc(Math.random()*20) + 1

// const desplayMessage = function (message){
//     document.querySelector(".message").textContent = message
// }

// document.querySelector(".check").addEventListener("click", function (){
//     const guess = Number(document.querySelector(".guess").value)

//     if (!guess){
//         desplayMessage("input is empty")
//     }else if (guess === strictNumber){
//         document.querySelector(".number").textContent = strictNumber
//         document.querySelector("body").style.backgroundColor = "#60b347"
//         document.querySelector(".number").style.width = "30rem"
//         desplayMessage("correct")

//         if (score > highscore){
//             highscore = score
//             document.querySelector(".highscore").textContent = highscore
//         }

//     }else if (guess !== strictNumber){
//         if (score > 1){
//             score = score - 1
//             document.querySelector(".score").textContent = score;
//             desplayMessage(guess > strictNumber ? "too high" : "too low")
//         }else{
//             document.querySelector(".score").textContent = 0;
//             desplayMessage("you lost the game")
//         }

//     }
    

// })

