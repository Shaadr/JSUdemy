//multiple args

let add = function(a, b, c) {
    return a + b * c
}

let result = add(10,1, 2);
console.log(result);

//default args

let getScoreText = function (name = "player", score=0) {
    // console.log(name);
    // console.log(score);
    return `Name: ${name} - Score: ${score}`
}

// getScoreText("andrew")
// getScoreText("mike",9001)
// getScoreText(undefinded, 15)

let scoreText = getScoreText("Mike", 9002);
console.log(scoreText)


//Challenge
// take total, percentageTip (as decimal .2)

let getTip = function (total,percentageTip) {
    return total * percentageTip
}

let getTotal = function(total, percentageTip = 0.2) {
    return getTip(total, percentageTip) + total
}

let total = getTotal(100,0.25)
console.log(total)